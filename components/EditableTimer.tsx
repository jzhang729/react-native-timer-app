import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

interface Props {
  id: string | undefined;
  isRunning: boolean | undefined;
  title: string;
  project: string;
  elapsed: number | undefined;
  onFormSubmit: (timer: {
    id: string | undefined;
    title: string;
    project: string;
  }) => void;
  onRemovePress: (timerId: string | undefined) => void;
  onStartPress: (id: string | undefined) => void;
  onStopPress: (id: string | undefined) => void;
}

const EditableTimer: React.FC<Props> = ({
  id,
  title,
  project,
  isRunning,
  elapsed,
  onFormSubmit,
  onRemovePress,
  onStartPress,
  onStopPress,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const openForm = (): void => {
    setEditFormOpen(true);
  };

  const closeForm = (): void => {
    setEditFormOpen(false);
  };

  const handleEditPress = (): void => {
    openForm();
  };

  const handleFormClose = (): void => {
    closeForm();
  };

  const handleSubmit = (timer: {
    id: string | undefined;
    title: string;
    project: string;
  }): void => {
    onFormSubmit(timer);
    closeForm();
  };

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        onFormSubmit={handleSubmit}
        onFormClose={handleFormClose}
      />
    );
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  );
};

export default EditableTimer;
