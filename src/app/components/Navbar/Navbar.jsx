"use client";
import "./navigationbar.css";
import React, { useEffect, useRef, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/app/Context/AuthContext";
import logo from "../../../../assets/images/logo.png";
import Image from "next/image";

//Scooll to top
import BacktoTop from "./BacktoTop";

function Navbar() {
  const navLinks = [
    { href: "/home", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/tours", name: "Tours" },
  ];

  const headerRef = useRef(""); // เก็บค่า scroll down
  const menuRef = useRef(""); // เก็บค่า toggle hanburger menu
  const router = useRouter();
  const pathname = usePathname(); // เอาไว้เช็ค link ว่า match กับที่คลิกมั้ย
  const { user, dispatch } = useContext(AuthContext); // user จาก การ login

  const LogOut = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/home");
    window.location.reload();
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => {
    // นำ menuRef ที่ใช้ toggle มาใส่ฟังชัน toggle และเพิ่ม class เอาไปใส่ในตัว icon hamburger และ ตัว link ที่ใช้ map
    menuRef.current.classList.toggle("show__menu"); // เวลาคลิกตรงพื้นที่เปล่าที่ไม่ใช่ลิงค์ จะได้กดออกได้
  };

  return (
    <nav className="header" ref={headerRef}>
      {/*Back to top */}
      <BacktoTop />
      {/*Back to top */}

      <Container>
        <Row>
          <div className="container_flex gap-4">
            {/* logo */}
            <div className="logo-img">
              <Link href={"/home"}>
                <Image
                  src={logo}
                  className="logo"
                  alt=""
                  width={""}
                  height={""}
                />
              </Link>
            </div>
            {/* logo end */}

            {/* Menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex gap-5">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <li
                      key={index}
                      className={isActive ? "active__link" : "nav__item"}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Menu end */}

            {/* show user after login */}
            <div className="d-flex align-items-center gap-4 btn__etc ">
              {user ? (
                <>
                  <h5 className="mb-0">{user.username}</h5>
                  <Button className="btn btn_logout" onClick={LogOut}>
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Button className="btn btn_register ">
                    <Link href={"/login"}>LogIn</Link>
                  </Button>
                  <Button className="btn btn_login">
                    <Link href={"/register"}>Register</Link>
                  </Button>
                </>
              )}
            </div>
            {/* end */}

            {/* mobile menu */}
            <div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
