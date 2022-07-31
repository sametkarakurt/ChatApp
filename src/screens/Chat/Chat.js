import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Context } from "../../Context/Context";
import { getMessages, addMessage, addChat } from "../../config/firebase";
import { GiftedChat } from "react-native-gifted-chat";
const Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const context = useContext(Context);

  const [uid, setUID] = useState();
  const [name, setName] = useState();
  const getData = async () => {
    const res = await getMessages(route.params.chatId, setMessages);
    setUID(context.user.user.uid);
    setName(context.user._tokenResponse.displayName);
    console.log(route.params.chatId);
    addMessage(route.params.chatId);
  };
  useEffect(() => {
    getData();
  }, [route.params.chatId]);

  const onSend = (m = []) => {
    addMessage(route.params.chatId, GiftedChat.append(messages, m));
  };
  return (
    <GiftedChat
      messages={messages.map((x) => ({
        ...x,
        createdAt: x.createdAt?.toDate(),
      }))}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: uid,
        name: name,
      }}
    />
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
