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
      next: {
        tags: ["get-workout"],
      },
    });
    const result = await res.json();
    return result;
  },

  deleteWorkout: async (workoutId: number): Promise<IBEResponse<boolean>> => {
    const res = await fetch(`http://localhost:3000/workout/${workoutId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    return result;
  },
};
