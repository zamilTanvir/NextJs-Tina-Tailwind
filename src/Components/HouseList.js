import { useState } from "react";
import HouseRow from "./HouseRow";

const houseArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(houseArray);
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 6,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-wrap mb-2">
        <h5 className="text-right text-[themeFontColor]">
          Houses currently on the market
        </h5>
      </div>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="hover:bg-gray-100">
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(h => <HouseRow key={h.id} house={h} />)}
        </tbody>
      </table>
      <button onClick={addHouse} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
        Add
      </button>
    </>
  );
};

export default HouseList;
