'use server'


export async function createWorkout (formData: FormData){
    const workoutName = formData.getAll('workout[]');
    const reps = formData.getAll('reps[]');
    const volume = formData.getAll('volume[]');

    console.log(workoutName, reps, volume);
    return;
}