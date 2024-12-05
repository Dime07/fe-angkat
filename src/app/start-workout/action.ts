"use server";

import { WorkoutService } from "../service/workout";

export async function createWorkout(_prevState: unknown, formData: FormData) {
  const generateExercise = async () => {
    const workoutName = formData.getAll("workout[]");
    const reps = formData.getAll("reps[]");
    const volume = formData.getAll("volume[]");

    return workoutName.map((name, index) => {
      return {
        name: String(name),
        reps: Number(reps[index]),
        volume: Number(volume[index]),
      };
    });
  };

  const payload = {
    name: String(formData.get("name")),
    duration: Number(formData.get("timeSpend")),
    exercises: await generateExercise(),
  };

  const response = await WorkoutService.postWorkout(payload);

  return response;
}
