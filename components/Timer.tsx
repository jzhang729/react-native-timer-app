import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TimerButton from "./TimerButton";
import { millisecondsToHuman } from "../utils/TimerUtils";

interface Props {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
}

const Timer: React.FC<Props> = ({ id, title, project, elapsed, isRunning }) => {
  const elapsedString = millisecondsToHuman(elapsed);
  return <Text>Timer</Text>;
};

export default Timer;
