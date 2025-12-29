import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
//import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
//import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      <section className='flex primary-c pt-8 pb-8'>
        <div className='flex-col mx-auto'>
          <h1 className='text-6xl mb-6 text-white'>
            Asylum Office Grant Rate Tracker</h1>
          <h3 className='text-white'>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool
            to explore USCIS data on Asylum Office decisions</h3>
        </div>
      </section>
      <section className='graphs-section flex-col pt-10'>
        <div className='flex-col'>
          <div className='flex justify-center m-8 gap-20 text-2xl'>
            <div className='flex-col gap-3'>
              <img src={barGraph} className='h-[300px] w-[500px]'/>
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div className='flex-col gap-3'>
              <img src={pieChart} className='h-[300px] contain-content'/>
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div className='flex-col gap-3'>
              <img src={lineGraph} className='h-[300px] w-[500px]'/>
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div className='flex justify-center mx-auto gap-8'>
            <button className='bg-stone-400 px-[10px] py-[5px] 
            text-white text-base font-semibold'> View The Data</button>
            <button className='bg-stone-400 px-[10px] py-[5px] 
            text-white text-base font-semibold'>Download The Data</button>
          </div>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};
