"use server";

import { redirect } from "next/navigation";

export async function createWorkout(_prevState: unknown, formData: FormData) {
  const generateExercise = async () => {
    const workoutName = formData.getAll("workout[]");
    const reps = formData.getAll("reps[]");
    const volume = formData.getAll("volume[]");

    return workoutName.map((name, index) => {
      return {
        name,
        reps: Number(reps[index]),
        volume: Number(volume[index]),
      };
    });
  };

  let redirectPath = "/";

  try {
    const payload = {
      name: formData.get("name"),
      duration: Number(formData.get("timeSpend")),
      exercises: await generateExercise(),
    };

    await fetch("http://localhost:3000/workout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    redirectPath = "/";
  } catch (error) {
    redirectPath = "/start-workout";
    return {
      errorMessage: JSON.stringify(error),
    };
  } finally {
    redirect(redirectPath);
  }
}
