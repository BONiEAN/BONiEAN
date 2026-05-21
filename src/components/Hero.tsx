import AnimatedShaderHero from './ui/animated-shader-hero';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "AI ENGINEERING CONSULTANCY",
        icons: ["⚡"]
      }}
      headline={{
        line1: "Transform Your Business with AI",
        line2: "Innovation"
      }}
      subtitle="Expert consulting in AI, Kubernetes, DevOps, and Cloud solutions. We help businesses navigate the future of technology."
      buttons={{
        primary: {
          text: "Get Started",
          onClick: () => navigate('/contact')
        },
        secondary: {
          text: "Our Services",
          onClick: () => navigate('/services')
        }
      }}
    />
  );
};
