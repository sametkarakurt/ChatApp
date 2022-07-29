import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import {
  List,
  Avatar,
  Divider,
  Portal,
  Dialog,
  TextInput,
  Button,
} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const avatarImage = "/Users/sametkarakurt/ChatApp/assets/Reyna.png";
const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["#E4DEE5", "#FED6E3"]}
        style={styles.background}
      />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.pageTitle}>Messages</Text>
            <Portal>
              <Dialog
                onDismiss={() => setShowDialog(false)}
                visible={showDialog}
              >
                <Dialog.Title>New Chat</Dialog.Title>
                <Dialog.Content>
                  <TextInput label="Enter user email" />
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={() => {
                      setShowDialog(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      setShowDialog(false);
                    }}
                  >
                    Save
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => {
                setShowDialog(true);
              }}
            >
              <MaterialCommunityIcons
                name="square-edit-outline"
                style={{ color: "#3A2E61" }}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <BlurView intensity={105} style={styles.body}>
            <View style={styles.list}>
              <List.Item
                title="User Name"
                titleStyle={styles.title}
                description="Hi,I will be waiting for you?"
                descriptionStyle={styles.description}
                left={() => (
                  <Image style={styles.avatar} source={require(avatarImage)} />
                )}
              />
              <Divider />

              <Divider />
            </View>
          </BlurView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  avatar: {
    marginRight: 14,
    borderRadius: 25,
    width: 63.05,
    height: 66,
    backgroundColor: "#D8DE96",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  body: {
    marginTop: 40,
    backgroundColor: "#D7D2E0",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },

  list: {
    marginTop: 34,
    marginHorizontal: 20,
  },
  title: {
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 23,
    letterSpacing: 0.5,
    color: "#3A2E61",
    marginBottom: 4,
  },
  description: {
    opacity: 0.5,
    color: "#3A2E61",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  pageTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.165,
    color: "#3A2E61",
    marginLeft: 25,
  },
  chatButton: {
    marginRight: 20,
    color: "#3A2E61",
  },
});
