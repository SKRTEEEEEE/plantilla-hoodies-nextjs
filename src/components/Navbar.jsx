import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex flex-wrap ">
          <li className="w-1/4">
            <Link href="/">Home</Link>
          </li>
          <li className="w-1/4">About</li>
        </ul>
      </nav>
    </div>
  );
}
