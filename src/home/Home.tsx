import "./Home.css";
import AnimatedContent from '../components/buttons/button-animation.tsx';
import Silk from "../components/ui/silk-background.tsx";
import TextType from "../components/ui/text-type.tsx";


function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {}
      <div className="silk-bg-wrapper">
        <Silk
          speed={5}
          scale={0.8}       
          color="#4e4eb9"
          noiseIntensity={1.0}
          rotation={0}
        />
      </div>

      {}
      <div className="relative z-10 text-type">
        <TextType
          text={["Hello, I'm Vedran.", "This Is My Portfolio!"]}
          typingSpeed={50}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
>
  <div>
    
   <button
  className="btn-glow"
  onClick={() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  About Me
</button>
  </div>
</AnimatedContent>
    </section>
  );
}

export default Home;


