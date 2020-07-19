import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

const App: React.FC = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House chores"
          elapsed="342832048"
          isRunning
        />
        <EditableTimer
          id="2"
          title="Bake squash"
          project="Kitchen chores"
          elapsed="3243243242"
          editFormOpen
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default App;
