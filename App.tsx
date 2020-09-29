import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { newTimer } from "./utils/TimerUtils";
import { TimerInterface } from "./interfaces";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

const App: React.FC = () => {
  const [timers, setTimers] = useState<TimerInterface[]>([
    {
      title: "Mow the Lawn",
      project: "House Chores",
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: "Bake Squash",
      project: "Kitchen Chores",
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: false,
    },
  ]);

  const handleCreateFormSubmit = (timer: TimerInterface): void => {
    const newTimers = [newTimer(timer), ...timers];

    setTimers(newTimers);
  };

  const handleFormSubmit = (attrs: TimerInterface): void => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === attrs.id) {
        const { title, project } = attrs;
        return {
          ...timer,
          title,
          project,
        };
      }

      return timer;
    });

    setTimers(updatedTimers);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm
          isOpen={false}
          onFormSubmit={handleCreateFormSubmit}
        />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={handleFormSubmit}
          />
        ))}
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
