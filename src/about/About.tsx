import './About.css';
import LightRays from '../components/ui/light-ray.tsx';


function About() {
  return (
    <section id="about">
      <div>
        <h2>About Me</h2>
        <p>I'm a passionate web developer with a love for coding and design.</p>
   
        </div>
        <div className='LightRays'>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
    </section>
  );
}

export default About;



  
