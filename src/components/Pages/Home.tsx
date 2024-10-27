import { Link } from "react-router-dom";
import { car, logo } from "../../assets";

const Home = () => {
  return (
    <div className="h-[100dvh] bg-white">
      <div className="flex items-center justify-center h-full lg:px-0 px-2 lg:mx-0 mx-4">
        <div className="lg:w-[25%] w-full">
          <div className="flex ">
            <img src={logo} alt="Logo" className="lg:w-auto w-52" />
          </div>

          <div className="my-10 text-center">
            <div className="flex justify-center">
              <img src={car} alt="Car" className="w-72" />
            </div>
            <p className="text-2xl font-bold">Let's get stated</p>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae non voluptatum enim minus.
            </p>
          </div>
          <Link to="/">
            <p className="bg-bg-primary text-center text-white w-full rounded-full p-4 shadow">
              Get Started
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
