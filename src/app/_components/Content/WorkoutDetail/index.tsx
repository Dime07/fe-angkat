"use client";

import { IWorkoutResponse } from "@/app/types/workout";
import Input from "../../Input";
import Button from "../../Button";
import { useActionState } from "react";
import { editWorkoutById } from "./action";
import { Icon } from "@iconify/react/dist/iconify.js";

const WorkoutDetailContent = ({ workout }: { workout: IWorkoutResponse }) => {
  const [state, formAction, isPending] = useActionState(
    (prevState: unknown, formData: FormData) =>
      editWorkoutById(prevState, formData, workout.id.toString()),
    null
  );

  console.log(state);

  return (
    <>
      <form
        action={(formData) => {
          formAction(formData);
        }}
        className="flex flex-col gap-3"
        name="workout"
      >
        <Input
          name="name"
          placeholder="eg: Chest Day"
          className="outline-none text-xl border-l-0 border-t-0 border-r-0 rounded-none"
          required
          defaultValue={workout.name}
        />
        <input type="hidden" name="timeSpend" value={workout.duration} />
        {workout.exercises.map((exercise, i) => (
          <div className="grid grid-cols-3 items-end gap-2" key={i}>
            <input type="hidden" name="timeSpend" value={exercise.id} />
            <Input
              name={`workout[]`}
              placeholder="eg: Push Up"
              label="Workout Name"
              defaultValue={exercise.name}
              required
            />
            <Input
              name={`reps[]`}
              placeholder="eg: 8"
              label="Reps"
              defaultValue={exercise.reps}
              required
              type="number"
            />
            <Input
              name={`volume[]`}
              placeholder="eg: 12kg"
              label="Volume (kg)"
              defaultValue={exercise.volume}
              required
              type="number"
            />
          </div>
        ))}
        <Button
          type="submit"
          className="w-full text-lg disabled:opacity-40"
          disabled={isPending}
        >
          {isPending && (
            <span className="animate-spin mr-2">
              <Icon icon="proicons:spinner" />
            </span>
          )}
          Edit Workout
        </Button>
      </form>
    </>
  );
};

export default WorkoutDetailContent;
