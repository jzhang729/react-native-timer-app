import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  small?: boolean;
  color: string;
  title: string;
  onPress: void;
}

const TimerButton: React.FC<Props> = ({ small, color, title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { borderColor: color }]}>
      <Text
        style={[
          styles.buttonText,
          small ? styles.small : styles.large,
          { color },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default TimerButton;
