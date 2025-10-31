import Link from 'next/link';
import { LP_GRID_ITEMS } from '../../lp-items';

export default function Web() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-2">
            {LP_GRID_ITEMS.map((item) => {
              const slug = item.title.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim();
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="flex flex-col items-center justify-center text-center">
                  <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>

  )
}
