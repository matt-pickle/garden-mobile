import React, {useState} from "react";
import {KeyboardAvoidingView} from "react-native";
import * as firebase from "firebase";
import {logOut, updateGardens} from "../api/firebase-methods";
import SettingsModal from "./SettingsModal";
import CreateGardenModal from "./CreateGardenModal";
import DeleteModal from "./DeleteModal";
import DashTopBar from "./DashTopBar";
import GardenList from "./GardenList";
import GardenEditor from "./GardenEditor";
import Schedule from "./Schedule";
import styles from "../styles/styles";

function Dashboard(props) {
  const [zone, setZone] = useState(props.userObj.zone);
  const [gardens, setGardens] = useState(props.userObj.gardens);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isCreateGardenModalVisible, setIsCreateGardenModalVisible] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [gardenToDelete, setGardenToDelete] = useState({});
  const [displayedGarden, setDisplayedGarden] = useState(null);
  const userRef = firebase.firestore().collection("users").doc(props.currentUserUID);
  
  function changeZone(newZone) {
    setZone(newZone);
    userRef.update({
      zone: newZone
    });
  }

  function createNewGarden(gardenName) {
    const timestamp = Date.now();
    let updatedGardensArr = [...gardens, {
      id: timestamp,
      gardenName: gardenName,
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

  const dashTopBar = <DashTopBar
    isScheduleOpen={isScheduleOpen}
    setIsScheduleOpen={setIsScheduleOpen}
    setIsSettingsVisible={setIsSettingsVisible}
  />;

  const gardenList = <GardenList 
    gardens={gardens}
    openEditor={openEditor}
    setIsCreateGardenModalVisible={setIsCreateGardenModalVisible}
    openDeleteModal={openDeleteModal}
  />;

  const gardenEditor = <GardenEditor
    displayedGarden={displayedGarden}
    zone={zone}
    saveAndClose={saveAndClose}
    openDeleteModal={openDeleteModal}
  />;

  const schedule = <Schedule
    gardens={gardens}
    zone={zone}
  />;

  return (
    <KeyboardAvoidingView style={styles.dashContainer} behavior="height">
      {!isEditorOpen && dashTopBar}
      <SettingsModal
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        email={props.userObj.email}
        zone={zone}
        changeZone={changeZone}
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