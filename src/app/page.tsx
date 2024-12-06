import Link from "next/link";
import Button from "./_components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import WorkoutCard from "./_components/Card/WorkoutCard";
import { WorkoutService } from "./service/workout";

export default async function Home() {
  const workoutRes = await WorkoutService.getWorkout();
  const workout = workoutRes.data;

  console.log(workoutRes);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="space-y-0.5 mt-5">
        <h1 className="text-2xl font-bold text-neutral-950">
          Welcome , Dimas 👋
        </h1>
        <p className="text-neutral-800 text-sm">
          Let&apos;s start a healthy life
        </p>
      </div>
      <Link href="/start-workout" className="mt-5">
        <Button className="py-3 group font-semibold" variant="bordered">
          <Icon
            icon="hugeicons:workout-stretching"
            className="text-primary-950 text-lg group-hover:text-white"
          />{" "}
          Start Workout
        </Button>
      </Link>
      <div className="space-y-3 mt-3">
        {workout?.map((workout, i) => (
          <WorkoutCard key={i} workout={workout} />
        ))}
      </div>
    </div>
  );
}
