// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { useEffect } from 'react'
import './output.css'
import './custom.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './data.json';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='tw-flex tw-items-center tw-flex-col tw-min-h-svh lg:tw-justify-center'>
      <div id='wrapper' className='tw-flex tw-flex-col tw-text-white lg:tw-flex-row lg:tw-rounded-[2rem] lg:tw-max-h-[530px] lg:tw-max-w-[768px] tw-overflow-hidden'>
        <ResultsHeader />
        <ResultsMain />
      </div>
      <ResultsFooter />
    </div>
  )
}

export default App

// 
function ResultsHeader() {
  return (
    <section className="lg:tw-w-3/6">
        <header id="result-header" className="tw-bg-gradient-to-b tw-bg-gradient tw-from-gradientLightSlateBlueBackground tw-to-gradientLightRoyalBlueBackground tw-rounded-b-[2rem] tw-flex tw-flex-col tw-items-center tw-justify-between tw-py-7 tw-pb-12 tw-px-10 tw-text-base tw-text-white/65 tw-font-bold lg:tw-rounded-[2rem] lg:tw-h-full lg:tw-py-12 lg:tw-px-16">
          <h1 className="tw-text-xl lg:tw-text-2xl">Your Result</h1>
          <div className="tw-w-40 tw-h-40 tw-bg-gradient-to-b tw-my-8 tw-from-gradientVioletBlueCircle tw-to-gradientPersianBlueCircle tw-rounded-full tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-h-52 lg:tw-w-52">
            <span id="score" className="tw-text-6xl tw-pb-2 tw-text-white tw-font-black">0</span>
            <span className="tw-font-medium tw-text-lg">of 100</span>
          </div>
          <div className="tw-text-center">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-white lg:tw-text-[2rem] lg:tw-mb-5">Great</h2>
            <p className="tw-text-lg tw-font-medium">You scored higher than 65% of the people who have taken these tests</p>
          </div>
        </header>
      </section>
  )
}

function ResultsMain() {
  return (
    <section className="lg:tw-w-3/6">
      <main id="result-summary" className="tw-flex tw-flex-col tw-justify-between tw-px-7 tw-py-5 tw-font-bold tw-text-neutralDarkGrayBlue md:tw-px-0 lg:tw-py-12 lg:tw-px-10 lg:tw-h-full lg:tw-w-full">
        <h2 className="tw-text-xl tw-my-4 lg:tw-mb-3 lg:tw-mt-0 lg:tw-text-2xl">Summary</h2>
        <ul className="tw-flex tw-flex-col tw-justify-around tw-h-full tw-text-lg">
          <li className="tw-py-4 tw-px-4 tw-rounded-xl tw-flex tw-justify-between tw-bg-primaryLightRed/10 tw-text-primaryLightRed tw-mb-4 lg:tw-mb-0">
            <span className="tw-flex">
              <img src="./src/assets/images/icon-reaction.svg" alt="" className="tw-mr-3 tw-w-[1.4rem]" />
              <span>Reaction</span>
            </span>
            <span className="tw-text-neutralDarkGrayBlue">
              <span className="summary-list">0</span>
              <span className="tw-opacity-50"> / 100</span>
            </span>
          </li>

          <li className="tw-py-4 tw-px-4 tw-rounded-xl tw-flex tw-justify-between tw-bg-primaryOrangeyYellow/10 tw-text-primaryOrangeyYellow tw-mb-4 lg:tw-mb-0">
            <span className="tw-flex">
              <img src="./src/assets/images/icon-memory.svg" alt="" className="tw-mr-3 tw-w-[1.4rem]" />
              <span>Memory</span>
            </span>
            <span className="tw-text-neutralDarkGrayBlue">
              <span className="summary-list">0</span>
              <span className="tw-opacity-50"> / 100</span>
            </span>
          </li>

          <li className="tw-py-4 tw-px-4 tw-rounded-xl tw-flex tw-justify-between tw-bg-primaryGreenTeal/10 tw-text-primaryGreenTeal tw-mb-4 lg:tw-mb-0">
            <span className="tw-flex">
              <img src="./src/assets/images/icon-verbal.svg" alt="" className="tw-mr-3 tw-w-[1.4rem]" />
              <span>Reaction</span>
            </span>
            <span className="tw-text-neutralDarkGrayBlue">
              <span className="summary-list">0</span>
              <span className="tw-opacity-50"> / 100</span>
            </span>
          </li>

          <li className="tw-py-4 tw-px-4 tw-rounded-xl tw-flex tw-justify-between tw-bg-primaryCobaltBlue/10 tw-text-primaryCobaltBlue tw-mb-4 lg:tw-mb-0">
            <span className="tw-flex">
              <img src="./src/assets/images/icon-visual.svg" alt="" className="tw-mr-3 tw-w-[1.4rem]"/>
              <span>Reaction</span>
            </span>
            <span className="tw-text-neutralDarkGrayBlue">
              <span className="summary-list">0</span>
              <span className="tw-opacity-50"> / 100</span>
            </span>
          </li>
        </ul>

        <button className="tw-mt-3 tw-p-4 tw-bg-black/10 tw-rounded-full tw-text-center tw-text-lg tw-bg-neutralDarkGrayBlue tw-text-white lg:tw-mt-6 hover:tw-bg-gradient-to-b tw-from-gradientLightSlateBlueBackground tw-to-gradientLightRoyalBlueBackground active:tw-opacity-90">Continue</button>
      </main>
    </section>
  )
}

function ResultsFooter() {
  return (
    <footer className="attribution lg:tw-mt-10 lg:tw-font-medium">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
      <a href="https://www.frontendmentor.io/profile/Deeokafor" target="_blank">Divine Okafor-udah</a>.
    </footer>
  )
}