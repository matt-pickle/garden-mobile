import React, {useState} from "react";
import {Modal, Text, View, TouchableOpacity, TextInput} from "react-native";
import styles from "../styles/styles";

function CreateGardenModal(props) {
  const [gardenName, setGardenName] = useState("");

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
      <View style={[styles.modal, styles.centeredModal]}>
        <Text style={styles.modalHeader}>CREATE NEW GARDEN</Text>
        <TextInput
          style={styles.modalInput}
          placeholderTextColor="rgb(120,120,130)"
          placeholder="Garden Name"
          maxLength={20}
          value={gardenName}
          onChangeText={text => setGardenName(text)}
        />
        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={handleOK}
          >
            <Text style={styles.modalButton}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancel}
          >
            <Text style={styles.modalButton}>CANCEL</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default CreateGardenModal;
  
  