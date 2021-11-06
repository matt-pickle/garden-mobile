import React, {useState} from "react";
import {View, Text, TextInput, Alert} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {logIn, logOut} from "../api/firebase-methods";
import styles from "../styles/styles";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  logOut();

  function handleSubmit() {
    if (!email) {
      Alert.alert("Email is required");
    } else if (!password) {
      Alert.alert("Password is required");
    } else {
      logIn(email, password)
      .then(() => props.setScreen("LoadingScreen"));
    }
  }

  return (
    <View style={styles.loginScreen}>
      <Text style={styles.loginText}>Log in to your account:</Text>
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
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.loginButton}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setScreen("ResetScreen")}>
        <Text style={styles.smallLink}>Forgot password?</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => props.setScreen("SignUpScreen")}>
        <Text style={styles.loginButton}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;