"use client";

import { IWorkoutResponse } from "@/app/types/workout";
import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import Popover from "../../Popover";
import { deleteWorkout } from "./action";
import { useState } from "react";
import Link from "next/link";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const WorkoutCard = ({ workout }: { workout: IWorkoutResponse }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleDeleteWorkout = async () => {
    await deleteWorkout(workout.id);
    setPopoverOpen(false);
  };

  return (
    <div className="w-full border border-secondary-950 rounded px-3 py-2 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        {/* header */}
        <div>
          <p className="text-sm font-bold text-primary-950">
            {workout.name} •{" "}
            <span className="text-secondary-700">
              {dayjs.duration(workout.duration, "seconds").humanize()}
            </span>
          </p>
          <p className="text-[10px] text-primary-400">
            {dayjs(workout.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>
        <div>
          <Popover
            open={popoverOpen}
            onOpen={() => setPopoverOpen(true)}
            onClose={() => setPopoverOpen(false)}
            content={
              <div className="bg-white border border-neutral-100 px-2 py-1 rounded shadow text-xs w-full flex flex-col">
                <button
                  onClick={handleDeleteWorkout}
                  className="py-1 border-b border-neutral-100 text-left font-medium hover:font-bold"
                >
                  Delete Workout
                </button>
                <Link href={`/edit-workout/${workout.id}`}>
                  <button className="py-1 text-left font-medium hover:font-bold">
                    Edit Workout
                  </button>
                </Link>
              </div>
            }
            position="right"
          >
            <div>
              <Icon icon="fluent:line-horizontal-1-dot-20-filled" />
            </div>
          </Popover>
        </div>
      </div>
      {/* content */}
      <div className="grid grid-cols-3 gap-3">
        {workout.exercises.map((exercise, index) => (
          <div
            className="border border-primary-200 p-2 rounded text-sm text-primary-950"
            key={index}
          >
            <p className="font-bold">{exercise.name}</p>
            <p>
              volume: <b>{exercise.volume}kg</b>
            </p>
            <p>
              reps: <b>{exercise.reps}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
