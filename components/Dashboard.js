import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import * as firebase from "firebase";
import {logOut} from "../api/firebase-methods";
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from "./SettingsModal";
import DeleteModal from "./DeleteModal";
import styles from "../styles/styles";

function Dashboard(props) {
  const [name, setName] = useState(props.userObj.name);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [gardenToDelete, setGardenToDelete] = useState({});
  const currentUserUID = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(currentUserUID);

  function handleChangeName(newName) {
    setName(newName);
    userRef.update({
      name: newName
    });
  }

  function handleOpenDeleteModal(garden) {
    setGardenToDelete(garden);
    setIsDeleteModalVisible(true);
  }

  function handleLogOut() {
    logOut();
    props.setScreen("LoginScreen");
  }

  return (
    <KeyboardAvoidingView style={styles.dashContainer} behavior="height">
      <View style={styles.dashTopRowContainer}>
        <Text style={styles.dashHeader}>{name}'s Gardens</Text>
        <TouchableOpacity
          onPress={() => setIsSettingsVisible(true)}
        >
          <Ionicons
            name="settings-sharp"
            style={styles.dashHeader}
          />
        </TouchableOpacity>
      </View>
      <SettingsModal
        styles={styles}
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        handleChangeName={handleChangeName}
        setScreen={props.setScreen}
        handleLogOut={handleLogOut}
      />
      <DeleteModal
        styles={styles}
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        id={gardenToDelete.id}
        title={gardenToDelete.title}
        // handleDeleteGarden={handleDeleteGarden}
      />
    </KeyboardAvoidingView>
  );

}

export default Dashboard;