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

export interface ILikes {
  id: number;
  workoutId: number;
  userId: number;
}

export type IWorkoutResponse = IWorkout & {
  exercises: IExercise[];
  likes: ILikes[];
  user: {
    name: string;
  };
};

export interface IWorkoutPayload {
  name: string;
  duration: number;
  exercises: {
    name: string;
    reps: number;
    volume: number;
  }[];
}
