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
    <div className="w-full border border-neutral-100 shadow-sm hover:scale-105 hover:z-10 hover:shadow-md relative rounded-md px-3 py-2 flex flex-col gap-4 bg-white transition-all ease-in-out">
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
              {workout.name} •{" "}
              <span className="text-secondary-700">
                {dayjs.duration(workout.duration, "seconds").humanize()}
              </span>
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
      {/* content */}
      <div className="grid grid-cols-3 gap-3">
        {workout.exercises.map((exercise, index) => (
          <div
            className="border border-neutral-200 p-2 rounded text-sm text-primary-950"
            key={index}
          >
            <p className="font-bold capitalize text-primary-950">
              {exercise.name}
            </p>
            <p>
              {exercise.reps} x {exercise.volume}kg
            </p>
          </div>
        ))}
      </div>
      {/* like button */}
      {showLikeButton && (
        <div>
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
