import Pic from 'util/Pic';

const points = [
  {
    header: 'What is platable?',
    text: (
      <>
        Each day, food from beloved eateries and stores is wasted due to unsold
        inventory. Platable helps you rescue
        {' '}
        <b>Surprise Bags</b>
        {' '}
        of quality
        food, saving you money while making a positive difference.
      </>
    ),
  },
  {
    header: 'Food Waste?',
    text: "Food waste contributes 8-10% of global greenhouse gas emissions. If treated as a nation, it would rank as the world's third-largest emitter, trailing only China and the US.",
  },
];

export default function Everyday() {
  return (
    <div className="">
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        Your everyday, right away
      </h2>

      <div className="mt-6 sm:mt-12 md:mt-16">
        {points.map((item, index) => (
          <div
            className={`flex flex-col items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className="relative h-[15rem] sm:h-[18rem] lg:h-[22rem] xl:h-[24rem] w-full md:w-1/2 flex-none">
              <Pic
                src={`/home/everyday${index + 1}.png`}
                objectFit="cover"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white from-75%" />
              <div className="md:hidden absolute inset-0 bg-gradient-to-l from-transparent to-white from-60%" />
              <div className="md:hidden absolute inset-0 bg-gradient-to-r from-transparent to-white from-60%" />
              <div
                className={`absolute right-0 top-0 h-full z-10 w-full ${
                  index % 2 === 0
                    ? 'md:bg-gradient-to-r'
                    : 'md:bg-gradient-to-l'
                } from-transparent to-white from-60%`}
              />
              <div className="absolute right-0 top-0 h-full z-10 w-full bg-gradient-to-t from-transparent to-white from-65%" />
            </div>
            <div className="p-6 max-w-lg">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                {item.header}
              </h3>
              <p className="text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
