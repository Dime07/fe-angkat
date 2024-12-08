"use server";

import { WorkoutService } from "@/services/workout";
import { revalidateTag } from "next/cache";

export async function like(workoutId: number) {
  const likeRes = await WorkoutService.likeWorkout(workoutId);
  revalidateTag("get-all-workout");
  return likeRes;
}

export async function unlike(workoutId: number) {
  const unlikeRes = await WorkoutService.unlikeWorkout(workoutId);
  revalidateTag("get-all-workout");
  return unlikeRes;
}
