import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Random from "expo-random";
import { Button } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import { signIn } from "../../config/firebase";
import { Context } from "../../Context/Context";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const LoginTextInput = (props) => {
  return (
    <TextInput
      autoCapitalize="none"
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={(text) => props.setState(text)}
      secureTextEntry={props.security}
    />
  );
};
const Register = ({ navigation }) => {
  const pageTitle = "Sign In";
  const emailPlaceholder = "Email";
  const passwordPlaceholder = "Password";
  const bgColors = ["#A8C2ED", "#FED6E3"];
  const confirmButtonTitle = "SIGN IN";
  const registerMessage = "Don't have an account? ";
  const registerButton = "Sign Up";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);
  const login = async () => {
    const res = await signIn(email, password, setIsLoading);
    context.authenticate(res);
  };

  const ConfirmButton = ({ type, title }) => {
    return (
      <Button
        mode={type}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
        loading={isLoading}
        onPress={() => login()}
      >
        {title}
      </Button>
    );
  };

  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={bgColors}
        style={styles.background}
      />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 3 }} />
        <Text style={styles.signText}>{pageTitle}</Text>
        <LoginTextInput
          setState={setEmail}
          placeholder={emailPlaceholder}
          security={false}
        />
        <LoginTextInput
          setState={setPassword}
          placeholder={passwordPlaceholder}
          security={true}
        />
        <View style={{ flex: 1 }} />
        <ConfirmButton type={"contained"} title={confirmButtonTitle} />
        <View style={{ flex: 3 }} />
        <TouchableOpacity
          style={styles.register}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerText}>{registerMessage}</Text>
          <Text style={styles.registerText2}>{registerButton}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
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
