import React, { useContext, useCallback } from "react";
import { Text } from "react-native-elements";
import Spacer from "../../components/Spacer";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TrackerContext } from "../../context/reducers/TrackerContext";
import { useFocusEffect } from "@react-navigation/native";
import AuthForm from "../../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { authState, signup, clearErrorMessage } = useContext(TrackerContext);

  useFocusEffect(
    useCallback(() => {
      // Clear error message when the screen gains focus
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        onSubmit={signup}
        navigation={navigation}
        submitButtonText="Sign Up"
        errorMessage={authState.errorMessage}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.link}>Already have an account?</Text>
          <Text style={styles.link}>Sign In instead.</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

export default SignupScreen;
