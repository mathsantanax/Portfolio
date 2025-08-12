import { Carousel } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

function ProjectCards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "mathsantanax";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Buscar seus repositórios
        const myReposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!myReposRes.ok) throw new Error('Erro ao buscar seus repositórios');
        const myRepos = await myReposRes.json();

        // Buscar repositórios que você deu estrela
        const starredRes = await fetch(`https://api.github.com/users/${username}/starred`);
        if (!starredRes.ok) throw new Error('Erro ao buscar repositórios estrelados');
        const starredRepos = await starredRes.json();

        // Lista com full_name dos estrelados
        const starredSet = new Set(starredRepos.map(repo => repo.full_name));

        // Filtrar: criados por você e estrelados por você
        const filtered = myRepos.filter(repo => starredSet.has(repo.full_name));

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
    <Carousel className='rounded-xl'>
      {repos.length > 0 ? (
        repos.map(repo => (
          <div key={repo.id} className="border rounded-lg p-4 shadow-md bg-sky-300">
            <h3 className="text-lg font-bold">{repo.name}</h3>
            <p>{repo.description || 'Sem descrição'}</p>
            <p className="text-sm text-gray-500">Estrelas: {repo.stargazers_count}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Ver no GitHub
            </a>
          </div>
        ))
      ) : (
        <div>Nenhum repositório encontrado.</div>
      )}
    </Carousel>
  );
}

export default ProjectCards;
