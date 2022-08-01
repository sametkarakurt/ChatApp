import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Platform,
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
import { Context } from "../../Context/Context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { addChat, getChats, authState } from "../../config/firebase";
import { PortalComponent } from "../../components/PortalComponent/PortalComponet";

const Home = ({ navigation }) => {
  const pageTitle = "Messages";
  const indicatorColor = "#3A2E61";
  const backColor = ["#E4DEE5", "#FED6E3"];
  const context = useContext(Context);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [dataLoading, setDataLoading] = useState(true);

  const getData = async () => {
    console.log(context.user);
    await getChats(context.user.email, setChats, setDataLoading);
  };

  useEffect(() => {
    getData();
  }, [context.user]);

  const renderListItem = ({ item }) => (
    <List.Item
      title={item.data.users.find((x) => x !== context.user.email)}
      titleStyle={styles.title}
      description={(item.data.messages ?? [])[0]?.text ?? undefined}
      descriptionStyle={styles.description}
      left={() => (
        <Avatar.Text
          style={styles.avatar}
          label={item.data.users
            .find((x) => x !== context.user.email)
            .split(" ")
            .reduce((prev, current) => prev + current[0], "")}
        />
      )}
      onPress={() => navigation.navigate("Chat", { chatId: item.id })}
    />
  );

  const AddIcon = () => {
    return (
      <MaterialCommunityIcons
        name="square-edit-outline"
        style={{ color: "#3A2E61" }}
        size={30}
      />
    );
  };

  return (
    <View>
      <LinearGradient colors={backColor} style={styles.background} />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.pageTitle}>{pageTitle}</Text>
            <PortalComponent
              showDialog={showDialog}
              setEmail={setEmail}
              setShowDialog={setShowDialog}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              email={email}
            />
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => {
                setShowDialog(true);
              }}
            >
              <AddIcon />
            </TouchableOpacity>
          </View>
          <BlurView intensity={105} style={styles.body}>
            <View style={styles.list}>
              {dataLoading ? (
                <ActivityIndicator size={"large"} color={indicatorColor} />
              ) : (
                <FlatList data={chats} renderItem={renderListItem} />
              )}
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
    backgroundColor: "#BDB0E7",
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
    marginTop: Platform.OS === "ios" ? "10%" : "20%",
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
