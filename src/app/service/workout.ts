import { IBEResponse } from "../types";
import { IWorkout } from "../types/workout";

export interface IWorkoutPayload {
  name: string;
  duration: number;
  exercises: {
    name: string;
    reps: number;
    volume: number;
  }[];
}

export const WorkoutService = {
  postWorkout: async (
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkout>> => {
    const res = await fetch("http://localhost:3000/workout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  },

  getWorkout: async (): Promise<IBEResponse<IWorkout[]>> => {
    const res = await fetch("http://localhost:3000/workout/", {
      method: "GET",
    });
    const result = await res.json();
    return result;
  },
};
