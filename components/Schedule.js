import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import plantData from "../database/plantData";
import frostDateData from "../database/frostDateData";

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

  const readableDatesArr = datesArr.map(item => {
    const dayOfYear = Number(Object.keys(item)) + frostDateData[props.zone];
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const oneDay = 1000 * 60 * 60 * 24;
    const date = new Date(Number(startOfYear) + (dayOfYear * oneDay));
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateString = `${monthsArr[date.getMonth()]} ${date.getDate()}`;
    console.log(date.getMonth())

    return {[dateString]: Object.values(item)};
  });

  const scheduleArr = readableDatesArr.map((item, index) => {
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