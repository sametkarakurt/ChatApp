import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Context } from "../../Context/Context";
import { BlurView } from "expo-blur";
import { TextInput, Button } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { updateUser } from "../../config/firebase";
const Settings = () => {
  const context = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const confirmButtonTitle = "SAVE";
  const pageTitle = "Edit Profile";
  const logoutButtonIconName = "log-out";
  const logoutButtonColor = "#3A2E61";
  useEffect(() => {
    setUsername(context.user.providerData[0].displayName);
    setEmail(context.user.providerData[0].email);
  }, [context.user]);

  const SettingsTextInput = (props) => {
    <TextInput
      autoCapitalize="none"
      value={props.value}
      style={styles.input}
      mode="outlined"
      label={props.label}
      onChangeText={(text) => props.setState(text)}
      right={
        <TextInput.Icon
          name="close"
          onPress={() => {
            props.setState("");
          }}
        />
      }
    />;
  };

  return (
    <BlurView intensity={105} style={styles.body}>
      <SafeAreaView style={{ marginHorizontal: 20, flex: 1 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flexDirection: "column", alignItems: "space-between" }}>
          <View></View>
          <TouchableOpacity
            onPress={() => {
              context.logout();
            }}
          >
            <Entypo
              name={logoutButtonIconName}
              style={styles.cancel}
              color={logoutButtonColor}
              size={36}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{pageTitle}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <SettingsTextInput
          value={username}
          label="Username"
          setState={setUsername}
        />
        <SettingsTextInput value={email} label="Email" setState={setEmail} />
        <View style={{ flex: 1.5 }}></View>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => {
            updateUser(username, email);
          }}
          style={styles.button}
        >
          {confirmButtonTitle}
        </Button>

        <View style={{ flex: 5 }}></View>
      </SafeAreaView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#D7D2E0",
  },
  input: {
    backgroundColor: "#D0E3E7",
    marginTop: 33,

    overflow: "hidden",
  },
  title: {
    color: "#3A2E61",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.165,
  },
  button: {
    backgroundColor: "#6955AA",
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonLabel: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 22,
  },
});

export default Settings;
