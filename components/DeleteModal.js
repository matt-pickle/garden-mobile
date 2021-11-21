import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import styles from "../styles/styles";

function DeleteModal(props) {

  return (
    <Modal
      animationType="slide"
      visible={props.isDeleteModalVisible}
      transparent={true}
      onRequestClose={() => props.setIsDeleteModalVisible(false)}
    >
      <View style={[styles.modal, styles.centeredModal]}>
        <Text style={styles.modalText}>Do you want to delete{"\n"}"{props.gardenName}"?</Text>
        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={() => props.deleteGarden(props.id)}
          >
            <Text style={styles.modalButton}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setIsDeleteModalVisible(false)}
          >
            <Text style={styles.modalButton}>NO</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default DeleteModal;
  
  