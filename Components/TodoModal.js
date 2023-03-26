import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../Color";

const TodoModal = ({ list, closeModal }) => {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);

  const taskCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const renderTodo = ({ item }) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Ionicons
            name={item.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color={Colors.gray}
            style={{ width: 32 }}
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: item.completed ? "line-through" : "none",
              color: item.completed ? Colors.gray : Colors.black,
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
        onPress={closeModal}
      >
        <AntDesign
          name="close"
          size={24}
          color={Colors.black}
          onPress={closeModal}
        />
      </TouchableOpacity>
      <View
        style={[styles.section, styles.header, { borderBottomColor: color }]}
      >
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {taskCount} tasks
          </Text>
        </View>
      </View>

      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return renderTodo({ item });
          }}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{
            paddingHorizontal: 32,
            paddingVertical: 64,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView
        style={[styles.section, styles.footer]}
        behavior="padding"
      >
        <TextInput style={[styles.input, { borderColor: color }]} />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: color }]}>
          <AntDesign name="plus" size={16} color={Colors.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "center",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    fontWeight: "600",
    color: Colors.gray,
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.black,
  },
});

export default TodoModal;
