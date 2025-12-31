import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
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
          <div className='flex justify-center m-10 gap-20 text-2xl'>
            <div className='flex-col gap-3'>
              <img src={barGraph} className='h-[300px] w-[500px]'/>
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div className='flex-col gap-3'>
              <img src={pieChart} className='h-[300px]'/>
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div className='flex-col gap-3'>
              <img src={lineGraph} className='h-[300px] w-[500px]'/>
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div className='flex justify-center mx-auto gap-10'>
            <button className='bg-stone-400 px-[15px] py-[10px] 
            text-white text-base font-semibold'> View The Data</button>
            <button className='bg-stone-400 px-[15px] py-[10px] 
            text-white text-base font-semibold'>Download The Data</button>
          </div>
        </div>
      </section>
      <section className='hrf-statement-section flex'>
        <div className='flex-1 place-content-center p-20'>
          <img src={paperStack} alt='Human Rights First' 
          className='stack-img rounded-2xl h-[70%] w-[100%]'/>
        </div>
        <div className='flex-1 place-content-center p-20'>
          <p className='text-lg'>
          Human Rights First has created a search tool 
          to give you a user-friendly way to explore a data set 
          of asylum decisions between FY 2016 and May 2021 by the
          USCIS Asylum Office, which we received through a Freedom
          of Information Act request. You can search for information
          on asylum grant rates by year, nationality, and asylum office,
          visualize the data with charts and heat maps, and download 
          the data set.
          </p>
        </div>
      </section>
      <section className='insights-section flex flex-col gap-16'>
        <div className='header'>
          <h3 className='text-5xl'>Systemic Disparity Insights</h3>
        </div>
        <div className='flex justify-between text-4xl m-12 gap-20'>
          <div className='flex flex-col w-[33%] h-[200px] gap-12'>
            <div className='header'>
              <h3 className='text 5xl'>36%</h3>
            </div>
            <div className='text'>
              <p className='text-lg'>
              By the end of the Trump administration, 
              the average asylum office grant rate had 
              fallen 36% from an average of 44 percent in 
              fiscal year 2016 to 28 percent in fiscal year 20202.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-[33%] h-[200px] gap-12'>
            <div className='header'>
              <h3 className='text 5xl'>5%</h3>
            </div>
            <div className='text'>
              <p className='text-lg'>
              The New York asylum office grant rate 
              dropped to 5 percent in fiscal year 2020.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-[33%] h-[200px] gap-12'>
            <div className='header'>
              <h3 className='text 5xl'>6x Lower</h3>
            </div>
            <div className='text'>
              <p className='text-lg'>
              Between fiscal year 2017 and 2020, the New York
              asylum office's average grant rate was 6 times 
              lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='read-more section'>
        <button className='bg-stone-400 px-[15px] py-[10px] 
            text-white text-base font-semibold'>Read More</button>
      </section>
      <section className='back-to-top-section m-10 p-8'>
        <button className='text-lg'>
          Back To Top ^
        </button>
      </section>
    </div>
  );
};
