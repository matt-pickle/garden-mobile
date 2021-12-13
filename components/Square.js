import React, {useState} from "react";
import {Image, TouchableOpacity} from "react-native";

function Square(props) {
  const [planted, setPlanted] = useState(props.planted);

  function changePlant() {
    setPlanted(props.selectedPlant);
    props.changePlantInArr(props.id, props.selectedPlant);
  }

  let icon = require("../assets/plant-icons/none.png");
  switch (planted) {
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
    case "potato":
      icon = require("../assets/plant-icons/potato.png");
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
  }

  return (
    <TouchableOpacity
      style={props.style}
      onPress={changePlant}
    >
      <Image source={icon} style={{width: "100%", height: "100%"}}/>
    </TouchableOpacity>
  );
}

export default Square;