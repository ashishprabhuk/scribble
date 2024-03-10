import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2 bg-blue-200">
        <Link
          to="/"
          className="flex justify-center items-center font-medium whitespace-nowrap"
        >
          <img src="/DesignerBg.png" alt="logo" className="w-12 h-12 " />
          <div className="font-pacifico text-2xl text-logo cursor-pointer ">
            Scribble
          </div>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={FiSearch}
            className="hidden lg:inline rounded-8xl"
          />
        </form>
        <Button className="w-14 h-12 lg:hidden" color="gray" pill>
          <FiSearch className="text-xl text-logo" />
        </Button>
        <div className="flex justify-center items-center gap-2 md:order-2">
          <Button className="w-14 h-12 hidden lg:inline" color="gray" pill>
            <FaMoon className="text-lg text-logo" />
          </Button>
          <Button className="bg-logo" pill>
            <Link
              to="/signin"
              className="text-base font-semibold font-noto text-white"
            >
              Sign In
            </Link>
          </Button>

          <Navbar.Toggle className="text-logo" barIcon={TbMenuDeep}>
            <TbMenuDeep />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active={path === "/"}
            as={"div"}
            className={path === "/" ? "text-logo font-semibold" : "text-logo"}
          >
            <Link to="/" className="font-noto text-lg">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/dashboard"}
            as={"div"}
            className={
              path === "/dashboard" ? "text-logo font-semibold" : "text-logo"
            }
          >
            <Link to="/dashboard" className="font-noto text-lg">
              Dashboard
            </Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/about"}
            as={"div"}
            className={
              path === "/about" ? "text-logo font-semibold" : "text-logo"
            }
          >
            <Link to="/about" className="font-noto text-lg">
              About
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
