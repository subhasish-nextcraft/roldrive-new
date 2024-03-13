'use client';

import {
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useState,
  MouseEvent,
} from 'react';

import { motion } from 'framer-motion';
import Spinner from './Spinner';

type Props = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  submit?: boolean;
  isLoading?: boolean;
  white?: boolean;
  cta?: boolean;
};

const Button = forwardRef<HTMLElement | undefined, Props>(
  (
    {
      children,
      className,
      white,
      cta,
      disabled,
      onClick = () => {},
      submit,
      isLoading = false,
    },
    ref,
  ) => {
    const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

    useEffect(() => {
      setShouldShowSpinner(isLoading);
      return () => setShouldShowSpinner(false);
    }, [isLoading]);

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
      if (shouldShowSpinner) return;
      setShouldShowSpinner(true);
      await onClick(event);
      setShouldShowSpinner(false);
    };

    return (
      <motion.button
        {...(!disabled && {
          whileHover: {
            scale: 1.05,
          },
        })}
        {...(!disabled && {
          whileTap: {
            scale: 0.95,
          },
        })}
        ref={ref as Ref<HTMLButtonElement>}
        layout
        className={`cursor-pointer ${
          white ? 'bg-[#FDE8E1] text-[#223544]' : 'bg-pry text-white'
        } ${
          cta
            ? 'px-10 py-3 rounded-2xl font-bold text-lg'
            : 'px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg active:shadow-inner'
        } ${className}`}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        onClick={handleClick}
        disabled={disabled}
        type={submit ? 'submit' : 'button'}
      >
        <div className="flex gap-2 items-center text-inherit">
          {shouldShowSpinner && <Spinner clear={white} />}
          {children}
        </div>
      </motion.button>
    );
  },
);

export default Button;
