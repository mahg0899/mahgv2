import { useMDXComponent } from "@/hooks/use-mdx";

import { format, parseISO } from "date-fns";
import { type Post } from "@/types/contentlayer";
import allPostsData from "../../../../.contentlayer/generated/Post/_index.json";
const allPosts = allPostsData as Post[];

import Link from "next/link";

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error(`Post not found: "${params.slug}" | AllPosts: ${allPosts.length}`);
  }

  if (!post.body || !post.body.code) {
    throw new Error(`Invalid post body for "${params.slug}". Keys: ${post.body ? Object.keys(post.body).join(',') : 'undefined'}`);
  }

  return {
    title: post.title,
  };
};

const ArrowLeftIcon = (props: { className?: string }) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default async function Home(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error(`Post not found: "${params.slug}" | AllPosts: ${allPosts.length}`);
  }

  if (!post.body || !post.body.code) {
    throw new Error(`Invalid post body for "${params.slug}". Keys: ${post.body ? Object.keys(post.body).join(',') : 'undefined'}`);
  }

  // const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-slate-800/90 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700/60 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300" />
            </Link>

            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {post.title}
                </h1>
                <time
                  dateTime={post.createdAt}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">
                    {format(parseISO(post.createdAt), "LLLL d, yyyy")}
                  </span>
                </time>
              </header>

              <div className="mt-8 prose dark:prose-invert">
                {/* <MDXContent /> */}
                <p className="p-4 border border-yellow-500 bg-yellow-50 text-yellow-800 rounded">
                  Content rendering temporarily disabled due to incompatibility between Contentlayer (archived) and React 19.
                  Please upgrade to next-mdx-remote or similar modern solution.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
