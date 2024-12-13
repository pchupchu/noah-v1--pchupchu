'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';

import Card from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const journeyData = [
  {
    type: 'experience',
    company: 'Odeao Labs',
    logoSrc: '/journey/experience/logo-1.svg',
    position: 'Web Developer',
    duration: 'Jul 2021 - Present',
    description:
      'Built websites and web apps using Next.js, Tailwind CSS and JavaScript. Worked on scalable, user-friendly solutions.',
  },
  {
    type: 'experience',
    company: 'Stack3d Lab',
    logoSrc: '/journey/experience/logo-2.svg',
    position: 'Frontend Developer',
    duration: 'Mar 2019 - Jun 2021',
    description:
      'Developed responsive websites with HTML, CSS and JavaScript. Ensured seamless user experience.',
  },
  {
    type: 'experience',
    company: 'Magnolia',
    logoSrc: '/journey/experience/logo-3.svg',
    position: 'UX/UI Developer',
    duration: 'Jan 2017 - Feb 2019',
    description:
      'Designes web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs.',
  },
  {
    type: 'experience',
    company: 'Warpspeed Inc.',
    logoSrc: '/journey/experience/logo-4.svg',
    position: 'Full Stack Developer',
    duration: 'Aug 2015 - Dec 2016',
    description:
      'Developed full-stack solutions using React and Node.js. Integrated front-end and back-end technologies.',
  },

  {
    type: 'education',
    institution: 'Udemy',
    logoSrc: '/journey/education/logo-1.svg',
    qualification: 'Web Development Bootcamp',
    duration: 'Jan 2020 - Apr 2020',
    description:
      'Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.',
  },

  {
    type: 'education',
    institution: 'CodeAcademy Bootcamp',
    logoSrc: '/journey/education/logo-2.svg',
    qualification: 'Full Stack Dev Cert',
    duration: 'Jan 2020 - May 2020',
    description:
      'Gained experience in frontend and backend technologies, including React, Node.js and databases.',
  },
  {
    type: 'education',
    institution: 'Design Institute',
    logoSrc: '/journey/education/institution.svg',
    qualification: 'UI/UX Diploma',
    duration: 'Aug 2018 - Dec 2018',
    description:
      'Studied design principles of user interface and user experience design. Developed skills in prototyping, wireframing and usability testing.',
  },
  {
    type: 'education',
    institution: 'Business School',
    logoSrc: '/journey/education/institution.svg',
    qualification: 'Project Management Cert',
    duration: 'Mar 2021 - Jun 2021',
    description:
      'Completed certification in project management, focusing on Agile methodologies and effective team collaboration.',
  },

  {
    type: 'skill',
    name: 'HTML',
    icon: <FaHtml5 />,
    duration: 'Learned in 2015',
    description:
      'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
  },
  {
    type: 'skill',
    name: 'CSS',
    icon: <FaCss3Alt />,
    duration: 'Learned in 2015',
    description:
      'Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.',
  },
  {
    type: 'skill',
    name: 'Javascript',
    icon: <FaJs />,
    duration: 'Learned in 2016',
    description:
      'Implemented Javascript for interactivity, enhancing user engagement on websites through dinamic content and features.',
  },
  {
    type: 'skill',
    name: 'React.js',
    icon: <FaReact />,
    duration: 'Learned in 2018',
    description:
      'Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experience and effeciency.',
  },
  {
    type: 'skill',
    name: 'WordPress',
    icon: <FaWordpress />,
    duration: 'Learned in 2020',
    description:
      'Developed dynamic websites with WordPress, simplifying content management processes while ensuring scalability and performance.',
  },
  {
    type: 'skill',
    name: 'Figma',
    icon: <FaFigma />,
    duration: 'Learned in 2018',
    description:
      'Designed user interfaces in Figma, facilitating collaboration and rapid prototyping to meet user needs and project goals.',
  },
];

const Cards = () => {
  return (
    <Tabs
      className='flex w-full flex-col items-center'
      defaultValue='experience'>
      <TabsList className='mb-[30px]'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
        <TabsTrigger value='skill'>My Skills</TabsTrigger>
      </TabsList>
      <TabsContent
        className='min-h-screen w-full overflow-visible'
        value='experience'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            {journeyData
              .filter((item) => item.type === 'experience')
              .map((card, index) => {
                return (
                  <div
                    className='sticky top-12 h-[300px] w-full overflow-hidden bg-white'
                    key={index}>
                    <Card {...card} />
                  </div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent className='w-full' value='education'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            {journeyData
              .filter((item) => item.type === 'education')
              .map((card, index) => {
                return (
                  <div
                    className='sticky top-12 h-[300px] w-full overflow-hidden bg-white'
                    key={index}>
                    <Card {...card} />
                  </div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent className='w-full' value='skill'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            {journeyData
              .filter((item) => item.type === 'skill')
              .map((card, index) => {
                return (
                  <div
                    className='sticky top-12 h-[300px] w-full overflow-hidden bg-white'
                    key={index}>
                    <Card {...card} />
                  </div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
};

export default Cards;
