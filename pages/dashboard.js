import Head from "next/head";
import Image from "next/image";
import { GiElectric } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { CiBarcode, CiFaceMeh, CiChat2 } from "react-icons/ci";
import Bill from "../components/bill/bill";
import { useState } from "react";
import Complaints from "../components/regcomplaints/complaints";

export default function Dashboard() {
  const [selectOption, setSelectOption] = useState(0);
  ////Used for navigation bar selection
  //0 add bill

  //1 view complaints

  const user = useSelector((state) => state.auth.consumernumber);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <nav className="w-full flex flex-row items-center justify-between p-6 rounded-b-sm bg-white">
            <div className="flex flex-row   items-center">
              <GiElectric color="#2979ff" size={35} />
              <h1 className="text-2xl primary-color font-semibold">
                Kerala State Electricity Board
              </h1>
            </div>
            <ul className="flex  flex-row items-center">
              <li
                onClick={() => {
                  setSelectOption(0);
                }}
                className="flex  cursor-pointer mr-4 text-gray-800 flex-row items-center justify-center text-sm font-bold"
              >
                <CiBarcode size={25} className="mr-2" />
                View Bill
              </li>

              <li
                onClick={() => {
                  setSelectOption(2);
                }}
                className="flex mr-4 cursor-pointer text-gray-800 flex-row items-center justify-center text-sm font-bold"
              >
                <CiChat2 size={25} className="mr-2" />
                Register Complaints
              </li>
            </ul>
          </nav>
          {selectOption == 0 ? <Bill user={user} /> : ""}
          {selectOption == 2 ? <Complaints user={user} /> : ""}
        </div>
      </main>
    </div>
  );
}
