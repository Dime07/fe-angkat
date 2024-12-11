import { WorkoutService } from "@/services/workout";
import WorkoutCard from "../../../Card/WorkoutCard";

const WorkoutList = async () => {
  const workoutRes = await WorkoutService.getMyWorkout();
  const workout = workoutRes.data;

  return (
    <>
      {workout?.length > 0 ? (
        <>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {workout?.map((workout, i) => (
              <WorkoutCard key={i} workout={workout} showAction />
            ))}
          </div>
        </>
      ) : (
        <WorkoutListEmptyState />
      )}
    </>
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
