import axios from "axios";
import { useState } from "react";
import Loader from "../loader/loader";

export default function Complaints({ user }) {
  let today = new Date().toLocaleDateString();
  const [data, setData] = useState({
    consumer_id: user,
    description: "",
    date: today,
    location: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const registerComplaint = () => {
    if (data.description.length < 4) {
      setError("Enter complaint description");
    } else if (data.location.length < 3) {
      setError("Enter your location");
    } else {
      setLoading(true);
      axios({
        method: "post",
        url: "https://dbms-api.vercel.app/complaint",
        data: data,
      })
        .then((e) => {
          setError("Complaint registered successfully👏");
          setLoading(false);
          setData({
            consumer_id: user,
            description: "",
            date: today,
            location: "",
          });
        })
        .catch((e) => {
          setLoading(false);
          console.log(false);
          setError("Something went wrong..");
        });
    }
  };

  console.log(user, "sjhjh");
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">Register Complaint </h2>
      {loading ? <Loader text="Registering complaint..." /> : ""}
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <div className=" grid gap-y-6 grid-cols-2">
            <div className="">
              <p className="text text-lg font-medium">Consumer Number</p>
              <input
                value={user}
                disabled
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Consumer Number"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Location</p>
              <input
                value={data.location}
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
                value={data.description}
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
            <div className=""></div>{" "}
            <div className="">
              {error ? (
                <p className="text-red-500 mt-5 text-lg ">{error}!</p>
              ) : (
                ""
              )}
              <button
                onClick={registerComplaint}
                className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4"
              >
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
