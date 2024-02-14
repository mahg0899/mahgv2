import Link from "next/link";
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/components/social-icons";

export const Footer = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="border-t border-zinc-100/30 pb-16 pt-10 dark:border-zinc-700/20">
          {/* This lane is for the lines on footer site */}
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="mt-6 flex gap-6">
                  <Link
                    className="group -m-1 p-1"
                    href="https://twitter.com/mahg0899"
                    target="_blank"
                  >
                    <TwitterIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                  </Link>
                  <Link
                    className="group -m-1 p-1"
                    href="https://github.com/mahg0899"
                    target="_blank"
                  >
                    <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                  </Link>
                  <Link
                    className="group -m-1 p-1"
                    href="https://www.linkedin.com/in/mahg0899/"
                    target="_blank"
                  >
                    <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                  </Link>
                  <Link
                    className="group -m-1 p-1"
                    href="https://www.instagram.com/mahg0899/"
                    target="_blank"
                  >
                    <InstagramIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()}. Made with ❤️ by{" MAHG "}.
                  Original desing by Miia.dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
