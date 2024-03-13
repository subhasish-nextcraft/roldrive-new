'use client';

import { useState } from 'react';
import Button from 'ui/Button';
import Pic from 'util/Pic';

export default function Support() {
  const [amount, setAmount] = useState(10);

  return (
    <div className="">
      <div className="bg-pry w-full px-6 py-10">
        <div className="text-3xl md:text-4xl text-center text-white font-bold">
          Support the cause and
          {' '}
          <span className="font-pacifico text-white whitespace-nowrap">
            Save a meal
          </span>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="relative h-[30rem] hidden md:block w-1/2">
          <Pic src="/home/footer.png" alt="save food" objectFit="cover" />
          <div className="absolute right-0 top-0 h-full z-10 w-full bg-gradient-to-r from-transparent to-white from-80%" />
        </div>
        <div className="bg-pryLight w-full md:w-1/2 md:bg-white px-6 py-8 flex-none">
          <div className="bg-white max-w-md w-full mx-auto md:mx-0 px-16 py-6 rounded-[2rem] shadow-[7px_10px_20px_rgba(0,0,0,0.2)]">
            <div className="flex gap-4 justify-between items-center">
              <button
                type="button"
                className="text4xl hover:scale-110 active:scale-90 transition-[scale] sm:text-5xl text-[#C9C9C9]"
                onClick={() => setAmount((prev) => {
                  if (prev <= 10) {
                    return prev;
                  }
                  return prev - 10;
                })}
              >
                &mdash;
              </button>
              <p className="text-3xl sm:text-4xl font-medium">
                Aed&nbsp;
                {amount}
              </p>
              <button
                type="button"
                className="text4xl hover:scale-110 active:scale-90 transition-[scale] sm:text-5xl text-pry"
                onClick={() => setAmount((prev) => {
                  if (prev >= 100) {
                    return prev;
                  }
                  return prev + 10;
                })}
              >
                &#43;
              </button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Mobile No."
            className="bg-white max-w-md w-full mx-auto md:mx-0 px-16 py-6 rounded-[2rem] shadow-[7px_10px_20px_rgba(0,0,0,0.2)] text-2xl sm:text-3xl block mt-6"
          />

          <Button className="bg-pry text-white font-bold max-w-md w-full mx-auto md:mx-0 px-16 py-6 rounded-[2rem] shadow-[7px_10px_20px_rgba(0,0,0,0.2)] text-2xl sm:text-3xl block mt-6 flex justify-center">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
