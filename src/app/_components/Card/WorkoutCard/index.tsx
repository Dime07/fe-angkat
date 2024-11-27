const WorkoutCard = () => {
  return (
    <div className="w-full border border-secondary-950 rounded px-3 py-2 flex flex-col gap-4">
      {/* header */}
      <div>
        <p className="text-sm font-bold text-primary-950">
          Chest & Triceps •{" "}
          <span className="text-secondary-700">45 minutes</span>
        </p>
        <p className="text-[10px] text-primary-400">12 Januari 2025</p>
      </div>
      {/* content */}
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="border border-primary-200 p-2 rounded text-sm text-primary-950"
            key={index}
          >
            <p className="font-bold">Lever Seated Shoulder Press</p>
            <p>
              volume: <b>120kg</b>
            </p>
            <p>
              reps: <b>4</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
