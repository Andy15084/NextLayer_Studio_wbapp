import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8ECAE6]">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-[#023047] mb-4">
          404 - Stránka nenájdená
        </h1>
        <p className="font-mono text-[#023047] mb-8">
          Stránka, ktorú hľadáte, neexistuje.
        </p>
        <Link href="/" className="bg-[#FFB703] text-[#023047] font-semibold py-2 px-4 rounded-lg hover:bg-[#FF9500] transition-colors duration-300">
          Späť na domovskú stránku
        </Link>
      </div>
    </div>
  );
} 