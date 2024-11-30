"use client";

import Input from "../_components/Input";
import Timer from "../_components/Timer";
import { createWorkout } from "./action";
import Button from "../_components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useActionState, useState } from "react";

interface IWorkout {
  workout: string;
  reps: string;
  volume: string;
}

export default function StartWorkout() {
  const [_state, formAction, isPending] = useActionState(createWorkout, null);
  const [workouts, setWorkouts] = useState<IWorkout[]>([
    {
      workout: "",
      reps: "",
      volume: "",
    },
    {
      workout: "",
      reps: "",
      volume: "",
    },
    {
      workout: "",
      reps: "",
      volume: "",
    },
  ]);

  const addWorkout = (workout: IWorkout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (index: number) => {
    setWorkouts((prev) => {
      const newWorkouts = [...prev];
      newWorkouts.splice(index, 1);
      console.log(newWorkouts);
      return newWorkouts;
    });
  };

  const resetWorkout = () => {
    setWorkouts([
      {
        workout: "",
        reps: "",
        volume: "",
      },
    ]);
  };

  const copyWorkout = (index: number) => {
    setWorkouts((prev) => {
      const newWorkouts = [...prev];
      newWorkouts.splice(index, 0, newWorkouts[index]);
      return newWorkouts;
    });
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    index: number
  ) => {
    const { value } = e.target;
    setWorkouts((prev) => {
      const newWorkouts = [...prev];
      newWorkouts[index] = {
        ...newWorkouts[index],
        [name]: value,
      };
      return newWorkouts;
    });
  };

  return (
    <div className="flex flex-col gap-2 py-4 min-h-[calc(100vh-40px)] overflow-auto">
      <form
        action={(formData) => {
          formAction(formData);
          resetWorkout();
        }}
        className="flex flex-col gap-3"
        name="workout"
      >
        <Timer />
        {workouts.map((workout, i) => (
          <div
            className="grid grid-cols-[200px_200px_200px_1fr] items-end gap-2"
            key={i}
          >
            <Input
              name={`workout[${i}]`}
              placeholder="eg: Push Up"
              label="Workout Name"
              value={workout.workout}
              onChange={(e) => handleOnChange(e, "workout", i)}
            />
            <Input
              name={`reps[${i}]`}
              placeholder="eg: 8"
              label="Reps"
              value={workout.reps}
              onChange={(e) => handleOnChange(e, "reps", i)}
            />
            <Input
              name={`volume[${i}]`}
              placeholder="eg: 12kg"
              label="Volume (kg)"
              value={workout.volume}
              onChange={(e) => handleOnChange(e, "volume", i)}
            />
            <div className="flex gap-2">
              <button
                type="button"
                className="size-7 flex items-center justify-center border rounded-full"
                onClick={() => {
                  copyWorkout(i);
                }}
              >
                <Icon
                  icon="solar:copy-bold"
                  className="text-secondary-950 text-lg"
                />
              </button>
              {i === workouts.length - 1 && (
                <button
                  type="button"
                  className="size-7 flex items-center justify-center border rounded-full"
                  onClick={() =>
                    addWorkout({ workout: "", reps: "", volume: "" })
                  }
                >
                  <Icon
                    icon="ic:baseline-plus"
                    className="text-secondary-950 text-lg"
                  />
                </button>
              )}
              {workouts.length > 1 && (
                <button
                  type="button"
                  className="size-7 flex items-center justify-center border rounded-full"
                  onClick={() => deleteWorkout(i)}
                >
                  <Icon
                    icon="ic:baseline-delete"
                    className="text-secondary-950 text-lg"
                  />
                </button>
              )}
            </div>
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
          Finish Workout
        </Button>
      </form>
    </div>
  );
}
