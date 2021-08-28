import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {createStyleSheet} from "../styles/square-styles.js";

function Square(props) {
  const [planted, setPlanted] = useState(props.planted);

  const styles = createStyleSheet(planted);

  function changePlant() {
    setPlanted(props.selectedPlant);
    props.changePlantInArr(props.id, props.selectedPlant);
  }

  return (
    <TouchableOpacity
      style={styles.square}
      onPress={changePlant}
    >
      <Text>{planted}</Text>
    </TouchableOpacity>
  );
}

export default Square;