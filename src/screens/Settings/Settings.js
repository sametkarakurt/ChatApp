import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Context } from "../../Context/Context";
const Settings = () => {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context.user);
  }, [context.user]);
  return (
    <View style={styles.container}>
      <Text>{context.user._tokenResponse.email}</Text>
      <Button
        title="Sign out"
        onPress={() => {
          context.logout();
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
