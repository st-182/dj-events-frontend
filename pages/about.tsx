import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Page for finding musical events.</p>
      <p>Version 1.0</p>
      <Link href="/">Home</Link>
    </div>
  );
}
