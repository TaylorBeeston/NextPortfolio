import React, { FC } from 'react';
import Header from 'slides/Header';
import DarkModeToggle from 'components/DarkModeToggle';
import Splash from 'slides/Splash';
import Skills from 'slides/Skills';
import Projects from 'slides/Projects';
import AboutMe from 'slides/AboutMe';
import Footer from 'slides/Footer';

const IndexPage: FC = () => (
  <>
    <Header
      links={[
        { display: 'Skills', location: '#skills' },
        { display: 'Projects', location: '#projects' },
        { display: 'About Me', location: '#about-me' },
      ]}
    />
    <DarkModeToggle />
    <Splash />
    <Skills />
    <Projects />
    <AboutMe />
    <Footer sky />
  </>
);

export default IndexPage;
