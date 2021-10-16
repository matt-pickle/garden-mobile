import {StyleSheet, Dimensions} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const mediumGreen = "rgb(0,100,30)";
const lightGreen = "rgb(0,125,40)";
const cream = "rgb(255,255,225)";
const darkCream = "rgb(200, 200, 150)";
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
    backgroundColor: lightGreen,
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
    backgroundColor: cream,
    width: 60,
    height: 60,
    borderRadius: 100,
    elevation: 5
  },

  newGardenButtonText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 70,
    lineHeight: 80
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

  //SCHEDULE

  schedContainer: {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: cream,
    borderColor: darkCream,
    borderWidth: 5,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    elevation: 5
  },

  schedTitle: {
    textAlign: "center",
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 24,
    borderColor: darkGreen,
    borderBottomWidth: 3,
    paddingBottom: 5,
    marginBottom: 15
  },

  schedTextContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  schedDate: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 14
  },

  schedText: {
    flexShrink: 1,
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 14,
    lineHeight: 20
  }

});

export default styles;