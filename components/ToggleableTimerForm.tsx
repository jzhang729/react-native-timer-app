import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TimerForm from "./TimerForm";
import TimerButton from "./TimerButton";

interface Props {
  isOpen: boolean;
}

const ToggleableTimerForm: React.FC<Props> = ({ isOpen }) => {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
