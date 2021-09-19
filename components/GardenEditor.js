import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import uuid from "react-native-uuid";
import { Ionicons } from '@expo/vector-icons';
import Square from "./Square";
import PlantMenu from "./PlantMenu";
import {createStyleSheet} from "../styles/editor-styles.js";

function GardenEditor(props) {
  const [plantedArr, setPlantedArr] = useState(props.displayedGarden.plantedArr);
  const [width, setWidth] = useState(props.displayedGarden.width);
  const [height, setHeight] = useState(props.displayedGarden.height);
  const [selectedPlant, setSelectedPlant] = useState("none");
  const styles = createStyleSheet(width);

  function createBlankPlantedArr(newWidth, newHeight) {
    let newPlantedArr = [];
    for (i = 0; i < (newWidth * newHeight); i++) {
      newPlantedArr.push("none");
    }
    setPlantedArr(newPlantedArr);
  }
  
  if (!plantedArr.length) {
    createBlankPlantedArr(width, height);
  }

  function changeWidth(newWidth) {
    setWidth(newWidth);
    createBlankPlantedArr(newWidth, height);
  }

  function changeHeight(newHeight) {
    setHeight(newHeight);
    createBlankPlantedArr(width, newHeight);
  }

  function changePlantInArr(index, newPlant) {
    let newPlantedArr = [...plantedArr];
    newPlantedArr[index] = newPlant;
    setPlantedArr(newPlantedArr);
  }

  function populatePicker() {
    let optionsArr = [];
    for (i = 1; i <= 8; i++) {
      optionsArr.push(
        <Picker.Item
          label={i.toString() + " ft."}
          value={i}
          key={i}
        />
      );
    }
    return optionsArr;
  }

  const gridArr = plantedArr.map((item, index) => {
    return (
      <Square 
        id={index}
        planted={item}
        selectedPlant={selectedPlant}
        changePlantInArr={changePlantInArr}
        key={uuid.v4()}
      />
    );
  });

  return (
    <View style={styles.editor}>
      <Text>{props.displayedGarden.gardenName}</Text>
      <Text>Set garden size</Text>
      <Text>Size changes will reset planting assignments</Text>
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
          selectedValue={height}
          onValueChange={value => changeHeight(value)}
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
      <Text>{selectedPlant}</Text>
      <Text>Select a plant below, then tap the grid above to assign it to a garden slot</Text>
      <PlantMenu
        setSelectedPlant={setSelectedPlant}
        selectedPlant={selectedPlant}
        zone={props.zone}
      />
    </View>
  )
}

export default GardenEditor;