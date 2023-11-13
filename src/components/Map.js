import { StyleSheet } from "react-native";
import React from "react";
import MapView, { Polyline } from "react-native-maps";
import { requestForegroundPermissionsAsync } from 'expo-location';

const Map = () => {
  return (
    <MapView
      initialRegion={{
        longitude: 6.583333,
        latitude: 3.333333,
        logitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
