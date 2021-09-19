import React, {useState} from "react";
import {Modal, Text, View, TouchableOpacity, TextInput} from "react-native";
import styles from "../styles/styles";

function CreateGardenModal(props) {
  const [gardenName, setGardenName] = useState("");
  const [zone, setZone] = useState("1a");

  function handleOK() {
    props.createNewGarden(gardenName, zone);
    setGardenName("");
  }

  function handleCancel() {
    props.setIsCreateGardenModalVisible(false);
    setGardenName("");
  }

  return (
    <Modal
      animationType="slide"
      visible={props.isCreateGardenModalVisible}
      transparent={true}
      onRequestClose={() => props.setIsCreateGardenModalVisible(false)}
    >
      <View style={styles.createGardenModal}>
        <Text style={styles.modalHeader}>Create New Garden</Text>
        <View style={styles.gardenNameInputContainer}>
          <Text style={styles.modalText}>Garden Name: </Text>
          <TextInput
            style={styles.gardenNameInput}
            placeholderTextColor="rgb(120,120,130)"
            placeholder="Garden Name"
            maxLength={20}
            value={gardenName}
            onChangeText={text => setGardenName(text)}
          />
        </View>
        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={handleOK}
          >
            <Text style={styles.modalHeader}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancel}
          >
            <Text style={styles.modalHeader}>CANCEL</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default CreateGardenModal;
  
  