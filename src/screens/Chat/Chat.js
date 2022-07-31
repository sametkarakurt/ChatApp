import React, { useState, useContext } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Context } from "../../Context/Context";
const Chat = () => {
  const context = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>Chat App</Text>
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

export default Chat;
