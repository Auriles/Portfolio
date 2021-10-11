import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import ClientProjects from '../components/ClientProjects/ClientProjects';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import TimelinePro from '../components/TimeLine/TimeLinePro';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <ClientProjects />
      <Projects />
      <Technologies />
      <TimelinePro />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
