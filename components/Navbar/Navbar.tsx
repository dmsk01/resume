import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/" passHref legacyBehavior>
        <a className="navbar__link">home</a>
      </Link>
      <Link href="/projects" passHref legacyBehavior>
        <a className="navbar__link">projects</a>
      </Link>
    </div>
  );
}

export default Navbar;
