import {StyleSheet, Dimensions, StatusBar} from 'react-native';

function createStyleSheet(width) {
  let gridWidth = width * 40 + 4;
  const windowHeight = Dimensions.get("window").height;

  return StyleSheet.create({

    gridContainer: {
      backgroundColor: "blue",
      flexDirection: "row",
      flexWrap: "wrap",
      width: gridWidth,
      borderWidth: 2,
      borderColor: "tan"
    }

  });
}

export {createStyleSheet};