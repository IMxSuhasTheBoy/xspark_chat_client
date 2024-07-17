// import Background from "@/assets/login2.png";
// import Victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList } from "@/components/ui/tabs";

import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = async () => {};
  const handleSignup = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] flex items-center justify-center text-opacity-90 bg-white border-2 border-white shadow-2xl rounded-3xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[80vw]">
        <div className="flex flex-col gap-10 items-center justify-center xl:w-[60vw]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
              <h1 className="text-5xl font-bold md:text-6xl text-center">
                Welcome to xspark
              </h1>
              {/* <img src={Victory} alt="Victory Emoji" className="h-[100px]" /> */}
            </div>
            <p className="font-medium text-center p-3">
              Please sign up to continue
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <Tabs defaultValue="login" className="w-3/4">
              <TabsList className="w-full bg-transparent rounded-none">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ease-in-out"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ease-in-out"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-6 rounded-2xl"
                ></Input>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-6 rounded-2xl"
                ></Input>
                <Button onClick={handleLogin} className="p-6 rounded-2xl">
                  Login
                </Button>
              </TabsContent>
              <TabsContent value="signup" className="flex flex-col gap-5">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-6 rounded-2xl"
                ></Input>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-6 rounded-2xl"
                ></Input>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="p-6 rounded-2xl"
                ></Input>
                <Button onClick={handleSignup} className="p-6 rounded-2xl">
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
