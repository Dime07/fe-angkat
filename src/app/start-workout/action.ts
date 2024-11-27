'use server'

import { redirect } from "next/navigation";


export async function createWorkout (_prevState: unknown,formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const workoutName = formData.getAll('workout[]');
    const reps = formData.getAll('reps[]');
    const volume = formData.getAll('volume[]');
    const timeSpend = formData.get('timeSpend');

    console.log(workoutName, reps, volume, timeSpend);
    return redirect('/');
}