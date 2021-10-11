import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

  logo: {
    height: 100
  },

  newGardenButtonText: {
    fontSize: 200
  },

  square: {
    height: 40,
    width: 40,
    backgroundColor: "brown",
    borderWidth: 2,
    borderColor: "tan"
  },

  //PLANT MENU

  selected: {
    borderColor: "gold"
  },

  plantMenuBtn: {
    height: 64,
    width: 64,
    backgroundColor: "green",
    borderWidth: 4,
    borderColor: "black"
  },

});

export default styles;