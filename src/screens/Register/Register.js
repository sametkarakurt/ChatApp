import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import { signUp } from "../../config/firebase";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["#A8C2ED", "#FED6E3"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Entypo
            name="chevron-left"
            color={"#4F93F9"}
            size={48}
            style={{ marginTop: 90 }}
          />
        </TouchableOpacity>
        <Text style={styles.signText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            signUp(name, email, password, setIsLoading);
          }}
          loading={isLoading}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    marginTop: 175,
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  registerText: {
    height: 24,
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.165,
    color: "#6B56AB",
  },
  registerText2: {
    height: 24,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 19,
    letterSpacing: -0.165,
    color: "#3A2E61",
  },
  input: {
    width: "100%",
    height: 60,
    borderColor: "#3A2E61",
    borderWidth: 2,
    marginTop: 25,
    backgroundColor: "transparent",
    borderRadius: 15,
    padding: 16,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.165,
    fontStyle: "normal",
    fontStyle: "normal",
  },
  signText: {
    height: 31,
    marginTop: 80,
    color: "#3A2E61",
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.165,
    borderStyle: "solid",
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: 25,
  },
  container: {
    marginHorizontal: 20,
    height: "100%",
  },
  button: {
    backgroundColor: "rgba(105, 85, 170, 0.99)",
    borderRadius: 15,
    height: 60,
    marginTop: 80,
    justifyContent: "center",
  },
  buttonContent: {
    width: "100%",
    height: "100%",
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 31,
    letterSpacing: -0.165,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,

    height: "100%",
  },
});

export default Register;
