import React from "react";
import {View, TouchableOpacity} from "react-native";
import styles from "../styles/plant-menu-styles.js";

function PlantMenu(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.none, (props.selectedPlant === "none" && styles.selected)]}
        onPress={() => props.setSelectedPlant("none")}
      />
      <TouchableOpacity
        style={[styles.broccoli, (props.selectedPlant === "broccoli" && styles.selected)]}
        onPress={() => props.setSelectedPlant("broccoli")}
      />
      <TouchableOpacity
        style={[styles.onion, (props.selectedPlant === "onion" && styles.selected)]}
        onPress={() => props.setSelectedPlant("onion")}
      />
    </View>
  );
}

export default PlantMenu;

