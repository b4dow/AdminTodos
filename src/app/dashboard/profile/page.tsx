"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Page Profile</h1>
      <hr />
      <span>{session?.user?.name ?? "No name"}</span>
      <span>{session?.user?.email ?? "No email"}</span>
      <span>{session?.user?.image ?? "No image"}</span>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
