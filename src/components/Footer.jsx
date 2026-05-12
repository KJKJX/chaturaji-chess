import React from "react";

function Footer() {
  return (
    <footer className="bg-black/40 border-t-[0.1vw] border-white/20 w-full h-[4vw] p-[1vw] flex items-center">
      <p className="text-white/70 text-[1vw]">
        © {new Date().getFullYear()}{" "}
        <a
          className="underline hover:text-white/90 duration-100"
          href="https://www.chess.com/club/chaturaji-chess-team"
        >
          Chaturaji Chess Team Club.
        </a>{" "}
        All code and assets were made by{" "}
        <a
          className="hover:text-white/90 duration-100"
          href="https://www.chess.com/member/universoul_crown"
        >
          Universoul_Crown
        </a>{" "}
        and{" "}
        <a
          className="hover:text-white/90 duration-100"
          href="https://www.chess.com/member/sxbzer0"
        >
          SxbZer0.
        </a>
      </p>
    </footer>
  );
}

export default Footer;
