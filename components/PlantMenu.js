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
      case "bell-pepper":
        icon = require("../assets/plant-icons/bell-pepper.png");
        break;
      case "broccoli":
        icon = require("../assets/plant-icons/broccoli.png");
        break;
      case "cabbage":
        icon = require("../assets/plant-icons/cabbage.png");
        break;
      case "carrot":
        icon = require("../assets/plant-icons/carrot.png");
        break;
      case "cauliflower":
        icon = require("../assets/plant-icons/cauliflower.png");
        break;
      case "cucumber":
        icon = require("../assets/plant-icons/cucumber.png");
        break;
      case "green bean":
        icon = require("../assets/plant-icons/green-bean.png");
        break;
      case "jalapeno":
        icon = require("../assets/plant-icons/jalapeno.png");
        break;
      case "kale":
        icon = require("../assets/plant-icons/kale.png");
        break;
      case "lettuce":
        icon = require("../assets/plant-icons/lettuce.png");
        break;
      case "onion":
        icon = require("../assets/plant-icons/onion.png");
        break;
      case "okra":
        icon = require("../assets/plant-icons/okra.png");
        break;
      case "potato":
        icon = require("../assets/plant-icons/potato.png");
        break;
      case "radish":
        icon = require("../assets/plant-icons/radish.png");
        break;
      case "spinach":
        icon = require("../assets/plant-icons/spinach.png");
        break;
      case "sugar snap pea":
        icon = require("../assets/plant-icons/sugar-snap-pea.png");
        break;
      case "sweet pea":
        icon = require("../assets/plant-icons/sweet-pea.png");
        break;
      case "sweet potato":
        icon = require("../assets/plant-icons/sweet-potato.png");
        break;
      case "tomato":
        icon = require("../assets/plant-icons/tomato.png");
        break;
      case "turnip":
        icon = require("../assets/plant-icons/turnip.png");
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

  const selectedPlantText = isMenuHorizontal ?
    <Text style={props.styles.selectedPlantText}>{props.selectedPlant}</Text> :
    props.selectedPlant.split("").map((item, index) => {
      return (
        <Text 
          style={props.styles.selectedPlantText}
          key={index}
        >
          {item}
        </Text>
      )
    });

  return (
    <View style={props.styles.menuContainer}>
      <View style={props.styles.selectedPlantContainer}>
        {selectedPlantText}
      </View>
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

