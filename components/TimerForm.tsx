import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import TimerButton from "./TimerButton";

interface Props {
  id?: number | string;
  onFormClose: any;
  onFormSubmit: any;
}

const TimerForm: React.FC<Props> = ({ id, onFormClose, onFormSubmit }) => {
  const submitText = id ? "Update" : "Create";

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");

  const handleTitleChange = (title: string): void => {
    setTitle(title);
  };

  const handleProjectChange = (project: string): void => {
    setProject(project);
  };

  const handleSubmit = (): void => {
    onFormSubmit({
      id,
      title,
      project,
    });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
            onChangeText={(title) => handleTitleChange(title)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
            onChangeText={(project) => handleProjectChange(project)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={(e: GestureResponderEvent) => handleSubmit()}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={(e: GestureResponderEvent) => onFormClose()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: "#d6d7da",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TimerForm;
