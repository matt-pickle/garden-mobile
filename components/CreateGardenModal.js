import React, {useState} from "react";
import {Modal, Text, View, TouchableOpacity, TextInput} from "react-native";
import {Picker} from "@react-native-picker/picker";
import styles from "../styles/styles";

function CreateGardenModal(props) {
  const [gardenName, setGardenName] = useState("");
  const [zone, setZone] = useState("1a");

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
        <View style={styles.zoneSwitchContainer}>
          <Text style={styles.modalText}>Plant Hardiness Zone: </Text>
          <Picker
            style={styles.zonePicker}
            mode="dropdown"
            selectedValue={zone}
            onValueChange={value => setZone(value)}
          >
            <Picker.Item
              label="1a"
              value="1a"
            />
            <Picker.Item
              label="1b"
              value="1b"
            />
            <Picker.Item
              label="2a"
              value="2a"
            />
            <Picker.Item
              label="2b"
              value="2b"
            />
            <Picker.Item
              label="3a"
              value="3a"
            />
            <Picker.Item
              label="3b"
              value="3b"
            />
            <Picker.Item
              label="4a"
              value="4a"
            />
            <Picker.Item
              label="4b"
              value="4b"
            />
            <Picker.Item
              label="5a"
              value="5a"
            />
            <Picker.Item
              label="5b"
              value="5b"
            />
            <Picker.Item
              label="6a"
              value="6a"
            />
            <Picker.Item
              label="6b"
              value="6b"
            />
            <Picker.Item
              label="7a"
              value="7a"
            />
            <Picker.Item
              label="7b"
              value="7b"
            />
            <Picker.Item
              label="8a"
              value="8a"
            />
            <Picker.Item
              label="8b"
              value="8b"
            />
            <Picker.Item
              label="9a"
              value="9a"
            />
            <Picker.Item
              label="9b"
              value="9b"
            />
            <Picker.Item
              label="10a"
              value="10a"
            />
            <Picker.Item
              label="10b"
              value="10b"
            />
            <Picker.Item
              label="11a"
              value="11a"
            />
            <Picker.Item
              label="11b"
              value="11b"
            />
            <Picker.Item
              label="12a"
              value="12a"
            />
            <Picker.Item
              label="12b"
              value="12b"
            />
            <Picker.Item
              label="13a"
              value="13a"
            />
            <Picker.Item
              label="13b"
              value="13b"
            />
          </Picker>
        </View>

        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={() => props.createNewGarden(gardenName, zone)}
          >
            <Text style={styles.modalHeader}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setIsCreateGardenModalVisible(false)}
          >
            <Text style={styles.modalHeader}>CANCEL</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default CreateGardenModal;
  
  