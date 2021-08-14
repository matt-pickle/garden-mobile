import {StyleSheet, Dimensions, StatusBar} from 'react-native';

function createStyleSheet(width) {
  let gridWidth = width * 40;
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  return StyleSheet.create({

    gridContainer: {
      backgroundColor: "blue",
      flexDirection: "row",
      flexWrap: "wrap",
      width: gridWidth
    }

  });
}

export {createStyleSheet};