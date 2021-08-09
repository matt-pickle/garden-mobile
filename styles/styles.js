import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";
const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

const styles = StyleSheet.create({

  logo: {
    height: 100
  },

  square: {
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "black"
  },
  
  newGardenButtonText: {
    fontSize: 200
  },
  
  gridContainer: {
    backgroundColor: "blue",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 320
  }

});

export default styles;