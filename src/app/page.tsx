import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className="m-4">
        home page
      </div>
    </>
  );
}
