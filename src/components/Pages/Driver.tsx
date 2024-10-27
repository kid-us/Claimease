import { useState } from "react";
import { user } from "../../assets";
import Claim from "./Driver/Claim";
import Garage from "./Driver/Garage";

interface DriverTodos {
  id: number;
  icon: string;
  name: string;
}

const driverTodo: DriverTodos[] = [
  { id: 1, name: "Claim", icon: "bi-card-heading" },
  { id: 2, name: "Garage", icon: "bi-tools" },
];

const Driver = () => {
  const [active, setActive] = useState<string>("Claim");

  return (
    <div className="container mx-auto">
      {/* Chat */}
      <button className="fixed z-50 bottom-5 right-4 bi-chat-right-text-fill bg-primary text-white w-10 h-10 rounded-full shadow"></button>

      <div className="bg-secondary shadow rounded-t rounded-[50px] flex justify-between p-6">
        <div>
          <img
            src={user}
            alt="User"
            className="rounded-full w-28 h-28 object-cover"
          />
          <p className="text-2xl mt-4 font-semibold">Hi, Lorem Ipsum</p>
          <p className="mb-4">Welcome Back</p>
        </div>
        <div>
          <div className="flex gap-x-5">
            <div className="relative">
              <button className="bi-bell text-2xl"></button>
              <p className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500"></p>
            </div>
            <button className="bi-box-arrow-right text-2xl"></button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="py-5 px-5 mt-3">
        <div className="flex gap-x-4 mb-4">
          {driverTodo.map((b) => (
            <button
              key={b.id}
              onClick={() => setActive(b.name)}
              className={`${b.icon} ${
                active === b.name
                  ? "bg-white border border-gray-600 text-black shadow shadow-primary"
                  : "bg-primary text-white"
              } rounded-full p-2 w-full`}
            >
              <span className="mx-2"></span>
              {b.name}
            </button>
          ))}
        </div>

        {/*  */}
        {active === "Claim" && <Claim />}
        {active === "Garage" && <Garage />}
      </div>
    </div>
  );
};

export default Driver;
