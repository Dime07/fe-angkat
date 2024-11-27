import { useEffect, useState } from "react";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";

dayjs.extend(duration);

const Timer = () => {
  const [timeSpend, setTimeSpend] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpend((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p className="text-center text-2xl font-bold text-secondary-950">
        {dayjs.duration(timeSpend, "seconds").format("HH:mm:ss")}
      </p>
      <input type="hidden" name="timeSpend" value={timeSpend} />
    </>
  );
};

export default Timer;
