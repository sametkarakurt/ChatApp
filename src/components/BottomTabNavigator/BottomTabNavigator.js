import * as React from "react";
import Home from "../../screens/Home/Home";
import Settings from "../../screens/Settings/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#D0E3E7",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          bottom: 0,
          height: 92,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              style={{ color: "#3A2E61" }}
              name="ios-chatbubbles"
              size={36}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="cog" size={36} style={{ color: "#3A2E61" }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
