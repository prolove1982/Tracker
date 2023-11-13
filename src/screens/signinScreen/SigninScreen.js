import { Text } from "react-native-elements";
import React, { useContext, useCallback } from "react";
import Spacer from "../../components/Spacer";
import { TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AuthForm from "../../components/AuthForm";
import { TrackerContext } from "../../context/reducers/TrackerContext";
import { styles } from "./styles";

const SigninScreen = ({ navigation }) => {
  const { authState, signin, clearErrorMessage } = useContext(TrackerContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        onSubmit={signin}
        navigation={navigation}
        submitButtonText="Sign In"
        errorMessage={authState.errorMessage}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Don't have an account?</Text>
          <Text style={styles.link}>Go back to Sign up</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

export default SigninScreen;
