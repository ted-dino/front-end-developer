import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1 className="text-2xl flex gap-1 font-poppins cursor-pointer">
          <span className="text-[#282538] font-bold">Jobs</span>
          <span className="font-light">Search</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
