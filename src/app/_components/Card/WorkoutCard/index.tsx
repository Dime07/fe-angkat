import { IWorkout } from "@/app/types/workout";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="w-full border border-secondary-950 rounded px-3 py-2 flex flex-col gap-4">
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
