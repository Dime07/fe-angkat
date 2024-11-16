import Link from "next/link";
import Button from "../../Button";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white shadow-sm flex justify-between items-center py-2 px-4">
      {/* //Todo : Replace logo with image */}
      <a href="/">Angkat</a>
      <ul className="flex gap-2 text-xs">
        <li className="font-semibold  px-2 py-0.5 flex items-center bg-slate-100 rounded text-neutral-950">
          <Link href="/">My Exercise</Link>
        </li>
        <li className="text-neutral-300 px-2 py-0.5 flex items-center gap-2">
          Community
          <span className="px-1 bg-red-400 text-white rounded-sm text-[6px]">
            Coming Soon
          </span>
        </li>
      </ul>
      <div>
        <Link href="/login">
          <Button variant="secondary">
            <span>Login</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
