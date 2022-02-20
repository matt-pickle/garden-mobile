import React, {useMemo} from "react";
import {View, ScrollView, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import { useSelectedPlant } from "../context/SelectedPlantContext"
import plantData from "../database/plantData.js";
import iconPicker from "../functions/iconPicker";

function PlantMenu(props) {
  let isMenuHorizontal = true;
  const dim = Dimensions.get("screen");
  if (dim.width > dim.height) {
    isMenuHorizontal = false;
  }

  const { selectedPlant, setSelectedPlant } = useSelectedPlant()

  const plantableArr = useMemo(() => {
    return (
      plantData.filter(item => {
        return item.zones.includes(props.zone);
      })
    )
  }, [])
  
  const menu = useMemo(() => {
    return (
      plantableArr.map((item, index) => {
        const icon = iconPicker(item.name);
        return (
          <TouchableOpacity
            style={[props.styles.menuButton, (selectedPlant === item.name && props.styles.selectedPlantIcon)]}
            onPress={() => setSelectedPlant(item.name)}
            key={index}
          >
            <Image source={icon} style={{width: "100%", height: "100%"}}/>
            <Text style={props.styles.menuButtonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })
    )
  }, [plantableArr, selectedPlant])
  
  return (
    <View style={props.styles.menuContainer}>
      <ScrollView
        horizontal={isMenuHorizontal}
        contentContainerStyle={props.styles.contentContainer}
        persistentScrollbar={true}
      >
        {menu}
      </ScrollView>
    </View>
  );
}

export default PlantMenu;

