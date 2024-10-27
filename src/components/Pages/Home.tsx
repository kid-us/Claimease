import { car, logo } from "../../assets";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div className="h-[100dvh]">
      <div className="flex items-center justify-center h-full lg:px-0 px-2 lg:mx-0 mx-4">
        <div className="lg:w-[25%] w-full">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="lg:w-auto w-52" />
          </div>

          <div className="my-10 text-center">
            <div className="flex justify-center">
              <img src={car} alt="Car" className="w-72" />
            </div>
            <p className="text-2xl font-bold">Let's get Started</p>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae non voluptatum enim minus. Sdolao
            </p>
          </div>
          <div>
            <Button borderR="rounded-full" label="Get Started" path="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
