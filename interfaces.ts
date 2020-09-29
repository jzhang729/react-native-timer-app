export interface TimerInterface {
  title: string;
  project: string;
  id?: number | string | undefined;
  elapsed?: number;
  isRunning?: boolean;
}
