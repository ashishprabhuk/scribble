import { Button, Label, TextInput } from "flowbite-react";

export default function SignIn() {
  return (
    <div className="my-20 flex justify-center items-center self-center gap-5 ">
      <div className="self-center flex flex-col flex 1">
        <img src="/DesignerBg.png" alt="logo" className="w-20 h-20" />
        <h1 className="font-pacifico text-4xl text-logo">Scribble</h1>
        <p className="font-noto">Sign in with your account</p>
      </div>
      <div>
        <form className="flex flex-col gap-2">
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username3" color="success" value="Your name" />
              </div>
              <TextInput
                id="username"
                placeholder="Username"
                required
                color="success"
                // helperText={
                //   <>
                //     <span className="font-medium">Alright!</span> Username
                //     available!
                //   </>
                // }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username4" color="failure" value="Email" />
              </div>
              <TextInput
                type="email"
                id="username4"
                placeholder="123@example.com"
                required
                color="failure"
                // helperText={
                //   <>
                //     <span className="font-medium">Oops!</span> Email already
                //     exists!
                //   </>
                // }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username4" color="failure" value="Password" />
              </div>
              <TextInput
                type="password"
                id="password"
                placeholder="Password"
                required
                color="failure"
                // helperText={
                //   <>
                //     <span className="font-medium">Invalid!</span> Try Again!
                //   </>
                // }
              />
            </div>
          </div>
          <Button color="blue">Submit</Button>
        </form>
      </div>
    </div>
  );
}
