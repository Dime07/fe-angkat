import Link from "next/link";
import Button from "./_components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import WorkoutList from "./_components/Content/Homepage/WorkoutList";
import Header from "./_components/Content/Homepage/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/start-workout" className="mt-5">
        <Button className="py-3 group font-semibold text-lg" variant="bordered">
          <Icon
            icon="hugeicons:workout-stretching"
            className="text-primary-950 text-xl group-hover:text-white"
          />
          Start Workout
        </Button>
      </Link>
      <WorkoutList />
    </div>
  );
}
