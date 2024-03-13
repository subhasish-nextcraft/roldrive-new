import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  chosenTab: string;
  setChosenTab: Dispatch<SetStateAction<string>>;
  labels: string[];
};

export default function Tab({ chosenTab, setChosenTab, labels }: Props) {
  return (
    <div className="flex space-x-1 bg-pryLight max-w-max rounded-full overflow-hidden">
      {labels.map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => setChosenTab(item)}
          className={`${
            chosenTab === item && 'text-white bg-pry'
          } relative h-12 w-full min-w-36 font-medium transition text-pry bg-pryLight`}
        >
          {chosenTab === item && (
            <motion.span
              layoutId="bubble"
              className="absolute z-10 inset-0 text-white bg-pry rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="absolute whitespace-nowrap text-inherit z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{item}</span>
        </button>
      ))}
    </div>
  );
}
