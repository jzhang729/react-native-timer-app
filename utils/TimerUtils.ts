import { v4 as uuidv4 } from "uuid";

interface Timer {
  title: string;
  project: string;
  id: string;
  elapsed: number;
  isRunning: boolean;
}

export const millisecondsToHuman = (ms: string) => {
  const msToNumber = Number(ms);

  const seconds = Math.floor((msToNumber / 1000) % 60);
  const minutes = Math.floor((msToNumber / 1000 / 60) % 60);
  const hours = Math.floor(msToNumber / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(":");

  return humanized;
};

const pad = (numberString: string, size: number) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export const newTimer = (attrs = { title: "", project: "" }): Timer => {
  const timer = {
    title: attrs.title || "Timer",
    project: attrs.project || "Project",
    id: uuidv4(),
    elapsed: 0,
    isRunning: false,
  };

  return timer;
};
