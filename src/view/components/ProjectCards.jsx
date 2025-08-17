import { Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

function ProjectCards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "mathsantanax";

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

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel className="rounded-2xl w-[80%]">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col items-center justify-center p-6 rounded-2xl 
                          bg-white/10 backdrop-blur-md border border-white/20 
                          shadow-lg h-[350px] transition-transform duration-300 
                          hover:scale-105"
            >
              {/* Aqui você pode colocar imagem preview do projeto, se tiver */}
              <div className="w-full h-[180px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {repo.name}
                </span>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-200 text-sm mb-2">
                  {repo.description || "Sem descrição"}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6b6e] font-semibold hover:underline"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <div>Nenhum repositório encontrado.</div>
        )}
      </Carousel>
    </div>
  );
}

export default ProjectCards;
