"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/");
  }, []);

  return <div></div>;
};

export default NotFound;
