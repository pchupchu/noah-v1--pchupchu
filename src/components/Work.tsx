'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from './AnimatedText';
import WorkItem from './WorkItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const workData = [
  {
    href: '#',
    category: 'design',
    imgSrc: '/work/thumb-1.png',
    title: 'Luminex UI Kit',
  },
  {
    href: '#',
    category: 'design',
    imgSrc: '/work/thumb-2.png',
    title: 'Nebula Dashboard',
  },
  {
    href: '#',
    category: 'frontend',
    imgSrc: '/work/thumb-3.png',
    title: 'Velox App',
  },
  {
    href: '#',
    category: 'frontend',
    imgSrc: '/work/thumb-4.png',
    title: 'Quantum Portfolio',
  },
  {
    href: '#',
    category: 'frontend',
    imgSrc: '/work/thumb-5.png',
    title: 'Synergy App UI',
  },
  {
    href: '#',
    category: 'fullstack',
    imgSrc: '/work/thumb-6.png',
    title: 'Apollo Travel Platform',
  },
  {
    href: '#',
    category: 'fullstack',
    imgSrc: '/work/thumb-7.png',
    title: 'Horizon Saas Dashboard',
  },
];

const Work = () => {
  //extract unique categories from workData
  const UniqueCategories = Array.from(
    new Set(workData.map((item) => item.category))
  );

  //create tab data with 'all' category and unique categories from workData
  const tabData = [
    {
      category: 'all',
    },
    ...UniqueCategories.map((category) => ({
      category,
    })),
  ];

  //state to manage the currently selected tab
  const [tabValue, setTabValue] = useState('all');

  //number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  //filter work items based on the selected tab
  const filterWork =
    tabValue === 'all'
      ? workData.filter((item) => item.category !== 'all')
      : workData.filter((item) => item.category === tabValue);

  // handle loading more items
  const handleLoadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className='min-h-[1000px] pt-24' id='work'>
      <div className='container'>
        <Tabs className='flex w-full flex-col' defaultValue='all'>
          <div className='mb-[30px] flex flex-col items-center xl:flex-row xl:items-start xl:justify-between'>
            <AnimatedText
              text='My Latest Work'
              textStyles='h2 mb-[30px] xl:mb-0'
            />
            <TabsList className='mb-[30px] flex h-full max-w-max flex-col gap-4 md:flex-row md:gap-0'>
              {tabData.map((tab, index) => (
                <TabsTrigger
                  className='w-[120px] capitalize'
                  key={index}
                  value={tab.category}
                  onClick={() => setTabValue(tab.category)}>
                  {tab.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent className='w-full' value={tabValue}>
            <div className='grid grid-cols-1 gap-[30px] lg:grid-cols-3'>
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {visibleItems < filterWork.length && (
              <div className='mt-12 flex justify-center'>
                <button
                  className='btn btn-accent'
                  type='button'
                  onClick={handleLoadMoreItems}>
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
