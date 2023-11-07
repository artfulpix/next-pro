"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  console.error(error);
  return (
    <>
      <div>There is an unexpected error.</div>
      <button className="tw-btn tw-btn-info" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default Error;
