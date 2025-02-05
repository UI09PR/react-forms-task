import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="text-[5em] font-semibold text-indigo-600">404</h2>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Страница не найдена
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 mb-5">Такой страницы нету...</p>
        <Link to='/'> На главную </Link>
      </div>
    </main>
  );
};

export default NotFound;
