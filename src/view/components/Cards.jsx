// Cards.js
import { Carousel } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

function Cards() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        const data = await response.json();
        // Filtrar repositórios que têm estrelas
        const starredRepos = data.filter(repo => repo.stargazers_count > 0);
        setRepos(starredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Carousel className='rounded-xl'>
      {repos.length > 0 ? (
        repos.map(repo => (
          <div key={repo.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-bold">{repo.name}</h3>
            <p>{repo.description || 'Sem descrição'}</p>
            <p className="text-sm text-gray-500">Estrelas: {repo.stargazers_count}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Ver no GitHub
            </a>
          </div>
        ))
      ) : (
        <div>Nenhum repositório com estrelas encontrado.</div>
      )}
    </Carousel>
  );
}

export default Cards;
