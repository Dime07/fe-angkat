import { IBEResponse } from "../types";
import { IWorkoutPayload, IWorkoutResponse } from "../types/workout";
import fetchApi from "../utils/fetch";

const BASE_URL = process.env.API_URL;

export const WorkoutService = {
  postWorkout: async (
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`${BASE_URL}/workout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  },

  getWorkout: async (): Promise<IBEResponse<IWorkoutResponse[]>> => {
    return await fetchApi(`${BASE_URL}/workout/`, {
      method: "GET",
      next: {
        tags: ["get-workout"],
      },
    });
  },

  deleteWorkout: async (workoutId: number): Promise<IBEResponse<boolean>> => {
    return await fetchApi(`${BASE_URL}/workout/${workoutId}`, {
      method: "DELETE",
    });
  },

  getWorkoutById: async (
    workoutId: string
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`${BASE_URL}/workout/${workoutId}`, {
      method: "GET",
    });
  },

  putWorkoutById: async (
    workoutId: string,
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    return await fetchApi(`${BASE_URL}/workout/${workoutId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
};
