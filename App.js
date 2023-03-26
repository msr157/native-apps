import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Color";
import tempData from "./tempData";
import TodoList from "./Components/TodoList";
import AddListModal from "./Components/AddListModal";

export default function App() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [listData, setListData] = useState(tempData);

  const toggleAddModal = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  const renderList = (item) => {
    return <TodoList list={item}></TodoList>;
  };

  addList = (list) => {

  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={addTodoVisible}
        onRequestClose={() => toggleAddModal()}
      >
        <AddListModal closeModal={toggleAddModal} addList={addList}/>
      </Modal>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo
          <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => toggleAddModal()}
        >
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={listData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return renderList(item);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.blue,
    marginTop: 8,
  },
});
