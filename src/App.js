import './App.css';
import supervisorIcon from './images/icon-supervisor.svg';
import teambuilderIcon from './images/icon-team-builder.svg';
import karmaIcon from './images/icon-karma.svg';
import calculatorIcon from './images/icon-calculator.svg';

function App() {
  return (
    <>
      <div className='header-section'>
        <h1 className='header'>Reliable, efficient delivery 
        <span> Powered by Technology</span></h1> 

        <p>Our Artificial Intelligence powered tools use millions of 
           project data points to ensure that your project is successful</p>
      </div>

      <div className='feature-section'>
        <div className='supervisor'>
          <h1>Supervisor</h1>
          <p>Monitor activity to identify project roadblocks</p>
          <img src={supervisorIcon} alt=""/>
        </div>
        <div className='tower'>
          <div className='team-builder'>
            <h1>Team Builder</h1>
            <p>Scans our talent network to create the optimal tea, for your project</p>
            <img src={teambuilderIcon} alt=""/>
          </div>
          <div className='karma'>
            <h1>Karma</h1>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={karmaIcon} alt=""/>
          </div>
        </div>
        <div className='calculator'>
          <h1>Calculator</h1>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src={calculatorIcon} alt=""/>
        </div>
      </div>

    </>
  );
}

export default App;
