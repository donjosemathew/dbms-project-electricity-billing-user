import { useState } from "react";

export default function Complaints() {
  ///
  const [selected, setSelected] = useState(0);
  ///used to show full complaint
  ///
  const data = [
    {
      id: "123",
      consumer: "(485) 643-8292",
      loaction: "2721 Valley View Ln",
      complaint:
        "Lorem ipsum dolor sit amet. Sit culpa consectetur et excepturi deserunt aut accusantium sequi e",
      solved: false,
    },
    {
      id: "12233",
      consumer: "(592) 929-3750",
      loaction: "2984 Northaven Rd",
      complaint:
        "Lorem ipsum dolssectetur et excepturi deserunt aut accusantium sequi e",
      solved: true,
    },
    {
      id: "1423",
      consumer: "(905) 933-1508",
      loaction: "7765 Spring St",
      complaint:
        "Lorem ipsum dolor sit amet. Sit culpa consectetur et excepturi deserunt aut accusantium sequi e",
      solved: false,
    },
    {
      id: "1213",
      consumer: "(951) 953-4403",
      loaction: "2673 Homestead Rd",
      complaint:
        "Lorem ipsum dolor sit amet. Sit culpa consectetur et excepturi deserunt aut accusantium sequi e",
      solved: false,
    },
  ];
  return (
    <div className="p-16 ">
      <h2 className="font-bold text-2xl">Consumer Complaints </h2>
      <div className="line w-full mt-3"></div>
      <div className="p-6">
        <div className="flex flex-col">
          <div className="grid bg-white p-2 grid-cols-4">
            <div className="w-40 font-medium  text">Consumer Number</div>
            <div className="w-40 font-medium  text">Location</div>
            <div className="w-40 font-medium  text">Complaint</div>
            <div className="w-40 font-medium  text">Status</div>
          </div>
          <div className="line w-full " />
          {data.map((item, i) => {
            return (
              <div
                onClick={() => setSelected(i)}
                key={item.id}
                className="grid cursor-pointer place-content-center mt-2  p-2 grid-cols-4"
              >
                <div className="w-40 font-medium  text">{item.consumer}</div>
                <div className="w-40 font-medium  text">{item.loaction}</div>
                <div className="w-40 font-medium  text">
                  {
                    ///if selected index same as item index full complaint will be shown else trimmed content will be shown
                  }
                  {selected != i
                    ? item.complaint.substring(0, 35) + "......"
                    : item.complaint}
                </div>
                <div className="w-40 font-medium  text">
                  {item.solved ? (
                    <button className="text-sm  rounded-sm  w-40 p-2 text-white font-medium bg-green-600  ">
                      Solved
                    </button>
                  ) : (
                    <button className="text-sm hover:opacity-80 transition-all rounded-sm  w-40 p-2 text-white font-medium bg-red-600  ">
                      Mark as solved
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
