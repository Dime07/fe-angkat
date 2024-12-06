import { cookies } from "next/headers";
import { IBEResponse } from "../types";
import { IWorkoutPayload, IWorkoutResponse } from "../types/workout";

const BASE_URL = process.env.API_URL;

export const WorkoutService = {
  postWorkout: async (
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    const accessToken = (await cookies()).get("an9kat")?.value;
    const res = await fetch(`${BASE_URL}/workout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  },

  getWorkout: async (): Promise<IBEResponse<IWorkoutResponse[]>> => {
    const accessToken = (await cookies()).get("an9kat")?.value;
    console.log(accessToken);
    const res = await fetch(`${BASE_URL}/workout/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: ["get-workout"],
      },
    });
    const result = await res.json();
    return result;
  },

  deleteWorkout: async (workoutId: number): Promise<IBEResponse<boolean>> => {
    const res = await fetch(`${BASE_URL}/workout/${workoutId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    return result;
  },

  getWorkoutById: async (
    workoutId: string
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    const res = await fetch(`${BASE_URL}/workout/${workoutId}`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  },

  putWorkoutById: async (
    workoutId: string,
    payload: IWorkoutPayload
  ): Promise<IBEResponse<IWorkoutResponse>> => {
    const res = await fetch(`${BASE_URL}/workout/${workoutId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  },
};
