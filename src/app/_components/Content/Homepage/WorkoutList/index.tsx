import { WorkoutService } from "@/services/workout";
import WorkoutCard from "../../../Card/WorkoutCard";

const WorkoutList = async () => {
  const workoutRes = await WorkoutService.getMyWorkout();
  const workout = workoutRes.data;

  return (
    <div className="space-y-3 mt-3">
      {workout?.length > 0 ? (
        <>
          {workout?.map((workout, i) => (
            <WorkoutCard key={i} workout={workout} showAction />
          ))}
        </>
      ) : (
        <WorkoutListEmptyState />
      )}
    </div>
  );
};

const WorkoutListEmptyState = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <p className="text-gray-400">No workout found</p>
    </div>
  );
};

export default WorkoutList;
