import React, { useContext } from "react";
import { TrackerContext } from "../../context/reducers/TrackerContext";
import { Text, Button } from "react-native-elements";
import Spacer from "../../components/Spacer";
import SafeAreaView from "react-native-safe-area-view";
import { styles } from "./styles";

const AccountScreen = () => {
  const { signout } = useContext(TrackerContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1 style={styles.header}>
        Account Screen
      </Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;
