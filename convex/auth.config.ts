import { Password } from "@convex-dev/auth/providers/Password";

export default {
  providers: [
    Password({
      profile(params: any) {
        return {
          email: params.email as string,
          name: params.name as string,
        };
      },
    }),
  ],
};