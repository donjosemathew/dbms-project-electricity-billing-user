export default function Bill() {
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">Add User Bills</h2>
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <p className="text text-lg font-medium">Consumer Number</p>
          <input
            type="text"
            className="input-box mt-1 w-2/6 outline-none p-2 rounded"
            placeholder="Consumer Number"
          />
          <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
            Get User
          </button>
          <div className="mt-10 grid gap-y-6 grid-cols-2">
            <div className="">
              <p className="text text-lg font-medium">Current Reading</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Current Reading"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Unit charge</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Per unit price"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Tax</p>
              <input
                type="text"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Tax amount"
              />
            </div>{" "}
            <div className="">
              <p className="text text-lg font-medium">Expiry Date</p>
              <input
                type="date"
                className="input-box mt-1 w-4/6 outline-none p-2 rounded"
                placeholder="Current Reading"
              />
            </div>{" "}
            <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-blue-400 dark-blue  mt-4">
              Generate Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
