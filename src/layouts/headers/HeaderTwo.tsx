"use client";
import InjectableSvg from "@/hooks/InjectableSvg";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import NavMenu from "./menu/NavMenu";
const TotalCart = dynamic(() => import("@/components/common/TotalCart"), {
  ssr: false,
});
const CustomSelect = dynamic(() => import("@/ui/CustomSelect"), { ssr: false });

import logo from "@/assets/img/logo/logo.png";
import UseCartInfo from "@/hooks/UseCartInfo";
import UseSticky from "@/hooks/UseSticky";
import React, { useState } from "react";
import MobileSidebar from "./menu/MobileSidebar";

const HeaderTwo = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const { data: session } = useSession(); // Get session data

  const handleSelectChange = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };

  const { total } = UseCartInfo();
  const { sticky } = UseSticky();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>
        <div
          id="sticky-header"
          className={`tg-header__area tg-header__style-two ${
            sticky ? "sticky-menu" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} width={155} height={48} alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <NavMenu />
                    </div>
                    <div className="tgmenu__search d-none d-md-block">
                      <CustomSelect
                        value={selectedOption}
                        onChange={handleSelectChange}
                      />
                    </div>
                    <div className="flex items-center ml-auto text-xl font-bold text-gray-900">
                      {session ? (
                        <p className="">
                          Welcome, {session?.user?.fname || "User"}!
                        </p>
                      ) : (
                        <Link href="/registration" className="btn">
                          Get Started
                        </Link>
                      )}
                    </div>
                    {/* <div className="mobile-login-btn">
                      {session ? (
                        <button onClick={() => signOut()} className="btn">
                          Logout
                        </button>
                      ) : (
                        <Link href="/login">
                          <InjectableSvg
                            src="/assets/img/icons/user.svg"
                            alt=""
                            className="injectable"
                          />
                        </Link>
                      )}
                    </div> */}
                    {/* <div
                      onClick={() => setIsActive(true)}
                      className="mobile-nav-toggler"
                    >
                      <i className="tg-flaticon-menu-1"></i>
                    </div> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar
        isActive={isActive}
        setIsActive={setIsActive}
        Sidebar="slide-bar-blockchain"
      />
    </>
  );
};

export default HeaderTwo;
