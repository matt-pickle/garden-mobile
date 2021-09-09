import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import uuid from "react-native-uuid";
import { Ionicons } from '@expo/vector-icons';

function Schedule(props) {
  const [plantedArr, setPlantedArr] = useState([]);

  useEffect(() => {
      let combinedPlantedArr = [];
      props.gardens.forEach(item => {
        combinedPlantedArr = combinedPlantedArr.concat(item.plantedArr);
      });
      combinedPlantedArr.sort();
      const filteredPlantedArr = combinedPlantedArr.filter((item, index) => {
        return item !== "none" && item !== combinedPlantedArr[index - 1];
      });
      setPlantedArr(filteredPlantedArr);
  }, []);

  return (
    <View>
      <Text>Schedule</Text>
      <Text>{plantedArr}</Text>
      <TouchableOpacity
        onPress={() => props.setIsScheduleOpen(false)}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Schedule;