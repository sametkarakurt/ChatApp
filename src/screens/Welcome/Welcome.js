import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const backgroundImage = {
  uri: "/Users/sametkarakurt/ChatApp/assets/moon.png",
};
const logoImage = "/Users/sametkarakurt/ChatApp/assets/group.png";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Image style={styles.logo} source={require(logoImage)} />
        <Text style={styles.helloMessage}>Hello, Lets Chat</Text>
        <Text style={styles.contentMessage}>
          What are you doing today? Everything is ok?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.signIn}>Sign in</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: "90%",
    resizeMode: "contain",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  helloMessage: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    width: 188,
    height: 36,
    color: "#3A2E61",
  },
  contentMessage: {
    width: 241,
    height: 55,
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "normal",
    color: "#3A2E61",
    fontSize: 18,
    marginTop: 6,
    marginBottom: 64,
  },
  signIn: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
    color: "#6B56AB",
  },
});

export default Welcome;
