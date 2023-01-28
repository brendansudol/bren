import { morph } from "@/utils/morph"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
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
      <main className="max-w-[780px] mx-auto px-4 py-6 font-light">
        <Link
          href="/"
          className="inline-block mb-8 text-xl lg:text-2xl leading-none font-black lowercase hover:underline"
        >
          <Morph text={config.name} />
        </Link>
        <p className="mb-4 max-w-prose">
          Hello! I’m Brendan. A little about myself — I live in Asheville, NC. I’m a software
          engineer. I love books and movies, playing golf, and soft pretzels. I also really enjoy
          making fun, little websites; here’s a sampling:
        </p>
        <div className="py-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-y-10">
          {config.projects.map((project, idx) => (
            <div key={idx} className="sm:flex">
              <a className="flex-none block mr-2 py-0.5" href={project.url}>
                <Image
                  alt={project.title}
                  src={`/img/${project.icon}`}
                  width={24}
                  height={24}
                  priority
                />
              </a>
              <div className="flex-auto">
                <a
                  className="mr-1 font-black hover:underline"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>{" "}
                <span className="text-gray-500">{project.summary}</span>
              </div>
            </div>
          ))}
        </div>
        <footer className="py-3 mt-8 flex items-center gap-5 text-sm">
          <a
            className="underline"
            href="https://github.com/brendansudol"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="underline"
            href="https://twitter.com/brensudol"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a href="https://getwemoji.com/" target="_blank" rel="noreferrer">
            <Image alt="peace" src="/img/peace.gif" width={24} height={24} priority />
          </a>
        </footer>
      </main>
    </>
  )
}

function Morph({ text }: { text: string }) {
  const handleTextMorph = (el: HTMLElement | null) => {
    if (el) morph(el, text)
  }

  return <span ref={handleTextMorph}>{text}</span>
}
