import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/signinScreen/SigninScreen";
import SignupScreen from "../screens/signupScreen/SignupScreen";
import HomeBottomNavigator from "./HomeBottomNavigator";
import ResolveAuthScreen from "../screens/resolveAuthScreen";
import TrackDetailScreen from "../screens/trackDetailScreen/TrackDetailScreen";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, headerTitle: "Signup Screen" }}
      initialRouteName="Loading"
    >
      <AuthStack.Screen name="Loading" component={ResolveAuthScreen} />
      <AuthStack.Screen name="Register" component={SignupScreen} />
      <AuthStack.Screen name="SignIn" component={SigninScreen} />
      <AuthStack.Screen name="Home" component={HomeBottomNavigator} />

      <AuthStack.Screen
        name="Details"
        component={TrackDetailScreen}
        options={{ headerShown: true, headerTitle: "Track Details" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
