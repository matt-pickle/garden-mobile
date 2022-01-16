import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const lightGreen = "rgb(0,125,40)";
const cream = "rgb(255,255,225)";
const darkCream = "rgb(200, 200, 150)";
const brown = "rgb(50,30,0)";
const boldFont = "Solway_700Bold";
const lightFont ="Solway_400Regular";

function createStyleSheet(width, height) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

  const topBarHeight = 45;

  let squareSize = null;
  let gridWidth = null;
  let mainFlexDirection = "column";
  let mainAlignItems = "center";
  let plantMenuFlexDir = "column";
  let plantMenuWidth = windowWidth;
  let plantMenuHeight = 125;
  let contentPaddingHorizontal = 10;
  let contentPaddingTop = 15;
  let contentPaddingBottom = 25;
  let menuBtnMarginVertical = 0;
  let menuBtnMarginHorizontal = 5;

  if (windowWidth < windowHeight) {
    let maxGridHeight = windowHeight - topBarHeight - plantMenuHeight - 90;
    let maxGridWidth = windowWidth - 30;
    squareSize = Math.floor((maxGridWidth - 4) / width);
    let gridHeight = squareSize * height + 4;
    if (gridHeight > maxGridHeight) {
      squareSize = Math.floor((maxGridHeight - 4) / height);
    }
  } else {
    let maxGridHeight = windowHeight - topBarHeight - 90;
    let maxGridWidth = windowWidth - 145;
    squareSize = Math.floor((maxGridWidth - 4) / width);
    let gridHeight = squareSize * height + 4;
    if (gridHeight > maxGridHeight) {
      squareSize = Math.floor((maxGridHeight - 4) / height);
    }
    mainFlexDirection = "row";
    mainAlignItems = "flex-start";
    plantMenuFlexDir = "row";
    plantMenuWidth = 110;
    plantMenuHeight = "auto";
    contentPaddingHorizontal = 15;
    contentPaddingTop = 0;
    contentPaddingBottom = 15;
    menuBtnMarginVertical = 15;
    menuBtnMarginHorizontal = 0;
  }

  gridWidth = squareSize * width + 4;

  return StyleSheet.create({

    editorContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },

    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: topBarHeight,
      backgroundColor: darkGreen,
      paddingHorizontal: 10,
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
      flex: 1,
      flexDirection: mainFlexDirection,
      justifyContent: "space-between",
      alignItems: mainAlignItems
    },

    pickerAndGridContainer: {
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      marginTop: 15
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
      flexDirection: plantMenuFlexDir,
      alignItems: "center",
      width: plantMenuWidth,
      height: plantMenuHeight,
      backgroundColor: darkGreen
    },

    contentContainer: {
      paddingHorizontal: contentPaddingHorizontal,
      paddingTop: contentPaddingTop,
      paddingBottom: contentPaddingBottom
    },

    menuButton: {
      flexDirection: "column",
      alignItems: "center",
      width: 80,
      height: 80,
      backgroundColor: cream,
      borderColor: darkCream,
      borderWidth: 3,
      borderRadius: 5,
      marginHorizontal: menuBtnMarginHorizontal,
      marginVertical: menuBtnMarginVertical
    },

    menuButtonText: {
      color: cream,
      fontFamily: lightFont,
      fontSize: 12,
      textTransform: "capitalize",
      marginTop: 5,
      marginHorizontal: -10
    },

    selectedPlantIcon: {
      borderColor: "gold"
    }

  });
}

export {createStyleSheet};