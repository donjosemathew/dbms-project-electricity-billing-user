import Head from "next/head";
import Image from "next/image";
import { GiElectric } from "react-icons/gi";
import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "../components/loader/loader";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../auth/authSlice";
export default function Home() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [authenticating, setAuthenticating] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const login = () => {
    if (data.username.length == 0) {
      setError("Enter username");
    } else if (data.password.length == 0) {
      setError("Enter password");
    } else {
      setError("");
      setAuthenticating(true);
      axios({
        method: "post",
        url: `https://dbms-api.vercel.app/users/login`,
        data: data,
      })
        .then((e) => {
          if (e.data[0]) {
            dispatch(authenticate(e.data[0].consumer_id));
            router.push("/dashboard");
          } else {
            setError("Something went wrong!");
          }
          console.log(e);
          setAuthenticating(false);
        })
        .catch((e) => {
          setAuthenticating(false);
          console.log(e);
        });
    }
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex p-20 flex-col items-center justify-center">
          {" "}
          {authenticating ? <Loader text="Authenticating...." /> : ""}
          <div className="flex mb-8 flex-row  items-center">
            <GiElectric color="#2979ff" size={35} />
            <h1 className="text-3xl primary-color font-semibold">
              Kerala State Electricity Board
            </h1>
          </div>
          <div className="box p-10 w-2/6 flex flex-col  items-center font-white  bg-white rounded-md">
            <h2 className=" text-3xl text-gray-800 font-bold">User Login</h2>
            <div className="flex mt-4  w-full flex-col">
              <p className="text text-lg font-medium">User Name</p>
              <input
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                type="text"
                className="input-box mt-1  outline-none p-2 rounded-sm"
                placeholder="Username"
              />
            </div>
            <div className="flex mt-4  w-full flex-col">
              <p className="text text-lg font-medium">Password</p>
              <input
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                type="password"
                className="input-box mt-1 mb-4 outline-none p-2 rounded-sm"
                placeholder="Username"
              />
            </div>
            {error ? (
              <p className="text-red-500 mt-5 text-lg ">{error}!</p>
            ) : (
              ""
            )}
            <button
              onClick={login}
              className="text-xl rounded-sm p-2 text-white font-medium bg-blue-400 dark-blue w-full mt-1"
            >
              Login Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
