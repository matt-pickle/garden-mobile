import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/styles";

function GardenListItem(props) {
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity 
        style={styles.listItemTitleButton}
        onPress={() => props.openEditor(props.garden.id)}
      >
        <Text style={styles.listItemText}>{props.garden.gardenName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listItemDeleteButton}
        onPress={() => props.openDeleteModal(props.garden)}
      >
        <Ionicons
          name="trash-outline"
          style={styles.listItemIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default GardenListItem;