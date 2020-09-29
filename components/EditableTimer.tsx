import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";
import { TimerInterface } from "../interfaces";

interface Props {
  id: number | string | undefined;
  isRunning?: boolean;
  title: string;
  project: string;
  elapsed: number | undefined;
  onFormSubmit: (timer: TimerInterface) => void;
}

const EditableTimer: React.FC<Props> = ({
  id,
  title,
  project,
  isRunning,
  elapsed,
  onFormSubmit,
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

  const handleSubmit = (timer: TimerInterface): void => {
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
    />
  );
};

export default EditableTimer;
