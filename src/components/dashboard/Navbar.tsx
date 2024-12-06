import { auth, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const session = await auth();

  const data = session?.user;

  return (
    <div>
      <div className="px-2 md:px-20 py-2 md:py-5 flex ">
        <div className="w-2/4">
          <Link href="/dashboard" className="md:text-2xl text-xl font-bold">
            <h1>KoCop Bot</h1>
          </Link>
        </div>

        <div className="w-2/4 justify-end flex">
          <h1 className="text-xl mt-2 font-bold mr-10 hidden md:block">
            halo, {data?.name ?? "guest"}
          </h1>
          <div
            className="h-10 w-10 rounded-full bg-cover   mr-5"
            style={{
              backgroundImage: `url("${data?.image ?? "guest"}")`,
            }}
          ></div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="md:text-xl text-lg mt-1  md:mt-2 text-blue-600 font-bold"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
