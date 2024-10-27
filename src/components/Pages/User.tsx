import { Link } from "react-router-dom";
import { logo } from "../../assets";

interface Users {
  id: number;
  name: string;
  icon: string;
}

const users: Users[] = [
  { id: 1, icon: "bi-car-front-fill", name: "Driver" },
  { id: 2, icon: "bi-tools", name: "Garage" },
  { id: 1, icon: "bi-briefcase-fill", name: "Assessor" },
  { id: 1, icon: "bi-umbrella-fill", name: "Insurance" },
];

const User = () => {
  return (
    <div className="h-[100dvh]">
      <div className="flex items-center justify-center h-full lg:px-0 px-2 lg:mx-0 mx-4">
        <div className="lg:w-[25%] w-full">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="lg:w-auto w-52" />
          </div>

          <p className="mb-5 mt-10 text-center text-xl">
            How do you see your self?
          </p>

          {users.map((u) => (
            <Link key={u.id} to="/login">
              <div className="grid grid-cols-4 justify-items-center bg-primary text-center text-white w-full rounded-lg p-4 shadow mb-4 ps-20">
                <div>
                  <p className={`${u.icon} text-2xl text-end`}></p>
                </div>
                <div className="col-span-2 w-full">
                  <p className={`text-xl col-span- text-start`}>{u.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
