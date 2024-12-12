"use client";

import { IWorkoutResponse } from "@/types/workout";
import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import Popover from "../../Popover";
import { deleteWorkout } from "./action";
import { useState } from "react";
import Link from "next/link";
import LikeButton from "./LikeButton";
import useGetUserFromLocalstorage from "@/hooks/useGetUserFromLocalstorage";
import { getAcronim } from "@/utils/helper";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface IWorkoutCardProps {
  workout: IWorkoutResponse;
  showLikeButton?: boolean;
  showAction?: boolean;
}

const WorkoutCard = ({
  workout,
  showLikeButton = false,
  showAction = false,
}: IWorkoutCardProps) => {
  const { user } = useGetUserFromLocalstorage();
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleDeleteWorkout = async () => {
    await deleteWorkout(workout.id);
    setPopoverOpen(false);
  };

  const isLiked = workout.likes.some(
    (like) => like.userId === Number(user?.id)
  );

  return (
    <div className="w-full border border-neutral-100 shadow-sm hover:scale-105 hover:z-10 hover:shadow-md relative rounded-md px-3 py-2 flex flex-col gap-2.5 bg-white transition-all ease-in-out">
      <div className="flex justify-between items-start">
        {/* header */}
        <div className="flex gap-2 items-center">
          <div className="size-8 rounded-full bg-secondary-950 flex items-center justify-center overflow-hidden">
            <span className="text-white font-medium text-sm uppercase">
              {getAcronim(workout.user.name)}
            </span>
          </div>
          <div>
            <p className="text-sm font-bold text-primary-950">
              {workout.user.name}
            </p>
            <p className="text-[10px] text-primary-400">
              {dayjs(workout.createdAt).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
        {showAction && (
          <div>
            <Popover
              open={popoverOpen}
              onOpen={() => setPopoverOpen(true)}
              onClose={() => setPopoverOpen(false)}
              content={
                <div className="bg-white border border-neutral-100 px-2 py-1 rounded shadow text-xs w-full flex flex-col">
                  <Link href={`/edit-workout/${workout.id}`}>
                    <button className="py-1 text-left font-medium hover:font-bold ">
                      Edit Workout
                    </button>
                  </Link>
                  <button
                    onClick={handleDeleteWorkout}
                    className="py-1 border-b border-neutral-100 text-left font-medium hover:font-bold text-red-400"
                  >
                    Delete Workout
                  </button>
                </div>
              }
              position="right"
            >
              <div>
                <Icon icon="fluent:line-horizontal-1-dot-20-filled" />
              </div>
            </Popover>
          </div>
        )}
      </div>
      {/* description */}
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold capitalize text-secondary-900">
          {workout.name}
        </p>
        <div className="flex gap-2.5">
          <div className="space-y-1">
            <p className="text-xs text-neutral-600">Time</p>
            <p className="text-sm font-medium">
              {dayjs.duration(workout.duration, "seconds").humanize()}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-neutral-600">Volume</p>
            <p className="text-sm font-medium">
              {workout.exercises.reduce(
                (acc, exercise) => acc + exercise.volume * exercise.reps,
                0
              )}{" "}
              Kg
            </p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="space-y-1">
        <p className="text-xs text-neutral-600">Workouts</p>
        <div className="flex flex-col gap-1.5">
          {workout.exercises.map((exercise, index) => (
            <div
              className="border border-neutral-200 p-2 rounded text-sm text-primary-950"
              key={index}
            >
              <p className="font-bold capitalize text-primary-950 text-base flex items-center gap-2">
                <span>
                  <Icon
                    icon="arcticons:openworkout"
                    className="font-medium text-lg"
                  />
                </span>
                {exercise.reps} reps {exercise.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* like button */}
      {showLikeButton && (
        <div className="mt-auto">
          <LikeButton
            count={workout.likes.length}
            isLiked={isLiked}
            workoutId={workout.id}
          />
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
