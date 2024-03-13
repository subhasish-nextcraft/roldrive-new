'use client';

import { useState } from 'react';
import Tab from 'ui/Tab';
import Pic from 'util/Pic';
import { AnimatePresence, motion } from 'framer-motion';

type TabContent = {
  header: string;
  text: string;
  benefits: string[];
};

const userContent: TabContent = {
  header: 'Earn from surplus',
  text: 'Do you have surplus food? Join platable and become our partners to give your food another chance and get more customers.',
  benefits: [
    'Earn more revenue by selling the surplus',
    'Increase your reach and get new customers',
    'Become more sustainable and build a better tomorrow',
  ],
};

const businessContent: TabContent = {
  header: 'Indulge responsibly',
  text: "Crave incredible food at unbeatable prices? Now you can with Platable's surprise bags available at nearby stores.",
  benefits: [
    'Increase your reach and get new customers',
    'Increase your reach and get new customers',
    'Increase your reach and get new customers',
  ],
};

type EachTabProps = {
  isUser: boolean;
};

function EachTab({ isUser }: EachTabProps) {
  const content = isUser ? userContent : businessContent;

  return (
    <div className="mt-6 lg:mt-8 min-h-[27rem]">
      <h2 className="text-4xl sm:text-5xl font-bold">{content.header}</h2>
      <p className="text-lg max-w-lg mt-4 sm:mt-6 lg:mt-8">{content.text}</p>

      {content.benefits.map((item, index) => (
        <div className="flex items-center gap-6 lg:gap-10 mt-8 max-w-md">
          <img
            className="size-14"
            src={`/home/${isUser ? 'user-' : 'business-'}benefit${
              index + 1
            }.svg`}
            alt=""
          />
          <p className="text-lg">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function Surplus() {
  const [chosenTab, setChosenTab] = useState<string>('User');

  return (
    <div className="relative w-full pt-10 lg:pt-20 flex gap-8">
      <div className="relative hidden lg:block lg:w-1/2 h-[26rem] sm:h-[28rem] xl:h-[40rem]">
        <Pic src="/home/surplus.png" alt="" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white from-75%" />
        <div className="absolute right-0 top-0 h-full z-10 w-full bg-gradient-to-r from-transparent to-white from-60%" />
        <div className="absolute right-0 top-0 h-full z-10 w-full bg-gradient-to-t from-transparent to-white from-65%" />
      </div>

      <div className="w-full lg:w-1/2 max-w-max mx-auto lg:mx-0 px-6">
        <Tab
          labels={['User', 'business']}
          chosenTab={chosenTab}
          setChosenTab={setChosenTab}
        />

        <AnimatePresence mode="popLayout">
          {chosenTab === 'User' && (
            <motion.div
              className=""
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: 'easeInOut',
              }}
              exit={{
                opacity: 0,
              }}
            >
              <EachTab isUser />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {chosenTab !== 'User' && (
            <motion.div
              className=""
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: 'easeInOut',
              }}
              exit={{
                opacity: 0,
              }}
            >
              <EachTab isUser={false} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
