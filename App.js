import React, {useState, useEffect} from 'react';
import {View, LogBox, Dimensions} from "react-native";
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";
import {useFonts, Solway_700Bold, Solway_400Regular} from "@expo-google-fonts/solway";
import * as firebase from "firebase";
import firebaseKeys from "./api/firebase-keys";
import LoadingScreen from "./components/LoadingScreen";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import ResetScreen from "./components/ResetScreen";
import ChangeEmailScreen from "./components/ChangeEmailScreen";
import ChangePasswordScreen from "./components/ChangePasswordScreen";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [currentUserUID, setCurrentUserUID] = useState(null);
  const [userObj, setUserObj] = useState(null);
  const [screen, setScreen] = useState("LoadingScreen");
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    function onChange() {
      const dim = Dimensions.get("screen");
      if (dim.width >= dim.height) {
        setOrientation("landscape");
      } else {
        setOrientation("portrait");
      }
    }
    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener();
  }, []);

  //Disable warning message
  LogBox.ignoreLogs(["Setting a timer"]);

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseKeys.firebaseConfig);
    firebase.firestore().settings({
      experimentalForceLongPolling: true,
      useFetchStreams: false
    })
  }

  let [fontsLoaded] = useFonts({
    Solway_400Regular,
    Solway_700Bold
  });

  let displayedScreen = null;
  switch (screen) {
    case "LoadingScreen":
      displayedScreen = <LoadingScreen setScreen={setScreen} setUserObj={setUserObj} setCurrentUserUID={setCurrentUserUID}/>
      break;
    case "Dashboard":
      displayedScreen = <Dashboard setScreen={setScreen} userObj={userObj} currentUserUID={currentUserUID}/>
      break;
    case "LoginScreen":
      displayedScreen = <LoginScreen setScreen={setScreen} setUserObj={setUserObj} />
      break;
    case "SignUpScreen":
      displayedScreen = <SignUpScreen setScreen={setScreen} />
      break;
    case "ResetScreen":
      displayedScreen = <ResetScreen setScreen={setScreen} />
      break;
    case "ChangeEmailScreen":
      displayedScreen = <ChangeEmailScreen setScreen={setScreen} />
      break;
    case "ChangePasswordScreen":
      displayedScreen = <ChangePasswordScreen setScreen={setScreen} />
      break;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <StatusBar
          style="light"
          translucent={false}
        />
        {displayedScreen}
      </View>
    );
  }
}