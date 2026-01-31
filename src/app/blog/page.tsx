import { PostSecondary } from "@/components/elements/post-secondary";
import { type Post } from "@/types/contentlayer";
import allPostsData from "../../../.contentlayer/generated/Post/_index.json";
const allPosts = allPostsData as Post[];

export const metadata = {
  title: "Blog - MAHG",
  description:
    "Licenciado en Derecho y Desarrollador Web Front End. Está es la versión renovada de mi portafolio de trabajos y proyectos. Aquí podrás encontrar información sobre mi experiencia profesional, proyectos, habilidades y más.",
};

export default async function Home() {
  const posts = allPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8 relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl hover:text-cyan-500 dark:hover:text-cyan-500 capitalize">
              Blog
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Un espacio personal dedicado a compartir mis experiencias en
              diversas áreas, como el desarrollo web, videojuegos y libros, así
              como algún que otro hobby que he desarrollado a lo largo de los
              años.
            </p>
          </header>
          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {posts.map((post) => (
                  <PostSecondary key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
