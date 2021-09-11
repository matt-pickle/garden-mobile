import React from "react";
import {View, TouchableOpacity} from "react-native";
import plantData from "../database/plantData.js";
import styles from "../styles/plant-menu-styles.js";

function PlantMenu(props) {

  const plantableArr = plantData.filter(item => {
    return item.zones.includes(props.zone);
  });

  const menu = plantableArr.map((item, index) => {
    return (
      <TouchableOpacity
        style={[styles[item.name], (props.selectedPlant === item.name && styles.selected)]}
        onPress={() => props.setSelectedPlant(item.name)}
        key={index}
      />
    );
  });

  return (
    <View>
      {menu}
    </View>
  );
}

export default PlantMenu;

