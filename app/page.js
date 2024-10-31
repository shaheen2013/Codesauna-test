import Image from "next/image";

import data from "/app/data.json";

export const metadata = {
  title: "Codesauna",
  description: "codesauna",
};

export default function Home() {
  // calculate the overall percentage based on the data
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const percentage = Math.floor(totalScore / data.length);

  console.log("percentage", percentage, percentage / 400);

  return (
    <div class="bg-gray-[FFFFFF] flex items-center justify-center lg:min-h-screen">
      <div class="flex bg-white shadow-bluish overflow-hidden w-full max-w-xl lg:flex-row flex-col lg:rounded-xl">
        {/* <!-- Left Panel --> */}
        <div class="flex flex-col items-center lg:w-1/2 bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] text-white p-6 text-center lg:rounded-2xl rounded-b-[32px]">
          <h2 class="text-lg font-semibold mb-6 opacity-80 mt-2">
            Your Result
          </h2>

          {/* circle */}
          <div className="bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]  h-[150px] w-[150px] flex justify-center items-center flex-col rounded-full mb-6">
            <div class="text-6xl font-bold">{percentage || 0}</div>
            <div className="opacity-50 text-sm">of 100</div>
          </div>

          {/* result */}
          <p class="text-2xl font-semibold">Great</p>
          <p class="text-sm mt-2 opacity-60 px-6">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* <!-- Right Panel --> */}
        <div class="flex flex-col justify-between lg:w-1/2 p-6 box-border">
          {/* title */}
          <div>
            <h2 class="text-lg font-semibold mb-6">Summary</h2>
          </div>

          {/* <!-- Summary Items --> */}
          <div class="space-y-4">
            <div class="flex justify-between items-center bg-red-50 p-3 rounded-lg">
              <div class="flex items-center space-x-2 text-red-500 font-medium">
                <span>
                  <Image
                    src="/assets/icon-reaction.svg"
                    height={20}
                    width={20}
                    alt=""
                    priority
                  />
                </span>
                <span>Reaction</span>
              </div>
              <div class="font-semibold text-gray-700 text-md">
                {data?.[0]?.score} <span className="text-gray-400"> / 100</span>
              </div>
            </div>

            <div class="flex justify-between items-center bg-yellow-50 p-3 rounded-lg">
              <div class="flex items-center space-x-2 text-yellow-500 font-medium">
                <span>
                  <Image
                    src="/assets/icon-memory.svg"
                    height={20}
                    width={20}
                    alt=""
                    priority
                  />
                </span>
                <span>Memory</span>
              </div>
              <div class="font-semibold text-gray-700 text-md">
                {data?.[1]?.score} <span className="text-gray-400"> / 100</span>
              </div>
            </div>

            <div class="flex justify-between items-center bg-teal-50 p-3 rounded-lg">
              <div class="flex items-center space-x-2 text-teal-400 font-medium">
                <span>
                  <Image
                    src="/assets/icon-verbal.svg"
                    height={20}
                    width={20}
                    alt=""
                    priority
                  />
                </span>
                <span>Verbal</span>
              </div>
              <div class="font-semibold text-gray-700 text-md">
                {data?.[2]?.score} <span className="text-gray-400"> / 100</span>
              </div>
            </div>

            <div class="flex justify-between items-center bg-indigo-50 p-3 rounded-lg">
              <div class="flex items-center space-x-2 text-indigo-500 font-medium">
                <span>
                  <Image
                    src="/assets/icon-visual.svg"
                    height={20}
                    width={20}
                    alt=""
                    priority
                  />
                </span>
                <span>Visual</span>
              </div>
              <div class="font-semibold text-gray-700 text-md">
                {data?.[3]?.score} <span className="text-gray-400"> / 100</span>
              </div>
            </div>
          </div>

          {/* <!-- Continue Button --> */}
          <button class="mt-6 bg-[#303B59] active:bg-gradient-to-b active:from-[hsl(252,100%,67%)] active:to-[hsl(241,81%,54%)]  text-white py-3 rounded-full font-semibold transition duration-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
