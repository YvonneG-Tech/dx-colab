// convex/auth.ts
import { convexAuth } from '@convex-dev/auth/server';
import { Auth0 } from '@convex-dev/auth/providers/Auth0';

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Auth0],
});