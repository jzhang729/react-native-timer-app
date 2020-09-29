import React from "react";
import { StyleSheet, View, Text, GestureResponderEvent } from "react-native";
import TimerButton from "./TimerButton";
import { millisecondsToHuman } from "../utils/TimerUtils";

interface Props {
  id: number | string | undefined;
  title: string;
  project: string;
  elapsed: number | undefined;
  isRunning?: boolean;
  onEditPress: () => void;
  onRemovePress: (id: string | number | undefined) => void;
}

const Timer: React.FC<Props> = ({
  id,
  title,
  project,
  elapsed,
  onEditPress,
  onRemovePress,
}) => {
  const elapsedString = elapsed ? millisecondsToHuman(elapsed) : "";

  const handleRemovePress = (): void => {
    onRemovePress(id);
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
        <TimerButton
          color="blue"
          small
          title="Remove"
          onPress={handleRemovePress}
        />
      </View>
      <TimerButton color="#21BA45" title="Start" />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Timer;
