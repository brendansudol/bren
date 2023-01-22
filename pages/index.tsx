import Head from "next/head"
import Image from "next/image"
import config from "./config.json"

export default function Home() {
  return (
    <>
      <Head>
        <title>Brendan Sudol</title>
        <meta name="description" content="My little website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[775px] mx-auto p-4">
        <h1 className="mb-8 text-xl font-black">Brendan Sudol</h1>
        <p className="mb-4 text-base max-w-prose">
          Hello! I'm Brendan. A little about myself — I live in Asheville, NC. I'm a software
          engineer. I love books and movies, playing golf, and soft pretzels. I also really enjoy
          making fun, little websites; here's a sampling:
        </p>
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
          {config.projects.map((project, idx) => (
            <div key={idx} className="sm:flex">
              <a className="flex-none block mr-2" href={project.url}>
                <Image
                  alt={project.title}
                  src={`/img/${project.icon}`}
                  width={24}
                  height={24}
                  priority
                />
              </a>
              <div className="flex-auto">
                <a className="mr-1 font-black hover:underline" target="_blank" href={project.url}>
                  {project.title}
                </a>{" "}
                <span className="text-gray-500">{project.summary}</span>
              </div>
            </div>
          ))}
        </div>
        <footer className="py-5 mt-8 flex items-center gap-5 text-sm">
          <a className="underline" href="https://github.com/brendansudol" target="_blank">
            Github
          </a>
          <a className="underline" href="https://twitter.com/brensudol" target="_blank">
            Twitter
          </a>
          <a href="https://getwemoji.com/" target="_blank">
            <Image alt="peace" src="/img/peace.gif" width={24} height={24} priority />
          </a>
        </footer>
      </main>
    </>
  )
}
