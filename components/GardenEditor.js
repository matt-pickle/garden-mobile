import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, BackHandler} from "react-native";
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
  const styles = createStyleSheet(width, height);

  //Make Android "Back" button save and close editor
  useEffect(() => {
    function backAction() {
      props.saveAndClose(width, height, plantedArr);
      return true;
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  });

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
    for (i = 1; i <= 10; i++) {
      optionsArr.push(
        <Picker.Item
          label={i.toString() + " ft"}
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
        style={styles.square}
        planted={item}
        selectedPlant={selectedPlant}
        changePlantInArr={changePlantInArr}
        key={uuid.v4()}
      />
    );
  });

  return (
    <View style={styles.editorContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => props.saveAndClose(width, height, plantedArr)}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.gardenName}>{props.displayedGarden.gardenName}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => props.openDeleteModal(props.garden)}
        >
          <Ionicons
            name="trash-outline"
            style={styles.trashIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.everythingButTopBarContainer}>
        <View style={styles.pickerAndGridContainer}>
          <View style={styles.sizePickerRow}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Width: </Text>
              <Picker
                style={styles.picker}
                dropdownIconColor="rgb(0,75,20)"
                mode="dropdown"
                selectedValue={width}
                onValueChange={value => changeWidth(value)}
              >
                {populatePicker()}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Height: </Text>
              <Picker
                style={styles.picker}
                dropdownIconColor="rgb(0,75,20)"
                mode="dropdown"
                selectedValue={height}
                onValueChange={value => changeHeight(value)}
              >
                {populatePicker()}
              </Picker>
            </View>
          </View>
          <View style={styles.gridContainer}>
            {gridArr}
          </View>
        </View>
        <PlantMenu
          styles={styles}
          setSelectedPlant={setSelectedPlant}
          selectedPlant={selectedPlant}
          zone={props.zone}
        />
      </View>
    </View>
  )
}

export default GardenEditor;