import {StyleSheet, Dimensions, StatusBar} from 'react-native';

function createStyleSheet(planted) {
  let icon = "brown";
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  switch (planted) {
    case "none":
      icon = "brown";
      break;
    case "broccoli":
      icon = "green";
      break;
    case "onion":
      icon = "tan";
      break;
  }

  return StyleSheet.create({

    square: {
      height: 40,
      width: 40,
      backgroundColor: icon,
      borderWidth: 2,
      borderColor: "black"
    }

  });
}

export {createStyleSheet};