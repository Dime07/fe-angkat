import Input from "../_components/Input";
import Timer from "../_components/Timer";
import { createWorkout } from "./action";
import Button from "../_components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function StartWorkout() {
  return (
    <div className="flex flex-col gap-2 py-4 min-h-[calc(100vh-40px)] overflow-auto">
      <Timer />
      <form
        action={createWorkout}
        className="flex flex-col gap-2"
        name="workout"
      >
        <div className="grid grid-cols-[1fr_1fr_1fr_70px] items-end gap-2">
          <Input
            name="workout"
            placeholder="workout name"
            label="Workout Name"
          />
          <Input name="reps" placeholder="reps" label="Reps" />
          <Input name="volume" placeholder="volume" label="Volume (kg)" />
          <div className="flex gap-2">
            <button className="size-7 flex items-center justify-center border rounded-full">
              <Icon
                icon="solar:copy-bold"
                className="text-secondary-950 text-lg"
              />
            </button>
            <button className="size-7 flex items-center justify-center border rounded-full">
              <Icon
                icon="ic:baseline-plus"
                className="text-secondary-950 text-lg"
              />
            </button>
          </div>
        </div>
        <Button type="submit" className="w-full text-lg">
          Finish Workout
        </Button>
      </form>
    </div>
  );
}
