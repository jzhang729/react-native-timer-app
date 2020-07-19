import React from "react";
import { Text } from "react-native";

interface Props {
  id: string;
  title: string;
  project: string;
}

const TimerForm: React.FC<Props> = () => {
  return <Text>TimerForm</Text>;
};

export default TimerForm;
