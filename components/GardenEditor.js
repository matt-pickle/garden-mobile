import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import { Ionicons } from '@expo/vector-icons';
import Square from "./Square";
import PlantMenu from "./PlantMenu";
import {createStyleSheet} from "../styles/editor-styles.js";

function GardenEditor(props) {
  const [plantedArr, setPlantedArr] = useState(props.displayedGarden.plantedArr);
  const [width, setWidth] = useState(props.displayedGarden.width);
  const [height, setHeight] = useState(props.displayedGarden.height);
  const [gridArr, setGridArr] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState("none");
  const styles = createStyleSheet(width);

  useEffect(() => {
    if (plantedArr.length > 0) {
      setGridArr(plantedArr.map(item => {
        return <Square planted={item} selectedPlant={selectedPlant} />
      }));
    } else {
      redrawGrid();
    }
  }, []);

  useEffect(() => {
    redrawGrid();
  }, [width, height, selectedPlant]);

  function redrawGrid() {
    let newPlantedArr = [];
    let newGridArr = [];
    for (i = 0; i < (width * height); i++) {
      newPlantedArr.push("none");
      newGridArr.push(<Square planted="none" selectedPlant={selectedPlant} />);
    }
    console.log("newPlantedArr: " + newPlantedArr.length)
    setPlantedArr(newPlantedArr);
    setGridArr(newGridArr);
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

  // function changeHeight(value) {
  //   setHeight(value);
  //   redrawGrid();
  // }

  // function changeWidth(value) {
  //   setWidth(value);
  //   redrawGrid();
  // }

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
          selectedValue={height}
          onValueChange={value => setHeight(value)}
        >
          {populatePicker()}
        </Picker>
      </View>
      <TouchableOpacity
        onPress={() => props.saveAndClose(width, height, plantedArr)}
        style={styles.saveBtnContainer}
      >
        <Ionicons
          name="arrow-back"
          style={styles.arrow}
        />
        <Text style={styles.saveButton}>SAVE & CLOSE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.saveGarden(width, height, plantedArr)}
        style={styles.saveBtnContainer}
      >
        <Ionicons
          name="arrow-back"
          style={styles.saveIcon}
        />
        <Text style={styles.saveButton}>SAVE</Text>
      </TouchableOpacity>
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