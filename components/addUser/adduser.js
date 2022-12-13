export default function Adduser() {
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">Add User </h2>
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <div className=" grid gap-y-6 grid-cols-2">
            <div className="">
              <p className="text text-lg font-medium">Username</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="User name"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Password</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="password"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Consumer Number</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Consumer Number"
              />
            </div>{" "}
            <div className=""></div>
            <div className="">
              <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
                Add User
              </button>
              <button className="text-sm button-off ml-4 hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
                View All Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
