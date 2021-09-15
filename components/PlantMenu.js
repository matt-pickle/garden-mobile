import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import plantData from "../database/plantData.js";
import styles from "../styles/plant-menu-styles.js";

function PlantMenu(props) {

  const plantableArr = plantData.filter(item => {
    return item.zones.includes(props.zone);
  });

  const menu = plantableArr.map((item, index) => {
    let icon = require("../assets/plant-icons/none.png");
    switch (item.name) {
      case "broccoli":
        icon = require("../assets/plant-icons/broccoli.png");
        break;
      case "onion":
        icon = require("../assets/plant-icons/onion.png");
        break;
    }

    return (
      <TouchableOpacity
        style={[styles.plantMenuBtn, (props.selectedPlant === item.name && styles.selected)]}
        onPress={() => props.setSelectedPlant(item.name)}
        key={index}
      >
        <Image source={icon} style={{width: "100%", height: "100%"}}/>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      {menu}
    </View>
  );
}

export default PlantMenu;

