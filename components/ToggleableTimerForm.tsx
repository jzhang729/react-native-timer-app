import React, { useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import TimerForm from "./TimerForm";
import TimerButton from "./TimerButton";

interface Props {
  isOpen?: boolean;
  onFormSubmit: (timer: {
    id: string | undefined;
    title: string;
    project: string;
  }) => void;
}

const ToggleableTimerForm: React.FC<Props> = ({ onFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = (e: GestureResponderEvent): void => {
    setIsOpen(true);
  };

  const handleFormSubmit = (timer: any) => {
    onFormSubmit(timer);
    setIsOpen(false);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onFormClose={handleFormClose}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <TimerButton
          title="+"
          color="black"
          onPress={(e) => handleFormOpen(e)}
        />
      )}
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
