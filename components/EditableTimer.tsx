import React from "react";
import { Text } from "react-native";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

interface Props {
  id: string;
  isRunning?: boolean;
  editFormOpen?: boolean;
  title: string;
  project: string;
  elapsed: string;
}

const EditableTimer: React.FC<Props> = ({
  id,
  title,
  project,
  editFormOpen,
  isRunning,
  elapsed,
}) => {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
};

export default EditableTimer;
