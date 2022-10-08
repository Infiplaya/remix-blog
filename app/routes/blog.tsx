import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "highlight.js/styles/tokyo-night-dark.css";

export const meta: MetaFunction = () => {
  return {
    title: "Life of pablo's",
    description: "weird thoughts of pablo",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog() {
  return (
    <div className="flex justify-center">
      <div className="prose prose-a:text-orange-400 prose-headings:text-indigo-400 text-yellow-50 lg:prose-xl py-10 px-6">
        <Outlet />
      </div>
    </div>
  );
}