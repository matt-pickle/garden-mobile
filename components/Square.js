import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {createStyleSheet} from "../styles/square-styles.js";

function Square(props) {
  const [planted, setPlanted] = useState("none");

  const styles = createStyleSheet(planted);

  return (
    <TouchableOpacity
      style={styles.square}
      onPress={() => setPlanted("broccoli")}
    >
      <Text>{planted}</Text>
    </TouchableOpacity>
  );
}

export default Square;