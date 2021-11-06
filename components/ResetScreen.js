import React, {useState} from "react";
import {View, Text, TextInput, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {resetPassword} from "../api/firebase-methods";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/styles";

function ResetScreen(props) {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (!email) {
      Alert.alert("Email is required");
    } else {
      resetPassword(email);
      props.setScreen("LoginScreen");
    }
  }

  return (
    <View style={styles.loginScreen}>
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="rgb(120,120,130)"
        placeholder="Email"
        maxLength={50}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={[styles.loginButton, styles.extraMarginBottom]}>RESET PASSWORD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setScreen("LoginScreen")}>
        <Ionicons
          name="arrow-back"
          style={styles.backArrow}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ResetScreen;