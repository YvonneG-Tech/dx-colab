import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { SignInFlow } from "../types";

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
    state: SignInFlow;
}

export const SignUpCard = ({setState}: SignUpCardProps) => {
    return (
        <Card className="w-full h-full p-8 bg-white">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Login to continue
                </CardTitle>
                  <CardDescription>
                Use your details to continue
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                <Input
                   disabled={false}
                   value=""
                   onChange={() => {}}
                   placeholder="Email"
                   type="email"
                   required
                  />
                  <Input
                   disabled={false}
                   value=""
                   onChange={() => {}}
                   placeholder="Password"
                   type="password"
                   required
                  />
                  <Button type="submit" className="w-full bg-black text-white" size="lg" disabled={false}>
                    Continue
                  </Button>
                </form>
                <Separator/>
                <div className="flex flex-col gap-y-2.5">
                   <Button
                   disabled={false}
                   onClick={() => {}}
                   variant="outline"
                   size="lg"
                   className="w-full relative"
                   >
                    <FcGoogle />
                    Continue with Google
                   </Button> 
                    <Button
                   disabled={false}
                   onClick={() => {}}
                   variant="outline"
                   size="lg"
                   className="w-full relative"
                   >
                    <FaGithub />
                    Continue with Github
                   </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                    Don't have an account? <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">Sign up</span>
                </p>


            </CardContent>
        </Card>
    );
};