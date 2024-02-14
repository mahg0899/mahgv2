import { PostPrimary } from "@/components/elements/post-primary";

import { allPosts } from "contentlayer/generated";

export const metadata = {
  title: "Inicio - MAHG",
  description:
    "Licenciado en Derecho y Desarrollador Web Front End. Está es la versión renovada de mi portafolio de trabajos y proyectos. Aquí podrás encontrar información sobre mi experiencia profesional, proyectos, habilidades y más.",
};

export default async function Home() {
  const posts = allPosts.slice(0, 1);

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8 relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              MAHG,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-red-600 capitalize">
                Desarrollador web front end
              </span>
            </h1>

            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Soy Miguel Alejandro <span className="font-bold">(MAHG)</span>,
              licenciado en derecho egresado por la{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-emerald-500 dark:hover:text-emerald-500">
                Universidad Veracruzana
              </span>{" "}
              y desarrollar front end.
            </p>

            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Me apaciona la tecnología y el desarrollo web, me gusta nunca
              dejar de aprender pese a todo, por lo cual me he especializado en
              tecnologías como{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-sky-200 dark:hover:text-sky-200">
                React
              </span>
              ,{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-yellow-400 dark:hover:text-yellow-400">
                JavaScrip
              </span>
              ,{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-orange-400 dark:hover:text-orange-400">
                Laravel
              </span>
              ,{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-sky-600 dark:hover:text-sky-600">
                CSS
              </span>
              ,{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-amber-400 dark:hover:text-amber-400">
                HTML
              </span>{" "}
              y más recientemente me he interesado en NextJS, TailwindCSS y unas
              cuantas más.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Este pequeño sitio es la{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400">
                V2 de mi portafolio de trabajos
              </span>
              , a su vez, es el primer proyecto que he realizado en{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400">
                NextJS
              </span>
              ,{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400">
                TailwindCSS
              </span>{" "}
              y{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400">
                Contentlayer
              </span>
              . Por lo cual este diseño no es de mi autoria en su totalidad,
              pero planeo mejorarlo en una V3 con un diseño propio, o inclusive
              en una actualización mayor a este diseño en algún futuro próximo.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              La V1 de mi portafolio de trabajos puede ser localizada mediante
              la página de proyectos, así como la variedad de proyectos que he
              realizado en el pasado. Y que constantemente estaré actualizando
              con nuevos proyectos.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Finalmente mencionar, que si estas interesado en contactarme o
              conocer más sobre mis trabajos en desarrollo web, puedes hacerlos
              mediante los enlaces colocados en la parte superior de la página.
              Si por el contrario, estas interesado en conocer más sobre mi
              formación académica y profesional, puedes hacerlo mediante el
              enlace de{" "}
              <span className="bg-clip-text font-bold text-cyan-800 dark:text-cyan-400 hover:text-sky-600 dark:hover:text-sky-600">
                "Curriculum"
              </span>
              en la parte superior de la página.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Mis redes sociales principales se encuentran en la parte inferior
              así como mi blog, en el cual hablo de mis pasatiempos, tales como
              los videojuegos, series y libros, algunos proyectos a futuro y
              más.
            </p>
          </header>
          <h2 className="font-bold pt-10 text-zinc-800 dark:text-zinc-100 sm:text-4xl hover:text-cyan-500 dark:hover:text-cyan-500">
            Último blog
          </h2>
          <div className="mt-16 sm:mt-20">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
                {posts.map((post) => (
                  <PostPrimary key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
