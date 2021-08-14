import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import Square from "./Square";
import PlantMenu from "./PlantMenu";
import {createStyleSheet} from "../styles/editor-styles.js";

function GardenEditor(props) {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [gridArr, setGridArr] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState("none");
  const styles = createStyleSheet(width);

  useEffect(() => {
    setGridArr([]);
    for (i = 0; i < (width * height); i++) {
      setGridArr(prev => [
        ...prev,
        <Square selectedPlant={selectedPlant} />
      ]);
    }
  }, [width, height, selectedPlant]);

  function populatePicker() {
    let optionsArr = [];
    for (i = 1; i <= 8; i++) {
      optionsArr.push(
        <Picker.Item
          label={i.toString()}
          value={i}
        />
      );
    }
    return optionsArr;
  }

  return (
    <View style={styles.editor}>
      <View style={styles.widthPickerContainer}>
        <Text style={styles.pickerLabel}>Width: </Text>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={width}
          onValueChange={value => setWidth(value)}
        >
          {populatePicker()}
        </Picker>
      </View>
      <View style={styles.heightPickerContainer}>
        <Text style={styles.pickerLabel}>Height: </Text>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={width}
          onValueChange={value => setHeight(value)}
        >
          {populatePicker()}
        </Picker>
      </View>
      <View style={styles.gridContainer}>
        {gridArr}
      </View>
      <PlantMenu
        setSelectedPlant={setSelectedPlant}
        selectedPlant={selectedPlant}
      />
    </View>
  )
}

export default GardenEditor;