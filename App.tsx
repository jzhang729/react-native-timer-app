import React, { useState, useEffect } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { newTimer } from "./utils/TimerUtils";
import { TimerInterface } from "./interfaces";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

const App: React.FC = () => {
  const TIME_INTERVAL = 1000;
  const [timers, setTimers] = useState<TimerInterface[]>([
    {
      title: "Mow the Lawn",
      project: "House Chores",
      id: uuidv4(),
      elapsed: 1000,
      isRunning: true,
    },
    {
      title: "Bake Squash",
      project: "Kitchen Chores",
      id: uuidv4(),
      elapsed: 5000,
      isRunning: false,
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      function handleUpdatedTimers(timers: TimerInterface[]) {
        setTimers(timers);
      }

      const updatedTimers = timers.map((timer) => {
        return {
          ...timer,
          elapsed: timer.isRunning
            ? timer.elapsed + TIME_INTERVAL
            : timer.elapsed,
        };
      });

      handleUpdatedTimers(updatedTimers);
    }, TIME_INTERVAL);

    return () => clearInterval(intervalId);
  }, [timers]);

  const toggleTimer = (timerId: string | undefined): void => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, isRunning: !timer.isRunning };
      }

      return timer;
    });

    setTimers(updatedTimers);
  };

  const handleCreateFormSubmit = (timer: {
    id: string | undefined;
    title: string;
    project: string;
  }): void => {
    const newTimers = [newTimer(timer), ...timers];

    setTimers(newTimers);
  };

  const handleFormSubmit = (attrs: {
    id: string | undefined;
    title: string;
    project: string;
  }): void => {
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

  const handleRemovePress = (timerId: string | undefined) => {
    const updatedTimers = timers.filter((timer) => timer.id !== timerId);
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
            onRemovePress={handleRemovePress}
            onStartPress={toggleTimer}
            onStopPress={toggleTimer}
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
