import axios from "axios";
import { useState } from "react";
import { GiElectric } from "react-icons/gi";
import Loader from "../loader/loader";
export default function Bill({ user }) {
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const getBill = () => {
    const date2 = new Date(date);
    console.log(
      date2.getFullYear(),
      date2.getMonth() + 1,
      `https://dbms-api.vercel.app/bills/consumer/${user}`
    );
    if (date2.getFullYear() && date2.getMonth() + 1) {
      setLoading(true);
      axios({
        method: "get",
        url: `https://dbms-api.vercel.app/bills/consumer/${user}`,
      })
        .then((response) => {
          setLoading(false);
          console.log(user);
          console.log(response);
          setData(response.data[0]);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  };
  const latestBill = () => {
    let today = new Date();
    console.log(today);
    setDate(today);
    getBill();
  };
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">View Bill</h2>
      {loading ? <Loader text="Searching for Bill" /> : ""}
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <p className="text text-lg font-medium">Pick a date</p>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={date}
            className="input-box mt-1 w-2/6 outline-none p-2 rounded"
            placeholder="Consumer Number"
          />
          <div className="flex flex-row">
            <button
              onClick={getBill}
              className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4"
            >
              Get Bill
            </button>
            <button
              onClick={latestBill}
              className="text-sm ml-4 button-off hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4"
            >
              View latest bill
            </button>
          </div>
          <div className="mt-10 ">
            {data ? (
              <>
                <div className="bill flex flex-col items-center w-full p-10">
                  <div className="flex mb-4 flex-row  items-center">
                    <GiElectric color="#000" size={35} />
                    <h1 className="text-2xl  text-gray-800 font-semibold">
                      Kerala State Electricity Board
                    </h1>
                  </div>
                  <p className="text-gray-400">
                    This calculator is intended for calculation of Electricity
                    Bill amount based on units consumed.
                  </p>
                  <div className="grid grid-cols-2 w-3/4">
                    <div className="">
                      <div className="flex flex-row  mt-5">
                        <p className="text text-lg font-medium">Consumption:</p>
                        <p className="text-gray-700 text-lg font-medium">
                          {data.current_reading}KWH
                        </p>
                      </div>{" "}
                      <div className="flex flex-row  mt-2">
                        <p className="text text-lg font-medium">Units:</p>
                        <p className="text-gray-700 text-lg font-medium">
                          {data.units / data.current_reading}
                        </p>
                      </div>
                      <div className="flex flex-row  mt-2">
                        <p className="text text-lg font-medium">Tax:</p>
                        <p className="text-gray-700 text-lg font-medium">
                          {data.tax}
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
                  <div className="bill-line flex justify-end mt-4 w-full">
                    <div className="flex flex-row p-4  mt-2">
                      <p className="text text-lg font-medium">
                        Total Payable Amount:
                      </p>
                      <p className="text-gray-700 text-lg font-medium">
                        {data.units + data.tax} Rupees
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
                  Pay Bill
                </button>
              </>
            ) : (
              <p className="">No Bills Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
