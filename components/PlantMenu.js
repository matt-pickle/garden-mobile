import React, {useState, useEffect} from "react";
import {View, ScrollView, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import plantData from "../database/plantData.js";

function PlantMenu(props) {
  let isMenuHorizontal = true;
  const dim = Dimensions.get("screen");
  if (dim.width > dim.height) {
    isMenuHorizontal = false;
  }

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
        style={[props.styles.menuButton, (props.selectedPlant === item.name && props.styles.selectedPlantIcon)]}
        onPress={() => props.setSelectedPlant(item.name)}
        key={index}
      >
        <Image source={icon} style={{width: "100%", height: "100%"}}/>
      </TouchableOpacity>
    );
  });

  return (
    <View style={props.styles.menuContainer}>
      <Text style={props.styles.selectedPlantName}>
        {props.selectedPlant}
      </Text>
      <View style={props.styles.menuBtnsContainer}>
        <ScrollView
          horizontal={isMenuHorizontal}
          persistentScrollbar={true}
        >
          {menu}
        </ScrollView>
      </View>
    </View>
  );
}

export default PlantMenu;

