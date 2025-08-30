// convex/auth.ts
import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Password],
});

const authConfig = {
  providers: [
    {
      id: "password"
    }
  ],
};

export default authConfig;