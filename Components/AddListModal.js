import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../Color";
import tempData from "../tempData";

const AddListModal = ({ closeModal, addList }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(Colors.blue);
  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];

  const createTodo = () => {
    const todo = { name, color, todos: [] };
    addList(todo);
    setName("");
    closeModal();
  };

  const renderColors = () => {
    return backgroundColors.map((col) => {
      return (
        <TouchableOpacity
          key={col}
          style={[styles.colorSelect, { backgroundColor: col }]}
          onPress={() => setColor(col)}
        />
      );
    });
  };

  const dynamicColor = color || backgroundColors[0];

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color={Colors.black} />
      </TouchableOpacity>

      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Add to do List</Text>

        <TextInput
          style={styles.input}
          placeholder="List Name?"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "space-between",
          }}
        >
          {renderColors()}
        </View>

        <TouchableOpacity
          style={[styles.create, { backgroundColor: dynamicColor }]}
          onPress={createTodo}
        >
          <Text style={{ color: Colors.white, fontWeight: "600" }}>
            Create!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 16,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});

export default AddListModal;
