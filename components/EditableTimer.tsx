import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

interface Props {
  id: number | string;
  isRunning?: boolean;
  title: string;
  project: string;
  elapsed: number;
}

const EditableTimer: React.FC<Props> = ({
  id,
  title,
  project,
  isRunning,
  elapsed,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  if (editFormOpen) {
    return <TimerForm id={id} />;
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
