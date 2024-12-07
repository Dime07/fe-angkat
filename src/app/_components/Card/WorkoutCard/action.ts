"use server";

import { WorkoutService } from "@/app/service/workout";
import { revalidateTag } from "next/cache";

export async function deleteWorkout(workoutId: number) {
  const response = await WorkoutService.deleteWorkout(workoutId);
  if (response.success) {
    revalidateTag("get-workout");
  }

  if (!response.success) {
    return response;
  }
}
