import { useEffect, useState } from "react";
import { IWorkout } from "../types/workout";
import { WorkoutService } from "../service/workout";

const useGetWorkouts = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await WorkoutService.getWorkout();

      if (response.success) {
        setWorkouts(response.data);
        setIsLoading(false);
      }

      if (!response.success) {
        alert(response.message);
      }
    };

    fetchWorkouts();
  }, []);

  return { workouts, isLoading };
};

export default useGetWorkouts;
