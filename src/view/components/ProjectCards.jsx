import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function ProjectCards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "mathsantanax";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const myReposRes = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!myReposRes.ok) throw new Error("Erro ao buscar seus repositórios");
        const myRepos = await myReposRes.json();

        const starredRes = await fetch(
          `https://api.github.com/users/${username}/starred`
        );
        if (!starredRes.ok)
          throw new Error("Erro ao buscar repositórios estrelados");
        const starredRepos = await starredRes.json();

        const starredSet = new Set(starredRepos.map((repo) => repo.full_name));
        const filtered = myRepos.filter((repo) =>
          starredSet.has(repo.full_name)
        );

        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const nextSlide = () => {
    if (currentIndex < repos.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="relative w-full h-full grid items-center max-w-6xl mx-auto py-12">
      {/* Botão Esquerda */}
      <button
        onClick={prevSlide}
        className="absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-md hover:bg-white/20 transition">
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div
                key={repo.id}
                className="min-w-[calc(100%/3-1.5rem)] h-[200px] [perspective:1000px] items-center">

                <div className="absolute h-[150px] w-full bg-[#ff6b6e56] rounded-xl "> 
                </div>
                <div className="relative h-[90%] w-[90%] transition-transform duration-700 translate-3 translate-y-5 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                  {/* Frente do Card */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center [backface-visibility:hidden] shadow-lg">
                    
                    <span className="text-white text-lg font-bold">
                      {repo.name}
                    </span>
                  </div>

                  {/* Verso do Card */}
                  <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-center items-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                    <p className="text-sm mb-4 text-center">
                      {repo.description || "Sem descrição"}
                    </p>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-400 transition"
                    >
                      Ver no GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Nenhum repositório encontrado.</div>
          )}
        </div>
      </div>

      {/* Botão Direita */}
      <button
        onClick={nextSlide}
        className="absolute z-10 cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-md hover:bg-white/20 transition"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default ProjectCards;
