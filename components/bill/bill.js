import { GiElectric } from "react-icons/gi";
export default function Bill() {
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">View Bill</h2>
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <p className="text text-lg font-medium">Pick a date</p>
          <input
            type="date"
            className="input-box mt-1 w-2/6 outline-none p-2 rounded"
            placeholder="Consumer Number"
          />
          <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
            Get Bill
          </button>
          <div className="mt-10 ">
            <div className="bill flex flex-col items-center w-full p-10">
              <div className="flex mb-4 flex-row  items-center">
                <GiElectric color="#000" size={35} />
                <h1 className="text-2xl  text-gray-800 font-semibold">
                  Kerala State Electricity Board
                </h1>
              </div>
              <p className="text-gray-400">
                This calculator is intended for calculation of Electricity Bill
                amount based on units consumed.
              </p>
              <div className="grid grid-cols-2 w-3/4">
                <div className="">
                  <div className="flex flex-row  mt-5">
                    <p className="text text-lg font-medium">Consumption:</p>
                    <p className="text-gray-700 text-lg font-medium">1236KWH</p>
                  </div>{" "}
                  <div className="flex flex-row  mt-2">
                    <p className="text text-lg font-medium">Unit Charge:</p>
                    <p className="text-gray-700 text-lg font-medium">
                      12Rupees
                    </p>
                  </div>{" "}
                  <div className="flex flex-row  mt-2">
                    <p className="text text-lg font-medium">Tax:</p>
                    <p className="text-gray-700 text-lg font-medium">
                      124Rupees
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-52"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  />
                </div>
              </div>
            </div>
            <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
              Generate Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
