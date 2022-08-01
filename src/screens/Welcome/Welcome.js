import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const backgroundImage = {
  uri: "https://i.ibb.co/8zKr57s/moon.png",
};
const logoImage = { uri: "https://i.ibb.co/S6CBVv3/group.png" };
const Welcome = ({ navigation }) => {
  const pageTitle = "Hello, Lets Chat";
  const pageMessage = "What are you doing today? Everything is ok?";
  const signButton = "Sign in";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 0.1 }}></View>
        <Image style={styles.logo} source={logoImage} />

        <Text style={styles.helloMessage}>{pageTitle}</Text>
        <Text style={styles.contentMessage}>{pageMessage}</Text>
        <TouchableOpacity
          style={styles.signButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.signIn}>{signButton}</Text>
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
    flex: 0.6,
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
    flex: 0.2,
    width: 241,
    height: 55,
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "normal",
    color: "#3A2E61",
    fontSize: 18,
  },
  signIn: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
    color: "#6B56AB",
  },
  signButton: {
    flex: 0.05,
  },
});

export default Welcome;
