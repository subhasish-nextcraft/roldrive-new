'use client';

import Slider from 'ui/Slider';
import Pic from 'util/Pic';

const slideData = [
  {
    header: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sit amet.',
  },
  { header: 'Hello Subhasish', text: 'bla bla' },
  { header: 'hiiiii ^_^', text: 'dfhidsfh isduhf iusdf' },
];

type EachSlideProps = {
  header: string;
  text: string;
};

function EachSlide({ header, text }: EachSlideProps) {
  return (
    <div className="max-w-max mx-auto">
      <h3 className="text-pry text-3xl sm:text-4xl font-bold mb-4">{header}</h3>
      <p className="max-w-xs">{text}</p>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 px-6 justify-center items-center max-w-3xl mx-auto">
      <div className="h-[35rem] w-full md:w-1/2">
        <Pic src="/home/mobile.png" alt="mobile" />
      </div>
      <div className="w-full md:w-1/2">
        <Slider
          EachSlide={EachSlide}
          data={slideData}
          getSliderCount={() => 1}
        />
      </div>
    </div>
  );
}
