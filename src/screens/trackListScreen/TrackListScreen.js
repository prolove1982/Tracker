import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import React from "react";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        style={{ marginTop: 35, marginHorizontal: 15 }}
        title="Go to Track Details Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default TrackListScreen;
