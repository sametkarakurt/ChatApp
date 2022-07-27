import * as React from "react";
import Home from "../../screens/Home/Home";
import Settings from "../../screens/Settings/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="home" size={26} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="cog" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
