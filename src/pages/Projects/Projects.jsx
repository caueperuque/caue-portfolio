import React, { useState, useEffect, memo } from 'react';
import './style/Projects.scss';
import { Card, Loading } from '../../components';
import setPageTitle from '../../utils/setPageTitle';
import fetchGithubApi from '../../utils/fetch';

function Projects() {
  const [repos, setRepos] = useState([]);
  const urlToFetch = 'https://api.github.com/users/caueperuque/repos';

  useEffect(() => {
    async function fetchData() {
      try {
        const repositories = await fetchGithubApi(urlToFetch);
        if (repositories) {
          const filteredRepositories = repositories
            .filter((repo) => !repo.name.startsWith('caue')
            && !repo.name.startsWith('portfolio'));
          setRepos(filteredRepositories);
        }
      } catch (err) {
        console.error(err);
      }
    }

    setPageTitle('Projetos - Cauê Peruque');
    fetchData();
  }, [urlToFetch]);

  const renderCards = () => {
    if (repos.length < 1) {
      return <Loading />;
    }

    return repos.map((card) => (
      <Card
        key={ card.id }
        name={ card.name }
        description={ card.description ? card.description : 'teste' }
      />
    ));
  };

  return (
    <div className="background-color-grey projects">
      <div className="projects__title">
        <h2>Meus Projetos</h2>
      </div>
      <div className="projects__card-box">{renderCards()}</div>
    </div>
  );
}

export default memo(Projects);
