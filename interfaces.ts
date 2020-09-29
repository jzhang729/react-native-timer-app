export interface Timer {
  title: string;
  project: string;
  id: string;
  elapsed: number;
  isRunning: boolean;
}

export interface NewTimer {
  title: string;
  project: string;
  id: string;
}
