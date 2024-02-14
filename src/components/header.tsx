"use client";

import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

const AvatarContainer = ({
  className,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
};

const Avatar = ({
  large = false,
  className,
  ...props
}: {
  large?: boolean;
  className?: string;
}) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src="/mahg_logo.png"
        width={64}
        height={64}
        alt="MAHG Logo"
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-gray-100 object-cover dark:bg-slate-900",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
};

function CloseIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavItem({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-sky-900 dark:text-sky-500"
            : "hover:text-sky-900 dark:hover:text-sky-500"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: { className?: string }) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Inicio</NavItem>
        <NavItem href="/projects">Proyectos</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="mailto:contacto@mahg.me">Contacto</NavItem>
        <Link
          href="https://drive.google.com/file/d/1one18GvA2nFNswvsvob42rg76-j-8Rpl/view?usp=sharing"
          target="_blank"
          className={clsx(
            "relative block px-3 py-2 transition",
            "hover:text-sky-900 dark:hover:text-sky-500"
          )}
        >
          Curriculum
        </Link>
      </ul>
    </nav>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props: { className?: string }) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-slate-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-slate/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-slate-800 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-l font-medium text-zinc-600 dark:text-zinc-400">
                Navegación
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Inicio</MobileNavItem>
                <MobileNavItem href="/projects">Proyectos</MobileNavItem>
                <MobileNavItem href="/blog">Blog</MobileNavItem>
                <MobileNavItem href="#">Contacto</MobileNavItem>
                <Link
                  href="https://drive.google.com/file/d/1one18GvA2nFNswvsvob42rg76-j-8Rpl/view?usp=sharing"
                  target="_blank"
                  className="block py-2"
                >
                  Curriculum
                </Link>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export const Header = () => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8 relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1">
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                </div>
                <div className="flex justify-end md:flex-1">
                  <MobileNavigation className="pointer-events-auto md:hidden" />
                  <DesktopNavigation className="pointer-events-auto hidden md:block" />
                </div>

                {/* <div className="flex flex-1 justify-end md:justify-center">
                    <MobileNavigation className="pointer-events-auto md:hidden" />
                    <DesktopNavigation className="pointer-events-auto hidden md:block" />
                  </div> */}

                {/* <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <ThemeToggle />
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
