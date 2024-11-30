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
  exercises: IExercise[];
  createdAt: Date;
  updatedAt: Date;
}
