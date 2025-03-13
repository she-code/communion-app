import { motion } from "framer-motion";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  background-color: #f4f4f4;
  padding: 50px 0;
`;

const TestimonialCard = styled(motion.div)`
  background: #fff;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 400px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This platform has been a game-changer for me. Not only does it connect me with like-minded individuals, but it also fosters an environment of mutual support and growth. I've made lasting relationships and gained valuable insights here that I wouldn’t have found anywhere else.",
    },
    {
      name: "Jane Smith",
      text: "I can honestly say this has been an amazing experience. The community is incredibly welcoming, and the opportunities for learning and collaboration are endless. The discussions are always meaningful, and I’ve gained so much from interacting with others who share my interests and passions.",
    },
    {
      name: "Samuel Ochieng",
      text: "Joining this platform has been one of the best decisions I’ve made. The space it provides for people to come together, share knowledge, and engage in discussions is unmatched. It’s not just about networking; it’s about building a community of individuals who are genuinely invested in making a difference. ",
    },
  ];

  return (
    <TestimonialsContainer>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        What Our Users Say
      </h2>
      <motion.div
        style={{ display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p>{testimonial.text}</p>
            <strong>- {testimonial.name}</strong>
          </TestimonialCard>
        ))}
      </motion.div>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
