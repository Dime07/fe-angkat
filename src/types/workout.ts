export interface IExercise {
  id: number;
  name: string;
  volume: number;
  reps: number;
}

export interface IWorkout {
  id: number;
  name: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IWorkoutResponse = IWorkout & { exercises: IExercise[] };

export interface IWorkoutPayload {
  name: string;
  duration: number;
  exercises: {
    name: string;
    reps: number;
    volume: number;
  }[];
}
