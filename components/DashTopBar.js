import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';
import {AdMobInterstitial} from "expo-ads-admob";
import styles from "../styles/styles";

function DashTopBar(props) {    

  async function openSchedule() {
    props.setIsScheduleOpen(true);
    if (Math.random() < .2) {
      await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); //Test ID
      await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    }
  }

  async function closeSchedule() {
    if (await AdMobInterstitial.getIsReadyAsync()) {
      await AdMobInterstitial.showAdAsync();
    }
    props.setIsScheduleOpen(false);
  }

  return (
    <View style={styles.dashTopBar}>
      <View style={styles.dashTabContainer}>
        <TouchableOpacity
          style={[styles.dashTabBtn, (!props.isScheduleOpen && styles.selectedTab)]}
          onPress={closeSchedule}
        >
          <Text
            style={[styles.tabText, (!props.isScheduleOpen && styles.selectedTab)]}
          >
            GARDENS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dashTabBtn, (props.isScheduleOpen && styles.selectedTab)]}
          onPress={openSchedule}
        >
          <Text
            style={[styles.tabText, (props.isScheduleOpen && styles.selectedTab)]}
          >
            SCHEDULE
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.setIsSettingsVisible(true)}
      >
        <Entypo
          name="dots-three-vertical"
          style={styles.dashIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default DashTopBar;