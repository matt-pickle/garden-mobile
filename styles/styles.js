import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";
const windowHeight = Dimensions.get("window").height - StatusBar.currentHeight;

const styles = StyleSheet.create({

  logo: {
    height: 100
  }

});

export default styles;