import './Home.css';

import TextType from '../components/ui/text-type.tsx';
function Home(){
  return (
  <section id="home">
    <div className="text-type">
      <TextType 
          text={["Hello, Im Vedran.", "Welcome To My Portfolio!"]}
            typingSpeed={75}
              pauseDuration={1500}
            showCursor={true}
          cursorCharacter="|"
        />
    </div>
  </section>
  );
}

export default Home;










