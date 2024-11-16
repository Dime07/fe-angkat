import Link from "next/link";
import Button from "./_components/Button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="space-y-0.5 mt-5">
        <h1 className="text-2xl font-bold text-neutral-950">
          Welcome , Dimas 👋
        </h1>
        <p className="text-neutral-800 text-sm">
          Let&apos;s start a healthy life
        </p>
      </div>
      <Link href="/workout">
        <Button>Start Workout</Button>
      </Link>
    </div>
  );
}
