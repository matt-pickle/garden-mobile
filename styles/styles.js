import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const lightGreen = "rgb(0,100,30)";
const cream = "rgb(220,220,175)";
const brown = "rgb(50,30,0)";
const boldFont = "Solway_700Bold";
const lightFont ="Solway_400Regular";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

  //LOGIN SCREENS

  logo: {
    height: 100
  },

  //DASHBOARD

  dashContainer: {
    backgroundColor: brown,
    width: "100%",
    height: windowHeight,
  }, 

  dashTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: darkGreen,
    padding: 15
  },

  dashTabBtn: {
    marginRight: 15
  },

  selectedTab: {
    borderColor: cream,
    borderBottomWidth: 1,
  },

  tabText: {
    color: cream,
    fontFamily: lightFont,
    fontSize: 16,
    paddingBottom: 2
  },

  dashIcon: {
    color: cream,
    fontSize: 20
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