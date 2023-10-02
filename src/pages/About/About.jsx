/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { profileImg } from '../../images';
import setPageTitle from '../../utils/setPageTitle';
import { CardImagesTech } from '../../components/CardImagesTech/index'
import './style/About.scss';

const TEXTS = [
  `Trabalhei por 2 anos como Analista de Infraestrutura de TI e Social Media.
  Fiz de tudo um pouco, desde suporte em TI até fotografia e cuidar das redes sociais.`,

  `Em 2023, decidi me dedicar totalmente aos estudos na Trybe, onde estou aprendendo a ser um Desenvolvedor Web Full Stack.
  E`,

  `Sou super focado nos meus estudos, carreira e em fazer a diferença na vida das pessoas.
  No meu portfólio, você vai encontrar projetos que mostram minha paixão pela tecnologia e meu comprometimento em entregar ótimos resultados. Bora trabalhar junto e causar impacto no mundo digital!`,

];

const URL_LINKEDIN = 'https://www.linkedin.com/in/caueperuque/';

export default function About() {
  useEffect(() => {
    setPageTitle('Sobre - Cauê Peruque');
  }, []);

  return (
    <section className="background-color-grey">
      <div className="container mt-5 about">
        <img
          className="img-fluid about__picture"
          src={ profileImg }
          alt="foto cauê peruque"
        />
        <div className="about__text mt-3">
          <h2>Sobre Mim</h2>
          <p>
            {TEXTS[0]}
          </p>
          <p>
            {TEXTS[1]}
          </p>
          <section className='about__cardImages'>
            <p>
              Principais tecnologias:
            </p>
              <CardImagesTech />
          </section>
          <p>
            {TEXTS[2]}
          </p>
          <a
            className="btn"
            href={ URL_LINKEDIN }
            target="_blank"
            rel="noreferrer"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
