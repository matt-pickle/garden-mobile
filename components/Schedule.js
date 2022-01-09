import React from "react";
import {Text, View, Image, ScrollView} from "react-native";
import plantData from "../database/plantData";
import frostDateData from "../database/frostDateData";
import schedIconPicker from "../functions/schedIconPicker";
import styles from "../styles/styles";

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

  let messagesArr = [];
  plantObjsArr.forEach(item => {
    const icon = schedIconPicker(item.name);
    if (item.transplantDate) {
      messagesArr = messagesArr.concat([
        {icon: icon, date: item.startDate, message: item.startMessage},
        {icon: icon, date: item.transplantDate, message: item.transplantMessage},
        {icon: icon, date: item.harvestDate, message: item.harvestMessage}
      ]);
    } else {
      messagesArr = messagesArr.concat([
        {icon: icon, date: item.startDate, message: item.startMessage},
        {icon: icon, date: item.harvestDate, message: item.harvestMessage}
      ]);
    }
  });

  messagesArr.sort((a, b) => {
    return a.date - b.date;
  });

  messagesArr.forEach(item => {
    const dayOfYear = Number(item.date) + frostDateData[props.zone];
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const oneDay = 1000 * 60 * 60 * 24;
    const date = new Date(Number(startOfYear) + (dayOfYear * oneDay));
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateString = `${monthsArr[date.getMonth()]} ${date.getDate()}`;

    item.date = dateString;
  });

  const scheduleArr = messagesArr.map((item, index) => {
    return (
      <View style={styles.schedTextContainer} key={index}>
        <View style={styles.schedLeftColumn}>
          <Text style={styles.schedDate}>{item.date}</Text>
          <View style={styles.schedIconContainer}>
            <Image source={item.icon} style={{width: "100%", height: "100%"}} resizeMode="contain"/>
          </View>
        </View>
        <Text style={styles.schedText}>{item.message}</Text>
      </View>
    );      
  });

  return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {scheduleArr}
      </ScrollView>
  )
}

export default Schedule;