import { cn } from "@/app/_components/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { like, unlike } from "./action";

interface ILikeButtonProps {
  isLiked: boolean;
  count: number;
  workoutId: number;
}

const LikeButton = ({ isLiked, count, workoutId }: ILikeButtonProps) => {
  return (
    <button
      onClick={() => {
        if (isLiked) {
          unlike(workoutId);
        } else {
          like(workoutId);
        }
      }}
      className="flex gap-0.5 items-center active:scale-150 transition-all ease-in-out"
    >
      <Icon
        icon="solar:fire-bold"
        className={cn(
          "text-xl text-neutral-300 transition-all ease-in-out duration-300",
          {
            "text-orange-600": isLiked,
          }
        )}
      />
      <span className="text-sm font-medium text-neutral-950">{count}</span>
    </button>
  );
};

export default LikeButton;
