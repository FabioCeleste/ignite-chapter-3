import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(user) {
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  q.Casefold(user.user.email as string)
                )
              )
            ),
            q.Create(q.Collection("users"), {
              data: { email: user.user.email },
            }),
            q.Get(
              q.Index("user_by_email"),
              q.Casefold(user.user.email as string)
            )
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
