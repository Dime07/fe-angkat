'use server'


export async function createWorkout (formData: FormData){
    console.log(formData.getAll('email[]'))
    return;
}