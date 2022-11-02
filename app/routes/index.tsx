import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return {
    title: "Pablos's blog",
    description: "some pablo stuff",
  };
};

export default function Index() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    }}>
      <div className="flex justify-center items-center text-center text-4xl px-6 h-screen">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold lg:text-6xl">
            Hello, im <span className="text-indigo-400">Paweł</span>!
          </h1>
          <h3 className="text-2xl lg:text-4xl">Welcome to my blog</h3>
          <Link to={"/blog"}>
            <button className="pt-6">
              <span className="font-bold rounded-md text-xl lg:text-3xl bg-indigo-500 px-4 py-2 hover:opacity-90 transition-opacity duration-300 shadow-2xl">
                START HERE!
              </span>
            </button>
          </Link>
          <ul className="flex gap-3 mt-10 text-lg self-center">
            <a href={"https://psobaniec.vercel.app/"}>
              <li className="text-indigo-400 hover:text-indigo-500">
                My Website
              </li>
            </a>
            <a href={"https://github.com/Infiplaya"}>
              <li className="text-indigo-400 hover:text-indigo-500">Github</li>
            </a>
            <a href={"https://www.linkedin.com/in/psobaniec09/"}>
              <li className="text-indigo-400 hover:text-indigo-500">
                Linkedin
              </li>
            </a>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
