import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Button from "../Button/Button";

const schema = z.object({
  password: z.string().min(4, {
    message: "Password must be at least than 4 chars.",
  }),
  username: z
    .string()
    .min(3, { message: "Username must be at least than 3 chars." })
    .regex(/^[A-Za-z0-9 ]+$/, {
      message: "Username can only contain letters, numbers, and spaces.",
    }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="bg">
      <div className="container mx-auto flex justify-center items-center h-[100dvh] w-full">
        <div className="lg:grid grid-cols-2 lg:w-[80%] w-full lg:px-2 px-2 lg:mt-10">
          <div className="col-span-2 mb-6 lg:ms-0 ms-5">
            <img src={logo} alt="Logo" className="w-44" />
          </div>

          <form
            className="lg:bg-white lg:p-10 pb-10 px-6 rounded-r-xl overflow-hidden"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-2xl font-bold mb-10">Sign up</p>

            {/* Username */}
            <div className="lg:bg-primary bg-white rounded-md overflow-hidden mb-2 grid grid-cols-12 h-14 shadow border border-gray-300">
              <div className="col-span-2">
                <p className="bi-person-fill text-2xl text-center pt-3"></p>
              </div>
              <div className="col-span-10 w-full">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  className={`focus:outline-none px-3 lg:bg-primary md:bg-white bg-white h-full placeholder:text-gray-500 text-md w-full`}
                  placeholder="Username"
                />
              </div>
            </div>
            {errors.username && (
              <p className="text-xs text-red-700 rounded mb-2">
                {errors.username.message}
              </p>
            )}

            {/* Password */}
            <div className="lg:bg-primary bg-white rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-300">
              <div className="col-span-2">
                <p className="bi-lock-fill text-2xl text-center pt-3"></p>
              </div>
              <div className="col-span-8 border-r w-full">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full`}
                  placeholder="Password"
                />
              </div>
              <div
                onClick={() => setPasswordType(!passwordType)}
                className="col-span-2 cursor-pointer pt-3"
              >
                <p
                  className={` ${
                    passwordType ? "bi-eye-slash-fill" : "bi-eye-fill"
                  } text-xl pt-1 text-center`}
                ></p>
              </div>
            </div>

            {errors.password && (
              <p className="text-xs text-red-700 rounded mb-2">
                {errors.password.message}
              </p>
            )}

            <p className="text-sm text-end text-white">
              <Link to="/request" className="font-poppins text-blue-600">
                Forgot Password?
              </Link>
            </p>

            <div className="mt-8 text-center">
              <Button borderR="rounded-lg" type="button" label="Sign In" />
            </div>

            <p className="mt-5 text-sm font-poppins">
              Don't have an Account?{" "}
              <Link to="/register" className="text-blue-600 font-poppins">
                Sign In
              </Link>
            </p>
            <p className="text-xs mt-5 text-gray-600">
              By clicking the Sign In button below, you agree to the our terms
              of service and acknowledge the{" "}
              <Link to="/privacy-policy" className="text-blue-600 font-bold">
                Privacy Policy.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
