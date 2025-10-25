import "./Home.css";
import Silk from "../components/ui/silk-background.tsx";
import TextType from "../components/ui/text-type.tsx";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="silk-bg-wrapper">
        <Silk
          speed={5}
          scale={0.8}       // try adjusting this value for more coverage
          color="#4e4eb9"
          noiseIntensity={1.0}
          rotation={0}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-type">
        <TextType
          text={["Hello, I'm Vedran.", "Welcome To My Portfolio!"]}
          typingSpeed={50}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </section>
  );
}

export default Home;
