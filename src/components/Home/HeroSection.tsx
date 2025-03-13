import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { navigate } from "raviger";
import video from "../../pr.mp4";
// Styled Components
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

// Video Background
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

// Dark Overlay for better contrast
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Darker for text readability */
  z-index: 0;
`;

// Content Section
const HeroContent = styled.div`
  z-index: 1;
  max-width: 800px;
  padding: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  line-height: 1.6;
  opacity: 0.9;
`;

const ExploreButton = styled.button`
  padding: 14px 32px;
  background-color: #ffcc00;
  border: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(255, 204, 0, 0.4);

  &:hover {
    background-color: #ffd633;
    transform: translateY(-3px);
    box-shadow: 0px 6px 12px rgba(255, 204, 0, 0.6);
  }
`;

const TypingEffect = () => {
  const handleExploreClick = () => {
    navigate("/events");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Title
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Connecting People Across Faiths & Interests
      </Title>
      <Description>
        Discover events that unite communities, foster interfaith dialogue, and
        create meaningful connections.
      </Description>
      <ExploreButton onClick={handleExploreClick}>
        Explore Events <FaArrowRight style={{ marginLeft: "10px" }} />
      </ExploreButton>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </BackgroundVideo>
      <Overlay />
      <HeroContent>
        <TypingEffect />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
