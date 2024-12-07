import { WorkoutService } from "@/app/service/workout";
import WorkoutCard from "../../../Card/WorkoutCard";

const WorkoutList = async () => {
  const workoutRes = await WorkoutService.getWorkout();
  const workout = workoutRes.data;
  return (
    <div className="space-y-3 mt-3">
      {workout?.map((workout, i) => (
        <WorkoutCard key={i} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
