import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as first from "first-blog.mdx";
import * as second from "second-blog.mdx";
import * as third from "third-blog.mdx";

function postFromModule(module: any) {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    ...module.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(first),
    postFromModule(second),
    postFromModule(third),
  ];
};

export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div className="px-6">
      <h2 className="text-indigo-500 text-3xl">Weird stuff below</h2>

      <ul className="list-none flex flex-col gap-5">
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className={`no-underline text-2xl`}>{post.title}</Link>
            {post.description && (
              <p className="m-0 lg:m-0 text-md">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}