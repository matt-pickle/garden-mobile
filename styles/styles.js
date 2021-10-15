import {StyleSheet, Dimensions} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const lightGreen = "rgb(0,100,30)";
const cream = "rgb(255,255,225)";
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
    height: "100%",
  }, 

  dashTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: darkGreen,
    padding: 10,
    paddingLeft: 15,
    elevation: 5
  },

  dashTabContainer: {
    flexDirection: "row"
  },

  dashTabBtn: {
    marginRight: 30
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

  listContainer: {
    maxHeight: "100%",
    padding: 15
  },

  list: {
    flexDirection: "column"
  },

  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: cream,
    borderRadius: 5,
    marginBottom: 15,
    elevation: 5
  },

  listItemTitleButton: {
    flexGrow: 1,
    padding: 10,
  },

  listItemText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginLeft: 5
  },

  listItemDeleteButton: {
    justifyContent: "center",
    padding: 5
  },

  listItemIcon: {
    color: darkGreen,
    fontSize: 24,
    marginRight: 5,
  },

  newGardenButton: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightGreen,
    width: 60,
    height: 60,
    borderRadius: 100,
    elevation: 5
  },

  newGardenButtonText: {
    color: cream,
    fontFamily: lightFont,
    fontSize: 70,
    lineHeight: 80
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