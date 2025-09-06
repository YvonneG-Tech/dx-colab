import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

import { SignInFlow } from "../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      setError("");
    }

    setPending(true);
    signIn("password", { name, email, password, flow: "signUp" })
      .catch((error) => {
        console.error("Sign up error:", error);
        setError(error?.message || "Something went wrong");
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-4 px-0 pb-0">
        <form onSubmit={onPasswordSignUp} className="space-y-2.5">
          <Input
            disabled={pending}
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Full name"
            required
          />
          <Input
            disabled={pending}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Input
            disabled={pending}
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            placeholder="Confirm password"
            type="password"
            required
          />
          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            disabled={pending}
          >
            Continue
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <Button
            type="button"
            variant={"link"}
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer p-0"
          >
            Sign in
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};