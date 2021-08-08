import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import * as firebase from "firebase";
import {logOut, updateGardens} from "../api/firebase-methods";
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from "./SettingsModal";
import CreatGardenModal from "./CreateGardenModal";
import DeleteModal from "./DeleteModal";
import GardenList from "./GardenList";
import styles from "../styles/styles";

function Dashboard(props) {
  const [name, setName] = useState(props.userObj.name);
  const [gardens, setGardens] = useState(props.userObj.gardens);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isCreateGardenModalVisible, setIsCreateGardenModalVisible] = useState(false);
  const [gardenToDelete, setGardenToDelete] = useState({});
  const [displayedGarden, setDisplayedGarden] = useState(null);
  const currentUserUID = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(currentUserUID);

  function changeName(newName) {
    setName(newName);
    userRef.update({
      name: newName
    });
  }

  function createNewGarden(gardenName, zone) {
    const timestamp = Date.now();
    let updatedGardensArr = gardens.push({
      id: timestamp,
      gardenName: gardenName,
      zone: zone,
      gardenObj: {}
    });
    setGardens(updatedGardensArr);
    updateGardens(userRef, updatedGardensArr);   
  }

  function saveGarden(gardenObj) {
    let updatedGardensArr = gardens.filter(item => {
      return item.id !== displayedGarden.id; 
    });    
    updatedGardensArr.push({
      id: displayedGarden.id,
      gardenName: displayedGarden.gardenName,
      zone: displayedGarden.zone,
      gardenObj: gardenObj
    });
    setGardens(updatedGardensArr);
    updateGardens(userRef, updatedGardensArr);   
  }

  function saveAndClose(gardenName, gardenObj) {
    saveGarden(gardenName, gardenObj);
    setIsEditorOpen(false);
    setDisplayedGarden(null);
  }

  function openDeleteModal(garden) {
    setGardenToDelete(garden);
    setIsDeleteModalVisible(true);
  }

  function deleteGarden(id) {
    let updatedGardensArr = gardens.filter(item => {
      return item.id !== id;
    });
    setGardens(updatedGardensArr);
    updateGardens(userRef, updatedGardensArr);
    setIsEditorOpen(false);
    setDisplayedGarden(null);
    setIsDeleteModalVisible(false);
  }

  function handleLogOut() {
    logOut();
    props.setScreen("LoginScreen");
  }

  const gardenList = <GardenList 
    gardens={gardens}
    openEditor={openEditor}
    openDeleteModal={openDeleteModal}
  />;

  const gardenEditor = <GardenEditor
    displayedGarden={displayedGarden}
    saveGarden={saveGarden}
    saveAndClose={saveAndClose}
    openDeleteModal={openDeleteModal}
  />;

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
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        changeName={changeName}
        setScreen={props.setScreen}
        handleLogOut={handleLogOut}
      />
      <CreateGardenModal 
        isCreateGardenModalVisible={isCreateGardenModalVisible}
        setIsCreateGardenModalVisible={setIsCreateGardenModalVisible}
        createNewGarden={createNewGarden}
      />
      <DeleteModal
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        id={gardenToDelete.id}
        gardenName={gardenToDelete.gardenName}
        deleteGarden={deleteGarden}
      />
      {
        gardens && !isEditorOpen ?
        gardenList : 
        gardens && isEditorOpen ?
        gardenEditor :
        null
      }
    </KeyboardAvoidingView>
  );

}

export default Dashboard;