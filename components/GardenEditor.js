import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import styles from "../styles/styles";

function GardenEditor(props) {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [gridArr, setGridArr] = useState([]);

  useEffect(() => {
    setGridArr([]);
    for (i = 0; i < (width * height); i++) {
      setGridArr(prev => [
        ...prev,
        <TouchableOpacity
          style={styles.square}
          onPress={() => console.log("pressed " + prev.length)} 
          key={prev.length}
        >
        </TouchableOpacity>
      ]);
    }
  }, [width, height]);

  return (
    <View style={styles.gridContainer}>
      {gridArr}
    </View>
  )
}

export default GardenEditor;