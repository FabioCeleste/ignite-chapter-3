import { Client } from "faunadb";

console.log(process.env.FAUNA_SECRET);

export const fauna = new Client({
  secret: process.env.FAUNA_SECRET as string,
  domain: "db.us.fauna.com",
});
