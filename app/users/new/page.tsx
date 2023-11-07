"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/users")}
        className="tw-btn tw-btn-primary"
      >
        Back
      </button>
      <div>NewUser</div>
    </div>
  );
};

export default NewUser;
