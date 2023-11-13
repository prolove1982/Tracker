import { createContext, useReducer, React } from "react";
import authReducer from "./authReducer";
import authInitialState from "../initialStates/authInitialState";
import trackerApi from "../../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const navigation = useNavigation();

  const signup = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      authDispatch({ type: "sign_in", payload: response.data.token });
      if (authState.errorMessage === "") {
        navigation.navigate("Home");
      }
    } catch (error) {
      authDispatch({
        type: "add_error",
        payload: "Something went wrong with Sign up",
      });
    }
  };

  const autoSignin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      authDispatch({ type: "sign_in", payload: token });
      navigation.navigate("Home");
    } else {
      navigation.navigate("Register");
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      authDispatch({ type: "sign_in", payload: response.data.token });
      navigation.navigate("Home");
    } catch (error) {
      authDispatch({
        type: "add_error",
        payload: "Something went wrong with Sign up",
      });
    }
  };

  const signout = async () => {
    await AsyncStorage.removeItem("token");
    authDispatch({ type: "sign_out" });
    navigation.navigate("SignIn");
  };

  const clearErrorMessage = () => {
    authDispatch({ type: "clear_error_message" });
  };

  return (
    <TrackerContext.Provider
      value={{
        authState,
        signup,
        signin,
        clearErrorMessage,
        autoSignin,
        signout,
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
};
