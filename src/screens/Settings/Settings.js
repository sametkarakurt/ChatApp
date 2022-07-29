import React, { useState, useContext } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Context } from "../../Context/Context";
const Settings = () => {
  const context = useContext(Context);
  return (
    <View style={styles.container}>
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
