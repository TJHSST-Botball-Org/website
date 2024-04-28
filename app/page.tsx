"use client"

import Image from "next/image";
import { useTheme } from "next-themes"

export default function Home() {
  const { setTheme } = useTheme();

  setTheme("dark");

  return (
    <main>
      Hello world! gggggg
    </main>
  );
}
