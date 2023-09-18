"use client";
import {
  IconBuildingFortress,
  IconJetpack,
  IconMenu2,
  IconMusic,
  IconPuzzle,
  IconRocket,
  IconX,
} from "@tabler/icons";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import IconCustomSalas from "./images/salas";
import IconCustomVesmir from "./images/vesmir";
import IconCustomDCM from "./images/dcm-hk";
import IconCustomEvzen from "./images/evzen";
import IconCustomVeka from "./images/veka";

export default function Header() {
  const [burgerControl, setBurgerControl] = useState("");
  const [closeControl, setCloseControl] = useState("hidden");
  const [burgerMenu, setBurgerMenu] = useState("hidden");

  const openMenu = () => {
    setBurgerControl("hidden");
    setCloseControl("");
    setBurgerMenu("");
    lockScrolling();
  };
  const closeMenu = () => {
    setBurgerControl("");
    setCloseControl("hidden");
    setBurgerMenu("hidden");
    unlockScrolling();
  };
  return (
    <>
      <header className="w-full flex flex-row items-center justify-between h-16">
        <div>
          <div className="text-3xl font-caveatBrush ml-4">Diecézko.cz</div>
        </div>
        <div>
          <IconMenu2
            className={`mr-4 cursor-pointer ${burgerControl}`}
            onClick={openMenu}
          />
          <IconX
            className={`mr-4 cursor-pointer ${closeControl}`}
            onClick={closeMenu}
          />
        </div>
      </header>
      <nav
        className={`absolute w-full backdrop-blur-md bg-black/60 ${burgerMenu} flex flex-col items-center`}
      >
        <ul
          className={`text-2xl flex flex-col items-start justify-around burger-menu-height w-[90vw] max-w-[400px]`}
        >
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconCustomEvzen className="inline h-7 my-1" /> Evženova cesta
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconPuzzle className="inline h-7 my-1" /> Vikariáty
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconCustomDCM className="inline h-6 my-1" /> DCM Hradec Králové
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconCustomVesmir className="inline h-7 my-1" /> DCŽM Vesmír
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconCustomSalas className="h-7 inline my-1" /> KSK Salaš
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              {" "}
              <IconCustomVeka className="inline h-6 my-1" /> Vesmírná kapela
            </li>
          </Link>
          <Link
            href=""
            target="_self"
            className="border-b-[#3b3b3b] border-b w-full"
          >
            <li>
              <IconMusic className="inline h-7 my-1" /> Studenecká schola
            </li>
          </Link>
        </ul>
      </nav>
      <Script
        id="lock-scrolling"
        dangerouslySetInnerHTML={{
          __html: `const body = document.getElementById("body");
  function lockScrolling() {
    body.classList.add("lock-scrolling");
    window.scrollTo(0, 0);
  }
  function unlockScrolling() {
    body.classList.remove("lock-scrolling");
  }`,
        }}
      />
    </>
  );
}
