import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import uuid from "react-native-uuid";
import { Ionicons } from '@expo/vector-icons';
import plantData from "../database/plantData";

function Schedule(props) {

  let combinedPlantedArr = [];
  props.gardens.forEach(item => {
    combinedPlantedArr = combinedPlantedArr.concat(item.plantedArr);
  });
  combinedPlantedArr.sort();
  const plantNamesArr = combinedPlantedArr.filter((item, index) => {
    return item !== "none" && item !== combinedPlantedArr[index - 1];
  });
  const plantObjsArr = plantData.filter(item => {
    return plantNamesArr.includes(item.name);
  });

  let datesArr = [];
  plantObjsArr.forEach(item => {
    if (item.transplantDate) {
      datesArr = datesArr.concat([
        {[item.startDate]: item.startMessage},
        {[item.transplantDate]: item.transplantMessage},
        {[item.harvestDate]: item.harvestMessage}
      ]);
    } else {
      datesArr = datesArr.concat([
        {[item.startDate]: item.startMessage},
        {[item.harvestDate]: item.harvestMessage}
      ]);
    }
  });

  datesArr.sort((a, b) => {
    return Object.keys(a) - Object.keys(b);
  });

  const scheduleArr = datesArr.map((item, index) => {
    return <Text key={index}>{Object.keys(item)}: {Object.values(item)}</Text>
  });

  return (
    <View>
      <Text>Schedule</Text>
      {scheduleArr}
      <TouchableOpacity
        onPress={() => props.setIsScheduleOpen(false)}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Schedule;