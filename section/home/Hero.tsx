import Pic from 'util/Pic';

export default function Hero() {
  return (
    <div className="pt-[4.5rem] w-full">
      <div className="relative">
        <div className="h-[26rem] sm:h-[28rem] xl:h-[40rem] w-full">
          <Pic src="/home/hero.png" alt="" objectFit="cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white from-75%" />
      </div>

      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-5xl sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold absolute top-1/3 md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-black">SAVE</h1>
        <h1 className="text-pry">FOOD</h1>
      </div>

      <div className="-mt-8 z-10 absolute bottom-[40%] sm:bottom-[35%] xl:bottom-[20%] font-bold text-xl w-full max-w-[18rem] text-center left-1/2 -translate-x-1/2 leading-7">
        Get the app to explore restaurants in your local area
      </div>
    </div>
  );
}
