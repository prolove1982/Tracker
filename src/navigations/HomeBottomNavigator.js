import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/accountScreen/AccountScreen";
import TrackCreateScreen from "../screens/trackCreateScreen/TrackCreateScreen";
import TrackListScreen from "../screens/trackListScreen/TrackListScreen";

const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="List"
        component={TrackListScreen}
        options={{ tabBarShowLabel: false }}
      />
      <BottomTab.Screen name="Create" component={TrackCreateScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

export default HomeBottomNavigator;
