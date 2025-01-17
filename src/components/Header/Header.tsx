import { HeaderStyle } from "@/styles/HeaderStyles/Header";
import { MobileNavStyles } from "@/styles/HeaderStyles/MobileNav";

import Link from "next/link";
import { Logo, Menu, } from "../Icons/Icons";
import Search from "./Search";
import React, { FunctionComponent, useEffect } from "react";
import { PageLinkStyle } from "@/styles/LinkStyles/Link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeNav, toggleNav, setShowPaymentModaL } from "@/redux/dataSlice";
import { useRouter } from "next/router";
import { RootState } from "@/redux/store";

// What is left to do here is
// 1. Complete the hover/clicked states of the wishlist and notifications
const Header: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { isNavOpen } = useAppSelector((state: RootState) => state.data);
  const toggleMenu = () => {
    dispatch(toggleNav());
  };

  const handleSubscribe = () => {
    dispatch(setShowPaymentModaL(true));
  };

  useEffect(() => {
    const handleRouteChange = () => {
      // close mobile slidein if the route changes
      dispatch(closeNav());
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const router = useRouter();
  // I need to change the logo from vephla -> Xendar and ship!!
  return (
    <HeaderStyle>
      <div className="logo">
        <Link href={"/"}>
        <Logo />
        </Link>
      </div>
      <div className="desktop desktop-nav-links">
        <Link href={"/courses"}>
          <PageLinkStyle
            color="var(--grey-500, #525252)"
            $ispageactive={router.pathname === "/courses"}
          >
            Courses
          </PageLinkStyle>
        </Link>
        <Link href={"/about"}>
          <PageLinkStyle
            color="var(--grey-500, #525252)"
            $ispageactive={router.pathname === "/about"}
          >
            About Us
          </PageLinkStyle>
        </Link>
        <Link href={"/contact"}>
          <PageLinkStyle
            color="var(--grey-500, #525252)"
            $ispageactive={router.pathname === "/contact"}
          >
            Contact Us
          </PageLinkStyle>
        </Link>
        <Link href={"/chatroom"}>
          <PageLinkStyle
            color="var(--grey-500, #525252)"
            $ispageactive={router.pathname === "/chatroom"}
          >
            Chat
          </PageLinkStyle>
        </Link>
      </div>
      <div className="desktop">
        <Search />
      </div>
      <div className="desktop icons-group">
        <button onClick={handleSubscribe} className="bg-[#e39c44] text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
        {/* <div className="icons">
          <Heart />
          <Notification />
        </div> */}
        {/* <Image
          src={"/assets/nav_avatar.png"}
          alt={"nav avatar"}
          width={40}
          height={40}
        /> */}
      </div>

      <div className="mobile mobile-nav-links">
        <Search />
        <Menu toggleMenu={toggleMenu} isNavOpen={isNavOpen} />
      </div>

      {isNavOpen && (
        <MobileNavStyles>
          <div className="sidemenu">
            <div className="sidemenu-links">
              <Link href={"/courses"}>Courses</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/chatroom"}>Chat</Link>
            </div>
          </div>
        </MobileNavStyles>
      )}
    </HeaderStyle>
  );
};

export default Header;
