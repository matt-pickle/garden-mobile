import React from "react";
import {View, ScrollView, Text} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import GardenListItem from "./GardenListItem";
import styles from "../styles/styles";

function GardenList(props) {
  const gardenListItems = props.gardens.map(item => {
    return (
      <GardenListItem
        key={item.id}
        garden={item}
        openEditor={props.openEditor}
        openDeleteModal={props.openDeleteModal}
      />
    );
  });  

  return (
    <View style={styles.listContainer}>
      
      <ScrollView style={styles.list}>
        {gardenListItems}
      </ScrollView>
      <TouchableOpacity
          style={styles.newGardenButton}
          onPress={() => props.setIsCreateGardenModalVisible(true)}
        >
          <Text style={styles.newGardenButtonText}>+</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default GardenList;