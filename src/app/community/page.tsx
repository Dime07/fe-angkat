/* eslint-disable react/no-unescaped-entities */
import WorkoutList from "../_components/Content/Community/WorkoutList";

export default function CommunityPage() {
  return (
    <div className="flex flex-col py-4">
      <div className="space-y-0.5 mt-5">
        <h1 className="text-2xl font-bold text-neutral-950">
          Check out other progress 💪
        </h1>
        <p className="text-neutral-800 text-sm">
          Let's see how other people are doing
        </p>
      </div>
      <WorkoutList />
    </div>
  );
}
