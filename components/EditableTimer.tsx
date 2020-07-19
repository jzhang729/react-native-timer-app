import React from "react";
import { Text } from "react-native";

interface Props {
  id: string;
  isRunning?: boolean;
  editFormOpen?: boolean;
  title: string;
  project: string;
  elapsed: string;
}

const EditableTimer: React.FC<Props> = () => {
  return <Text>Editable Timer</Text>;
};

export default EditableTimer;
