import { useEffect, useState } from "react";
import { IWorkout } from "../types/workout";

const useGetWorkouts = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:3000/workout", {
          method: "GET",
        });
        const resJson = await res.json();
        setWorkouts(resJson);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkouts();
  }, []);

  return { workouts, isLoading };
};

export default useGetWorkouts;
