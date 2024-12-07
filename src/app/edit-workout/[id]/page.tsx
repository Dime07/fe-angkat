import WorkoutDetailContent from "@/app/_components/Content/WorkoutDetail";
import { WorkoutService } from "@/services/workout";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default async function EditWorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const workoutRes = await WorkoutService.getWorkoutById(id);
  const workout = workoutRes.data;

  return (
    <div className="flex flex-col min-h-screen py-4">
      <h1 className="text-2xl font-bold text-center">Edit Your Workout 💪</h1>
      <p className="text-center text-2xl font-bold text-secondary-950">
        {dayjs.duration(workout.duration, "seconds").format("HH:mm:ss")}
      </p>
      <WorkoutDetailContent workout={workout} />
    </div>
  );
}
