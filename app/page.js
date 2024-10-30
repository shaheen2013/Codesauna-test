export default function Home() {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="flex bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
        {/* <!-- Left Panel --> */}
        <div class="flex flex-col items-center justify-center w-1/2 bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] text-white p-8 text-center rounded-2xl">
          <h2 class="text-lg font-semibold mb-6 opacity-80">Your Result</h2>

          {/* circle */}
          <div className="bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]  h-36 w-36 flex justify-center items-center flex-col rounded-full mb-6">
            <div class="text-6xl font-bold">76</div>
            <div className="opacity-50 text-sm">of 100</div>
          </div>

          {/* result */}
          <p class="text-2xl font-semibold">Great</p>
          <p class="text-sm mt-2 opacity-60 px-8">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* <!-- Right Panel --> */}
        <div class="flex flex-col justify-between w-1/2 p-10">
          {/* <!-- Summary Items --> */}
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b pb-3">
              <div class="flex items-center space-x-2 text-red-500 font-medium">
                <span>⚡</span>
                <span>Reaction</span>
              </div>
              <div class="font-semibold text-gray-700">80 / 100</div>
            </div>
            <div class="flex justify-between items-center border-b pb-3">
              <div class="flex items-center space-x-2 text-yellow-400 font-medium">
                <span>🧠</span>
                <span>Memory</span>
              </div>
              <div class="font-semibold text-gray-700">92 / 100</div>
            </div>
            <div class="flex justify-between items-center border-b pb-3">
              <div class="flex items-center space-x-2 text-green-500 font-medium">
                <span>💬</span>
                <span>Verbal</span>
              </div>
              <div class="font-semibold text-gray-700">61 / 100</div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2 text-blue-500 font-medium">
                <span>👁️</span>
                <span>Visual</span>
              </div>
              <div class="font-semibold text-gray-700">72 / 100</div>
            </div>
          </div>

          {/* <!-- Continue Button --> */}
          <button class="mt-6 bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
