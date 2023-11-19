import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { LiIcon } from './LiIcon';

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  work: string;
  adress: string;
};

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  work,
  adress,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={ref}></LiIcon>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div>
          <h3 className='capitalize font-bold text-lg sm:text-2xl'>
            {position}&nbsp;{' '}
            <a
              href={companyLink}
              className=' text-primary dark:text-primaryDark capitalize'
              target='_blank'
            >
              @{company}
            </a>
          </h3>
          <span className='font-medium text-dark/75 dark:text-light/75 text-sm sm:text-base '>
            {time} | {adress}
          </span>
          <p className='font-medium w-full text-sm sm:text-base'>{work}</p>
        </div>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className=' font-bold text-4xl md:text-8xl text-center w-full mb-16 sm:mb-32'>
        Experience
      </h2>
      <div
        ref={ref}
        className=' w-[100%] sm:w-[90%] lg:w-[75%] mx-auto relative'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-[20px] md:left-[40px] top-0 w-[2px] sm:w-[4px] h-full
           bg-dark origin-top  dark:bg-primaryDark dark:shadow-primaryDark dark:shadow-3xl  '
        ></motion.div>
        <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
          <Details
            position='Web Developer'
            company='Geeknauts'
            time='2022-2023'
            companyLink='https://geeknauts.com/pl/'
            work='I worked on web and mobile application development both in a team and independently; as part of a team, I collaborated on complex projects for various clients, and in solo roles, I managed the full spectrum of development tasks from concept to completion.'
            adress='Geeknauts'
          ></Details>
          <Details
            position='Frontend Engineer'
            company='RabeSoft'
            time='2022'
            companyLink=''
            work='I took on the role of a frontend engineer for the mobile DinnerDate app, focusing on enhancing user interface and experience. My work involved implementing interactive design elements and ensuring seamless functionality across various devices.'
            adress='RabeSoft'
          ></Details>
          <Details
            position='Frontend Engineer'
            company='VisualSoft'
            time='2022-2023'
            companyLink='https://visualsoft.com.pl/'
            work='I was the sole frontend developer for the Smartkid app, leveraging React Native for cross-platform functionality and Fastlane for streamlined deployment. My work involved building a rich user interface and integrating key features using modern tools like Firebase and Redux for robust app performance.'
            adress='VisualSoft'
          ></Details>
          <Details
            position='Full-Stack Engineer'
            company='Eternis'
            time='2022'
            companyLink='https://eternis.pl/'
            work='During the development of the Eternis website, I employed Next.js and Strapi for efficient performance and content management. My contribution also involved implementing Chakra UI to achieve a responsive and user-friendly interface.'
            adress='Eternis'
          ></Details>
        </ul>
      </div>
    </div>
  );
};
