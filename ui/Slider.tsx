'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FC, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const getSlideNum = (
  matches640: boolean,
  matches768: boolean,
  matches1024: boolean,
  matches1280: boolean,
) => {
  if (matches1280) return 4.25;
  if (matches1024) return 3.75;
  if (matches768) return 3.25;
  if (matches640) return 2.25;
  return 1.25;
};

type Props = {
  EachSlide: FC<any>;
  data: any[];
  getSliderCount?: (
    matches640: boolean,
    matches768: boolean,
    matches1024: boolean,
    matches1280: boolean,
  ) => number;
};

export default function Slider({
  EachSlide,
  data = [],
  getSliderCount,
}: Props) {
  const matches640 = useMediaQuery('(min-width: 640px)');
  const matches768 = useMediaQuery('(min-width: 768px)');
  const matches1024 = useMediaQuery('(min-width: 1024px)');
  const matches1280 = useMediaQuery('(min-width: 1280px)');

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        // eslint-disable-next-line no-nested-ternary
        perView:
          (getSliderCount
            && getSliderCount(matches640, matches768, matches1024, matches1280))
          || getSlideNum(matches640, matches768, matches1024, matches1280),
        spacing: 32,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider mt-8">
        {data.map((item) => (
          <div key={item.name} className="keen-slider__slide max-w-max">
            <EachSlide {...item} />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-6 sm:mt-8">
        {loaded && instanceRef.current && (
          <div className="flex gap-2 max-w-max mx-auto md:mx-0">
            {[...Array(instanceRef.current.track.details.slides.length)].map(
              (_, idx) => (
                <button
                  aria-label="dots"
                  type="button"
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`rounded-full size-8 p-1 ${
                    currentSlide === idx
                      ? 'bg-pry text-white'
                      : 'ring-1 ring-pry text-pry bg-white'
                  }`}
                >
                  {idx + 1}
                </button>
              ),
            )}
          </div>
        )}
        {loaded && instanceRef.current && (
          <div className="flex gap-4">
            <button
              className="p-4 rounded-full hover:scale-110 active:scale-90 transition-[scale]"
              aria-label="back"
              type="button"
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            >
              <svg
                className="text-pry size-6"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              className="p-4 rounded-full hover:scale-110 active:scale-90 transition-[scale]"
              aria-label="next"
              type="button"
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            >
              <svg
                fill="none"
                className="text-pry size-6"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
