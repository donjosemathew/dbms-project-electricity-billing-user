import { useState } from "react";

export default function Complaints() {
  let today = new Date().toLocaleDateString();
  const [data, setData] = useState({
    consumer_id: 1,
    description: "",
    date: "",
  });

  const registerComplaint = () => {};

  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">Register Complaint </h2>
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <div className=" grid gap-y-6 grid-cols-2">
            <div className="">
              <p className="text text-lg font-medium">Consumer Number</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Consumer Number"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Location</p>
              <input
                onChange={(e) => {
                  setData({
                    ...data,
                    location: e.target.value,
                  });
                }}
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Location"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Complaint</p>
              <input
                onChange={(e) => {
                  setData({
                    ...data,
                    description: e.target.value,
                  });
                }}
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Complaint"
              />
            </div>{" "}
            <div className=""></div>
            <div className="">
              <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
                Register Complaint
              </button>
              {/* <button className="text-sm button-off ml-4 hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
                View All Users
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
