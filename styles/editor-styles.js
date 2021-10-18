import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const mediumGreen = "rgb(0,100,30)";
const lightGreen = "rgb(0,125,40)";
const cream = "rgb(255,255,225)";
const darkCream = "rgb(200, 200, 150)";
const brown = "rgb(50,30,0)";
const boldFont = "Solway_700Bold";
const lightFont ="Solway_400Regular";

function createStyleSheet(width, height) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  let squareSize = null;
  let gridWidth = null;
  let mainFlexDirection = "column";
  let mainAlignItems = "center";
  let plantMenuWidth = windowWidth - 30;
  let plantMenuHeight = 130;

  if (windowWidth < windowHeight) {
    let maxGridHeight = windowHeight - 300;
    let maxGridWidth = windowWidth - 30;
    squareSize = Math.floor((maxGridWidth - 4) / width);
    let gridHeight = squareSize * height + 4;
    if (gridHeight > maxGridHeight) {
      squareSize = Math.floor((maxGridHeight - 4) / height);
    }
  } else {
    let maxGridHeight = windowHeight - 135;
    let maxGridWidth = windowWidth - 240;
    squareSize = Math.floor((maxGridWidth - 4) / width);
    let gridHeight = squareSize * height + 4;
    if (gridHeight > maxGridHeight) {
      squareSize = Math.floor((maxGridHeight - 4) / height);
    }
    mainFlexDirection = "row";
    mainAlignItems = "flex-start";
    plantMenuWidth = 180;
    plantMenuHeight = windowHeight - 75;
  }

  gridWidth = squareSize * width + 4;

  return StyleSheet.create({

    editorContainer: {
      flexDirection: "column",
      alignItems: "center"
    },

    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: 45,
      backgroundColor: darkGreen,
      paddingHorizontal: 10,
      marginBottom: 15,
      elevation: 5
    },

    gardenName: {
      color: cream,
      fontFamily: lightFont,
      fontSize: 16
    },

    arrow: {
      color: cream,
      fontSize: 30
    },

    trashIcon: {
      color: cream,
      fontSize: 20
    },

    everythingButTopBarContainer: {
      flexDirection: mainFlexDirection,
      justifyContent: "space-between",
      alignItems: mainAlignItems,
      height: windowHeight - 60
    },

    pickerAndGridContainer: {
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center"
    },

    sizePickerRow: {
      flexDirection: "row",
      marginBottom: 15
    },

    pickerContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: cream,
      borderWidth: 2,
      borderColor: darkCream,
      borderRadius: 5,
      width: 140,
      paddingVertical: 5,
      paddingLeft: 10,
      paddingRight: 0,
      margin: 5,
      elevation: 5
    },

    pickerLabel: {
      color: darkGreen,
      fontFamily: lightFont,
      fontSize: 14
    },

    picker: {
      color: darkGreen,
      marginLeft: -10,
      width: 97,
      transform: [
        { scaleX: 0.9 }, 
        { scaleY: 0.9 },
     ],
    },

    gridContainer: {
      backgroundColor: brown,
      flexDirection: "row",
      flexWrap: "wrap",
      width: gridWidth,
      borderWidth: 2,
      borderColor: darkCream
    },

    square: {
      backgroundColor: brown,
      borderColor: darkCream,
      borderWidth: 2,
      width: squareSize,
      height: squareSize
    },

    //PLANT MENU

    menuContainer: {
      flexDirection: "column",
      alignItems: "center",
      width: plantMenuWidth,
      height: plantMenuHeight,
      backgroundColor: darkGreen,
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 15,
      elevation: 5
    },

    selectedPlantName: {
      width: 150,
      textAlign: "center",
      color: darkGreen,
      fontFamily: lightFont,
      fontSize: 16,
      backgroundColor: cream,
      borderRadius: 5,
      padding: 5,
      marginBottom: 15
    },

    menuBtnsContainer: {
      // flexDirection: "row"
    },

    menuButton: {
      width: 50,
      height: 50,
      backgroundColor: cream,
      borderColor: darkCream,
      borderWidth: 3,
      borderRadius: 5,
      marginRight: 5
    },

    selectedPlantIcon: {
      borderColor: "gold"
    }

  });
}

export {createStyleSheet};