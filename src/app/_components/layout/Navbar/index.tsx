import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white shadow-sm flex justify-between py-2 px-4">
      {/* //Todo : Replace logo with image */}
      <a href="/">Angkat</a>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
