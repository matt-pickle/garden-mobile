import React, {useState} from "react";
import {Image, TouchableOpacity} from "react-native";
import styles from "../styles/styles.js";

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
    case "onion":
      icon = require("../assets/plant-icons/onion.png");
      break;
  }

  return (
    <TouchableOpacity
      style={styles.square}
      onPress={changePlant}
    >
      <Image source={icon} style={{width: "100%", height: "100%"}}/>
    </TouchableOpacity>
  );
}

export default Square;