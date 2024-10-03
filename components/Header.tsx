// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/socials">Socials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
