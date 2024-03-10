import { Button, Label, TextInput } from "flowbite-react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen mt-3">
      <div className="flex flex-col p-1 max-w-3xl mx-auto md:flex-row md:items-center md:gap-5">
        <div className="flex-1">
          <div className="flex flex-col justify-center items-center">

          <Link to="/" className="flex self-center justify-center items-center">
            <img
              src="/DesignerBg.png"
              alt="logo"
              className="w-16 h-16 cursor-pointer"
              />
            <h1 className="font-pacifico text-4xl text-logo cursor-pointer">
              Scribble
            </h1>
          </Link>
          <p className="self-center text-center text-logo font-pacifico text-lg">
            Welcome to the world of Scribble!
          </p>
          <img
            src="public/login1.gif"
            alt="gif"
            className="hidden w-80 h-80 self-center md:inline"
            />
            </div>
        </div>
        <div className="flex-1 p-3">
          <div className="flex flex-col justify-center items-center mb-3">
            <p className="p-2 font-noto font-semibold text-xl text-center text-logo ">
              Sign in with your account
            </p>
            <hr className="w-3/5 h-px border-none font-bold rounded-md opacity-80  bg-logo h-px" />
          </div>
          <form className="flex flex-col gap-3">
            <div className="mb-2 block">
              <Label
                htmlFor="username"
                className="text-logo"
                value="Name"
              />
              <TextInput
                type="text"
                id="username"
                placeholder="Username"
                required
                className="mt-1"
                // color="success"
                // helperText={
                //   <>
                //     <span className="font-medium">Alright!</span> Username
                //     available!
                //   </>
                // }
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="Email" className="text-logo" value="Email" />
              <TextInput
                type="email"
                id="email"
                placeholder="123@example.com"
                required
                className="mt-1"
                // color="failure"
                // helperText={
                //   <>
                //     <span className="font-medium">Oops!</span> Email already
                //     exists!
                //   </>
                // }
              />
            </div>
            <div className="mb-2 block">
              <Label
                htmlFor="Password"
                className="text-logo"
                value="Password"
              />
              <TextInput
                type="password"
                id="password"
                placeholder="Password"
                required
                className="mt-1"
                rightIcon={FiEye}
              />
            </div>
            <Button
              className="font-noto font-semibold text-3xl text-center bg-blue-300 rounded-3xl text-logo "
              type="submit"
            >
              <p className="font-noto font-semibold text-xl text-center bg-blue-300 rounded-3xl text-logo ">
                Sign In
              </p>
            </Button>
          </form>
          <div className="flex gap-1 mt-3 md:mt-2 self-center">
            <span className="text-logo">New User?</span>
            <Link to="/signup" className="text-blue-700 font-semibold">
              Sign Up here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
