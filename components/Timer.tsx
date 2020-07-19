import React from "react";
import { Text } from "react-native";

interface Props {
  id: string;
  title: string;
  project: string;
  elapsed: string;
  isRunning?: boolean;
}

const Timer: React.FC<Props> = () => {
  return <Text>Timer</Text>;
};

export default Timer;
