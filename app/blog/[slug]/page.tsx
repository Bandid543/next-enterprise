import { LP_GRID_ITEMS } from '../../../lp-items';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = LP_GRID_ITEMS.find(
    (g) => g.title.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim() === slug
  );

  if (!item) {
    notFound();
  }

  return (
<main className="min-h-screen w-full bg-white dark:bg-gray-900 flex items-center justify-center">
  <div className="text-center">
    <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full mx-auto w-fit">
      {item.icon}
    </div>

    <h3 className="mt-6 text-3xl font-bold dark:text-white">{item.title}</h3>
    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">{item.description}</p>
    
  </div>
</main> 
  );
}
