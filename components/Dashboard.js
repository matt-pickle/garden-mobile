import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import * as firebase from "firebase";
import {logOut, updateGardens} from "../api/firebase-methods";
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from "./SettingsModal";
import CreateGardenModal from "./CreateGardenModal";
import DeleteModal from "./DeleteModal";
import GardenList from "./GardenList";
import GardenEditor from "./GardenEditor";
import Schedule from "./Schedule";
import styles from "../styles/styles";

function Dashboard(props) {
  const [name, setName] = useState(props.userObj.name);
  const [gardens, setGardens] = useState(props.userObj.gardens);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isCreateGardenModalVisible, setIsCreateGardenModalVisible] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
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
    let updatedGardensArr = [...gardens, {
      id: timestamp,
      gardenName: gardenName,
      zone: zone,
      width: 4,
      height: 4,
      plantedArr: []
    }];
    setGardens(updatedGardensArr);
    updateGardens(userRef, updatedGardensArr);
    setIsCreateGardenModalVisible(false);
  }

  function openEditor(garden) {
    setDisplayedGarden(garden);
    setIsEditorOpen(true);
  }

  function saveGarden(width, height, plantedArr) {
    let updatedGardensArr = gardens.filter(item => {
      return item.id !== displayedGarden.id; 
    });    
    updatedGardensArr.push({
      id: displayedGarden.id,
      gardenName: displayedGarden.gardenName,
      zone: displayedGarden.zone,
      width: width,
      height: height,
      plantedArr: plantedArr
    });
    setGardens(updatedGardensArr);
    updateGardens(userRef, updatedGardensArr);   
  }

  function saveAndClose(width, height, plantedArr) {
    saveGarden(width, height, plantedArr);
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
    setIsCreateGardenModalVisible={setIsCreateGardenModalVisible}
    openDeleteModal={openDeleteModal}
  />;

  const gardenEditor = <GardenEditor
    displayedGarden={displayedGarden}
    zone={props.userObj.zone}
    saveGarden={saveGarden}
    saveAndClose={saveAndClose}
    openDeleteModal={openDeleteModal}
  />;

  const schedule = <Schedule
    gardens={gardens}
    zone={props.userObj.zone}
    setIsScheduleOpen={setIsScheduleOpen}
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
        <TouchableOpacity
          onPress={() => setIsScheduleOpen(true)}
        >
          <Text>OPEN SCHEDULE</Text>
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
        gardens && !isEditorOpen && !isScheduleOpen ?
        gardenList : 
        gardens && isEditorOpen ?
        gardenEditor :
        gardens && isScheduleOpen ?
        schedule :
        null
      }
    </KeyboardAvoidingView>
  );

}

export default Dashboard;