import { garage } from "../../../assets";

interface Garages {
  id: number;
  name: string;
  img: string;
}

const garages: Garages[] = [
  { id: 1, name: "Repair It", img: garage },
  { id: 2, name: "Repair It", img: garage },
  { id: 3, name: "Repair It", img: garage },
  { id: 4, name: "Repair It", img: garage },
];

const Garage = () => {
  return (
    <>
      <p className="my-5 text-xl">List of Garages</p>
      {garages.map((g) => (
        <div className="grid grid-cols-2 shadow bg-secondary mb-4 p-5 rounded-lg">
          <div>
            <img src={g.img} alt="Img" className="w-14" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Garage Name</p>
            <p className="text-xl">{g.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Garage;
