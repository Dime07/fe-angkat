"use server";

import { WorkoutService } from "@/services/workout";
import { revalidateTag } from "next/cache";

export async function editWorkoutById(
  _prevState: unknown,
  formData: FormData,
  workoutId: string
) {
  const generateExercise = async () => {
    const workoutName = formData.getAll("workout[]");
    const reps = formData.getAll("reps[]");
    const volume = formData.getAll("volume[]");
    const ids = formData.getAll("id");

    return workoutName.map((name, index) => {
      return {
        id: Number(ids[index]),
        name: String(name),
        reps: Number(reps[index]),
        volume: Number(volume[index]),
      };
    });
  };

  const payload = {
    id: workoutId,
    name: String(formData.get("name")),
    duration: Number(formData.get("timeSpend")),
    exercises: await generateExercise(),
  };

  const response = await WorkoutService.putWorkoutById(workoutId, payload);
  revalidateTag("get-workout-by-id");

  return response;
}
