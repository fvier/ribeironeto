/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Tragetoria</h1>
          </header>
          <p>
            Ribeiro Neto (Blade carro forte), nasceu em Olinda no ano de 1984. Filho de João batista (motorista) e Alvany Ribeiro (cuidadora de idosos), com uma irmã.
          
            <p>
              Ribeiro, 36 anos é estudante de Direito pela universidade unibra. casado há 10 anos com Manuella Moura, 36 anos de idade que atua como secretaria . Começou trabalhar aos 9 anos de idade, ajudante (eletricista  oficina mecânica). Ainda na adolescência, sempre praticou esportes
            </p>
                <p>
                  Aos 18 anos serviu o Exército Brasileiro na função de Armeiro, recebendo a baixa foi trabalhar como carreteiro onde logo foi convocado a trabalhar em uma empresa de transporte de valores na função de escoteiro e promovido a motorista de carro-forte profissão de alto risco.
                </p>
                  <p>
                  Ao longo de sua carreira profissional ele e sua diretoria desempenham um trabalho social nas comunidades de  Rio Doce, realizando a (Juntos somos fortes) com o sopão Solidário para as famílias carentes, assessoria jurídica, consultas médicas com um clínico geral, festa das crianças com distribuição de brinquedos e cestas básicas.
                </p> 
          </p>
        <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div >
  );
}

module.exports = Help;
