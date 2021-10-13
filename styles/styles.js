import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const cream = "rgb(220,220,175)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

  //LOGIN SCREENS

  logo: {
    height: 100
  },

  //DASHBOARD

  dashContainer: {
    backgroundColor: darkGreen,
    width: "100%",
    height: "100%",
    padding: 15,
    paddingTop: 15 + StatusBar.currentHeight
  }, 

  dashTopRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15
  },

  dashSecondRowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 15
  },

  dashTabBtn: {
    borderColor: cream,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 15,
    marginRight: 15
  },

  selectedTab: {
    backgroundColor: cream,
    color: darkGreen
  },

  dashHeader: {
    color: cream,
    fontSize: 20
  },

  tabText: {
    color: cream,
    fontSize: 16
  },

  //GARDEN LIST

  newGardenButtonText: {
    alignSelf: "center",
    color: darkGreen,
    backgroundColor: cream,
    fontSize: 100,
    height: 100,
    lineHeight: 80,
    padding: 15,
    borderRadius: 50
  },

  //SQUARE

  square: {
    height: 40,
    width: 40,
    backgroundColor: "brown",
    borderWidth: 2,
    borderColor: "tan"
  },

  //PLANT MENU

  selectedPlantIcon: {
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