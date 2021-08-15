import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import Square from "./Square";
import PlantMenu from "./PlantMenu";
import {createStyleSheet} from "../styles/editor-styles.js";

function GardenEditor(props) {
  const [plantedArr, setPlantedArr] = useState(props.displayedGarden.plantedArr || []);
  const [width, setWidth] = useState(props.displayedGarden.width || 4);
  const [height, setHeight] = useState(props.displayedGarden.height || 4);
  const [gridArr, setGridArr] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState("none");
  const styles = createStyleSheet(width);

  useEffect(() => {
    if (plantedArr.length) {
      setGridArr(plantedArr.map(item => {
        <Square planted={item} selectedPlant={selectedPlant} />
      }));
    } else {
      redrawGrid();
    }
  }, []);

  function redrawGrid() {
    for (i = 0; i < (width * height); i++) {
      setPlantedArr(prev => [...prev, "none"]);
      setGridArr(prev => [
        ...prev,
        <Square planted="none" selectedPlant={selectedPlant} />
      ]);
    }
  }

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

  function changeHeight(value) {
    setHeight(value);
    redrawGrid();
  }

  function changeWidth(value) {
    setWidth(value);
    redrawGrid();
  }

  return (
    <View style={styles.editor}>
      <View style={styles.widthPickerContainer}>
        <Text style={styles.pickerLabel}>Width: </Text>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={width}
          onValueChange={value => changeWidth(value)}
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
          onValueChange={value => changeHeight(value)}
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