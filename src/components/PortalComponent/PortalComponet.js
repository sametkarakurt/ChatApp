import React, { useContext } from "react";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { Context } from "../../Context/Context";
import { addChat } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";
export const PortalComponent = (props) => {
  const context = useContext(Context);
  const navigation = useNavigation();
  return (
    <Portal>
      <Dialog
        onDismiss={() => props.setShowDialog(false)}
        visible={props.showDialog}
      >
        <Dialog.Title>New Chat</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Enter user email"
            autoCapitalize="none"
            onChangeText={(text) => props.setEmail(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              props.setShowDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onPress={async () => {
              props.setIsLoading(true);
              const res = await addChat(
                [context.user.email, props.email],
                props.setIsLoading
              );
              props.setShowDialog(false);

              navigation.navigate("Chat", { chatId: res });
            }}
            loading={props.isLoading}
          >
            Save
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
