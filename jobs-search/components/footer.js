import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-common mt-5">
      created by &nbsp;
      <Link href="https://github.com/ted-dino">
        <a className="underline font-bold">Ted Dino</a>
      </Link>
      &nbsp; - devchallenges.io
    </footer>
  );
};

export default Footer;
