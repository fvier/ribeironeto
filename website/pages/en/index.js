/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Nossa Luta</Button>
            <Button href="#Ideia">Ideia</Button>
            <Button href="#tmj">Faça parte</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Nossa luta',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block id="Ideia" background="dark">
        {[
          {
            content:
              'Temos como ideia a realização.... This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Ideia',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block id="Ideia" background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Luta pelos direitos do trabalhadora',
            image: `${baseUrl}img/undraw_contract_uy56.png`,
            imageAlign: 'top',
            title: 'Compromisso e Ficalização',
          },
          {
            content: 'Juntos somos mais fortes, classe unida destemida e objetivos que contemplam a todos.',
            image: `${baseUrl}img/undraw_bear_market_ania.png`,
            imageAlign: 'top',
            title: 'Crescimento coletivo',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;


      return (

        <div className="productShowcaseSection paddingBottom">
          <h2>Venha para nosso time</h2>
        <p>Se acredita em nossa missao vamos caminhar juntos!</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
          <a className="button" href={pageUrl('users.html')}>
            Time {siteConfig.title}
          </a>
          </div >
    
        </div >
      );
  };

  return(
      <div>
  <HomeSplash siteConfig={siteConfig} language={language} />
  <div className="mainContainer">
    <Features />
    <FeatureCallout />
    <LearnHow />
    <TryOut />
    <Description />
    <Showcase />
  </div>
      </div >
    );
  }
}

module.exports = Index;
