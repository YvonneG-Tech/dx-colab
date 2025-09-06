"use client";

import { useState } from "react";
import { Authenticated, Unauthenticated, AuthLoading, useQuery } from "convex/react";
import { api } from "convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";

function SignInForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        void signIn("password", formData);
      }}
    >
      {flow === "signUp" && <input name="name" placeholder="Name" />}
      <input name="email" placeholder="Email" type="text" />
      <input name="password" placeholder="Password" type="password" />
      <input name="flow" type="hidden" value={flow} />
      <button type="submit">{flow === "signIn" ? "Sign in" : "Sign up"}</button>
      <button type="button" onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}>
        {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
      </button>
    </form>
  );
}

function Dashboard() {
  const user = useQuery(api.auth.getCurrentUser);
  return <div>Hello {user?.name}!</div>;
}

export default function Page() {
  return (
    <>
      <AuthLoading>Loading...</AuthLoading>
      <Unauthenticated><SignInForm /></Unauthenticated>
      <Authenticated><Dashboard /></Authenticated>
    </>
  );
}