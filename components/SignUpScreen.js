import React, {useState} from "react";
import {View, Text, TextInput, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Picker} from "@react-native-picker/picker";
import * as WebBrowser from "expo-web-browser";
import {registration} from "../api/firebase-methods";
import styles from "../styles/styles";

function SignUpScreen(props) {
  const [zone, setZone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (!zone) {
      Alert.alert("Plant Hardiness Zone is required");
    } else if (!email) {
      Alert.alert("Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else {
      registration(zone, email, password);
      props.setScreen("LoginScreen");
    }
  }

  return (
    <View style={styles.loginScreen}>
      <Text style={styles.loginText}>Create a new account:</Text>
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Email"
        maxLength={50}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Password"
        maxLength={20}
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <Text style={styles.loginText}>USDA Plant Hardiness Zone: </Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.zonePicker}
          dropdownIconColor="rgb(0,75,20)"
          mode="dropdown"
          selectedValue={zone}
          onValueChange={value => setZone(value)}
        >
          <Picker.Item
            label="1a"
            value="1a"
          />
          <Picker.Item
            label="1b"
            value="1b"
          />
          <Picker.Item
            label="2a"
            value="2a"
          />
          <Picker.Item
            label="2b"
            value="2b"
          />
          <Picker.Item
            label="3a"
            value="3a"
          />
          <Picker.Item
            label="3b"
            value="3b"
          />
          <Picker.Item
            label="4a"
            value="4a"
          />
          <Picker.Item
            label="4b"
            value="4b"
          />
          <Picker.Item
            label="5a"
            value="5a"
          />
          <Picker.Item
            label="5b"
            value="5b"
          />
          <Picker.Item
            label="6a"
            value="6a"
          />
          <Picker.Item
            label="6b"
            value="6b"
          />
          <Picker.Item
            label="7a"
            value="7a"
          />
          <Picker.Item
            label="7b"
            value="7b"
          />
          <Picker.Item
            label="8a"
            value="8a"
          />
          <Picker.Item
            label="8b"
            value="8b"
          />
          <Picker.Item
            label="9a"
            value="9a"
          />
          <Picker.Item
            label="9b"
            value="9b"
          />
          <Picker.Item
            label="10a"
            value="10a"
          />
          <Picker.Item
            label="10b"
            value="10b"
          />
          <Picker.Item
            label="11a"
            value="11a"
          />
          <Picker.Item
            label="11b"
            value="11b"
          />
          <Picker.Item
            label="12a"
            value="12a"
          />
          <Picker.Item
            label="12b"
            value="12b"
          />
          <Picker.Item
            label="13a"
            value="13a"
          />
          <Picker.Item
            label="13b"
            value="13b"
          />
        </Picker>
      </View>
      <Text style={styles.smallText}>
        Not sure? Look it up at{"\n"}
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync("https://planthardiness.ars.usda.gov")}>
          <Text style={styles.zoneLink}>https://planthardiness.ars.usda.gov</Text>
        </TouchableOpacity>
        {"\n"}(This can be changed later)
      </Text>

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={[styles.loginButton, styles.extraMarginBottom]}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => props.setScreen("LoginScreen")}>
        <Text style={styles.loginButton}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpScreen;