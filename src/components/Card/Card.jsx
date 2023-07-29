/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import fetchGithubApi from '../../utils/fetch';
import { noImage } from '../../images';
import './style/Card.scss';

function Card({ name, description }) {
  const [image, setImage] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const MAX_LENGTH = 85;
  const URL = `https://github.com/caueperuque/${name}`;
  const URL_FETCH_IMAGE = `https://api.github.com/repos/caueperuque/${name}/contents/images/demo.png`;

  const newName = name.replace(/^trybe-project/i, '')
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());

  useEffect(() => {
    async function fetchDemo() {
      try {
        const data = await fetchGithubApi(URL_FETCH_IMAGE);
        setImage(!data.message ? data.download_url : noImage);
        setIsLoadedImage(true);
      } catch (error) {
        console.error(error);
        setImage(noImage);
        setIsLoadedImage(true);
      }
    }

    fetchDemo();
  }, [URL_FETCH_IMAGE]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const textToShow = description.length <= MAX_LENGTH ? description : showMore ? description : `${description.slice(0, MAX_LENGTH)}...`;

  return (
    <div id="card">
      {!isLoadedImage ? (
        <Loading />
      ) : (
        <>
          <img src={ image } alt={ name } />
          <div className="card-body">
            <h3>{newName}</h3>
            <p>
              {textToShow}
              {description.length > MAX_LENGTH && (
                <button className="show-more" onClick={ toggleShowMore }>
                  {showMore ? 'ver menos' : 'ver mais'}
                </button>
              )}
            </p>
            <a href={ URL } target="_blank" rel="noreferrer" className="btn mt-2">
              Visitar Repositório
            </a>
          </div>
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default memo(Card);
