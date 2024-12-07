import { IBEResponse } from "@/types";
import { IWorkoutPayload, IWorkoutResponse } from "@/types/workout";
import fetchApi from "@/utils/fetch";

export const WorkoutService = {
  postWorkout: async (
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`/workout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  },

  getMyWorkout: async (): Promise<IBEResponse<IWorkoutResponse[]>> => {
    return await fetchApi(`/workout/me`, {
      method: "GET",
      next: {
        tags: ["get-workout"],
      },
    });
  },

  deleteWorkout: async (workoutId: number): Promise<IBEResponse<boolean>> => {
    return await fetchApi(`/workout/${workoutId}`, {
      method: "DELETE",
    });
  },

  getWorkoutById: async (
    workoutId: string
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`/workout/${workoutId}`, {
      method: "GET",
      next: {
        tags: ["get-workout-by-id"],
      },
    });
  },

  putWorkoutById: async (
    workoutId: string,
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`/workout/${workoutId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
};
