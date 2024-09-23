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
              I am a fresh graduate with a Master's Degree in Computer Science and Applications and looking to start my career!
              Thank you for visiting my site! 
            </p>
          </div>
        </div>
        
        )}
        {option === 'work' && (
          <div>
            <h2>Work Experience</h2>
            <p>My work experience derives exclusivly from the University projects and my own work. The developing languages I have worked on are 
              as fallows: C, Java, HTML, CSS and Javascript(react). I have also completed projects with SQL as my Database.
              <br></br> <br></br> 
              Through my Master's, I have coopared with a colleague to complete some difficult projects,
               like an Adroid App and a Website, so I am a team player too! 
               I spend my time creating apps, learning more about coding and enhancing my skills through CodeWars!
                <br></br> <br></br> 
                I believe that I'm strong with Java and Javascript because I have the most projects on them. Some of the projects I've built include:
                the Android Quizz App, the E-commerce Website, a checklist app, a rock paper scissors app, a calculator, many smaller html-css-javascript website like a login-logout-register pages,
                 a date-time-stopwatch, a rock paper scissors website, expenses tracker, dice etc. I've also completed 40+ Katas in codewars mid difficulty.
                 <br></br> <br></br> 
                 Althoug I specialize in Android Applications, I love building websites with JS or coding in Java for backend. I generally like coding, so I dont mind the position!
                In my resume I describe in detail all the projects I've completed. 
                So feel free to download it if you want to know more!
              </p>
            
              
          </div>
        )}
        {option === 'edu' && (
          <div>
            <h2>Education</h2>
            <p>
              As I've stated before, I am a fresh graduate of a Master's Degree in Computer Science and Applications. This is a Master's Program by
              the University of West Attica, in Athens. I obtained the degree with a grade of 7.8/10. 
              <br></br><br></br>
              In my Bachelor's Degree I majored in Sports Management. The University of Peloponnese had this Bachelor's program in which 
              I graduated with Honors by the EU standards with a grade of 7.4/10 after 4 years. 
              <br></br><br></br>
              Although my Bachelor's had some Computer Science courses, the Master's was a Career Change.
            </p>
          </div>
        )}
        {option === 'skills' && (
          <div>
            <h2>Skills</h2>
            <p>
              My Digital skills include:  Java, JavaScript(React), HTML, CSS, SQL. 
              I've also used the following IDEs: VS Code, Intellij Idea, VMWare, Android Studio, XAMPP, Dev-C++.
              I have also obtained some certifications by Microsoft Azure: 
              Microsoft Azure: Introduction to Cloud Services/Cloud Services Types/Cloud Computing,
              Microsoft Azure: Introduction to DevOps,
              Microsoft Azure: Introduction to Git,
              Microsoft Azure: Introduction to GitHub.
              I also had a few hours of training by a senior developer on how to use GitHub and through the UNI projects with my colleague
              I believe we had a similar working model to Agile. 
              <br></br><br></br>
              I also have a driver's lisence type B and my English skills are on B2 level, certified by the University Of Michigan.
              Through many years of training and learning, I believe that my English skills reached on C1 level and finaly,
              I have my military services fulfilled (they are mandatory in Greece).


            </p>
          </div>
        )}
        {option === 'other' && (
          <div>
            <h2>Other Interests</h2>
            <p>
            My hobbies include hanging out with friends, travelling, working out, playing chess and some video games,
            Codewars, some front-end and some back-end coding etc.
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
