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

  loginScreen: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightGreen,
    height: "100%"
  },

  loginText: {
    color: cream,
    fontFamily: lightFont,
    fontSize: 18,
    marginBottom: 15
  },

  inputBox: {
    backgroundColor: cream,
    color: darkGreen,
    width: 280,
    textAlign: "center",
    fontFamily: lightFont,
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 15
  },

  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cream,
    borderWidth: 2,
    borderColor: darkCream,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 20,
    elevation: 5
  },

  pickerLabel: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16
  },

  zonePicker: {
    color: darkGreen,
    width: 90,
    marginRight: -5
  },

  loginButton: {
    backgroundColor: darkGreen,
    color: cream,
    fontFamily: boldFont,
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 5
  },

  extraMarginBottom: {
    marginBottom: 30
  },

  noMarginBottom: {
    marginBottom: 0
  },

  smallLink: {
    color: cream,
    fontFamily: lightFont,
    fontSize: 14,
    borderColor: cream,
    borderBottomWidth: 1,
    marginBottom: 25
  },

  backArrow: {
    color: cream,
    fontFamily: boldFont,
    fontSize: 30
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
  },

  //MODALS

  modal: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: cream,
    borderColor: darkCream,
    borderWidth: 3,
    borderRadius: 5,
    width: 300,
    padding: 15,
    paddingTop: 10,
    marginTop: 25,
    elevation: 5
  },

  centeredModal: {
    alignItems: "center"
  },

  modalTopRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },

  modalHeader: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 18,
    marginBottom: 15
  },

  modalX: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 24,
    marginTop: -15,
    marginRight: -5
  },

  modalText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginBottom: 15
  },

  modalPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cream,
    borderWidth: 2,
    borderColor: darkCream,
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: -10,
    marginBottom: 15
  },

  modalPicker: {
    color: darkGreen,
    width: 90,
    marginRight: -5
  },

  modalInput: {
    textAlign: "center",
    width: 230,
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    borderColor: darkCream,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 0,
    marginBottom: 15
  },

  modalButton: {
    backgroundColor: darkCream,
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 15
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    marginBottom: -15
  }

});

export default styles;