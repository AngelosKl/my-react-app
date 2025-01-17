import React, { useState, useRef } from 'react';

function MyPage() {
  const [option, setOption] = useState('about');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  function aboutF() {
    setOption('about');
  }

  function workF() {
    setOption('work');
  }

  function eduF() {
    setOption('edu');
  }

  function skillsF() {
    setOption('skills');
  }

  function otherF() {
    setOption('other');
  }

  function linkedinF() {
    window.open('https://www.linkedin.com/in/angelos-klimantiris-44b95721b/', '_blank', 'noopener,noreferrer');
  }

  function githubF() {
    window.open('https://github.com/AngelosKl', '_blank');
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setMusicPlaying(!musicPlaying);
    } else {
      console.error("Audio element is not available");
    }
  }

  return (
    <>
      <div className='top' id="top">
        <p id='topP'>Welcome to my page! &#x1F60A;</p>

        <button className='topButtons' id='aboutButton' onClick={aboutF}>About</button>
        <button className='topButtons' id='workExpButton' onClick={workF}>Work Exp</button>
        <button className='topButtons' id='eduButton' onClick={eduF}>Education</button>
        <button className='topButtons' id='skillsButton' onClick={skillsF}>Skills</button>
        <button className='topButtons' id='otherButton' onClick={otherF}>Other</button>

        <button className='musicB' id='musicB' onClick={toggleMusic}>
          <img 
            src={musicPlaying ? '/assets/musicOn.PNG' : '/assets/musicOff.PNG'}  
            alt="Music Toggle"
            style={{ width: '30px', height: '30px' }} 
          />
        </button>
        <audio ref={audioRef} style={{ display: 'none' }}>
        <source src="/assets/Yu-Gi-Oh! Lofi - Passionate Duelist.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
      </div>

      <div className='mid' id='mid'>
        {option === 'about' && (
          <div id='aboutMeDiv'>
          <h2>About Me</h2>
          <div id="aboutMeContent">
            <img src="/me.jpg" alt="Advertisement" width="150" height="200" />
            <p id='aboutmeInfo'>
              Name: Angelos Klimantiris<br />
              Age: 26<br />
              Sex: Male<br />
              Nationality: Greek<br />
              Mobile: +306947750766<br />
              Email: aklimantiris98@gmail.com<br />
              <br></br>
              I am a fresh graduate with a Master's Degree in Computer Science and Applications.
              Apart from my academic accomplishments,
              I actively contribute to two innovative startups and enjoy exploring new challenges in software development.
              Thank you for visiting my site! 
            </p>
          </div>
        </div>
        )}
        {option === 'work' && (
          <div>
            <h2>Work Experience</h2>
            <p>
              I am actively contributing to two startups:
              <br /><br />
              <strong>CoachMe</strong>: A health and wellness application designed to empower users in achieving their fitness and lifestyle goals.
               I contribute to the app's development using Flutter and Dart, focusing on building visually appealing UIs based on Figma designs.
               My work spans the entire development lifecycle, ensuring the app remains robust and aligned with its vision.
              <br /><br />
              <strong>Unnamed Startup</strong>: A mobile application that aims to create a unique experience between users and catering
               establishments, leveraging new technologies to enhance interaction and
               convenience for all audiences.
               My contributions include developing cross-platform solutions with React Native and TypeScript, 
               as well as designing scalable back-end systems using Node.js and MongoDB.
              <br /><br />
               These roles have honed my technical abilities and collaborative skills,
               showcasing my adaptability and dedication to delivering impactful software solutions.
            </p>
          </div>
        )}
        {option === 'edu' && (
          <div>
            <h2>Education</h2>
            <p>
              I hold a Master's Degree in Computer Science and Applications from the University of West Attica, Athens,
               which I completed with a grade of 7.8/10. During my studies,
                I worked on challenging projects such as an Android quiz app, an e-commerce website, and a university management system.
              <br /><br />
              Additionally, I have a Bachelor's Degree in Sports Management from the University of Peloponnese, Sparta, 
              with a grade of 7.4/10. Although my Bachelor's included some computer science courses, 
              the Master's marked a significant career shift.
            </p>
          </div>
        )}
        {option === 'skills' && (
          <div>
            <h2>Skills</h2>
            <p>
               My technical skills include: Dart, Java, JavaScript, Typescript, Node.js, Express.js, HTML, CSS, SQL, MongoDB 
               and app development with Flutter and React Native.
               I have experience with version control systems, particularly Git and GitHub,
               which I use for collaborative development, managing clean codebases and ensuring efficient workflows.
               I am proficient with IDEs like VSCode, IntelliJ IDEA and Android Studio.
              <br /><br />
               I have certifications from Microsoft Azure, including introductions to cloud services, DevOps, Git, and GitHub.
               My experience in collaborative environments has prepared me to work effectively within Agile teams.
               Additionally, I am fluent in English (C1 level) and hold a B-class driver's license.
            </p>
          </div>
        )}
        {option === 'other' && (
          <div>
            <h2>Other Interests</h2>
            <p>
              Outside of work, I enjoy collaborating on innovative software projects, 
              staying active with calisthenics, playing competitive chess,
               and engaging in coding challenges on platforms like CodeWars.
            </p>
          </div>
        )}
      </div>

      <div className='bot' id='bot'>
  <div className="left-buttons">
  <p id="visitP">Visit my:</p>
    <button className='botButtons' id='linkedinButton' onClick={linkedinF}>LinkedIn</button>
    <button className='botButtons' id='githubButton' onClick={githubF}>GitHub</button>
  </div>
  <div className="right-buttons">
    <p id="downloadP">Download in pdf my:</p>
    <div>
      <a href="/assets/Resume Angelos Klimantiris.pdf" download="Resume Angelos Klimantiris.pdf">
        <button className='botButtons' id='resumeButton'>Resume</button>
      </a>
      <a href="/assets/Cover Letter Angelos Klimantiris.pdf" download="Cover Letter Angelos Klimantiris.pdf">
        <button className='botButtons' id='coverletterButton'>Cover Letter</button>
      </a>
    </div>
  </div>
</div>

    </>
  );
}

export default MyPage;
