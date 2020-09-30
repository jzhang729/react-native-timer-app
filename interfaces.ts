export interface TimerInterface {
  title: string;
  project: string;
  id: string | undefined;
  elapsed: number;
  isRunning: boolean;
}
