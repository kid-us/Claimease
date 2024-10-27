import { logo } from "../../assets";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const schema = z.object({
  password: z.string().min(4, {
    message: "Password must be at least than 4 chars.",
  }),
  email: z.string().email({ message: "Email address required" }),
  phone: z.string().min(10, { message: "Phone number required." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least than 3 chars." })
    .regex(/^[A-Za-z0-9 ]+$/, {
      message: "Username can only contain letters, numbers, and spaces.",
    }),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    if (data.password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }
    setConfirmPasswordError(false);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-[100dvh]">
      <div className="lg:grid grid-cols-2 lg:w-[80%] w-full px-2 pt-20">
        <div className="col-span-2 mb-6 lg:ms-0 ms-5">
          <img src={logo} alt="Logo" className="w-44" />
        </div>

        <form
          className="lg:bg-white lg:p-10 pb-10 px-6 rounded-r-xl overflow-hidden"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-2xl font-bold mb-5">Sign In</p>

          {/* Username */}
          <div className="lg:bg-primary bg-white overflow-hidden rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-400">
            <div className="col-span-2">
              <p className="bi-person-fill text-2xl text-center pt-3"></p>
            </div>
            <div className="col-span-10">
              <input
                {...register("username")}
                type="text"
                name="username"
                className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full pe-3`}
                placeholder="Username"
              />
            </div>
          </div>
          {errors.username && (
            <p className="text-xs text-red-700 rounded mb-2">
              {errors.username.message}
            </p>
          )}

          {/* Email */}
          <div className="lg:bg-primary bg-white overflow-hidden rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-400">
            <div className="col-span-2">
              <p className="bi-envelope-fill text-2xl text-center pt-3"></p>
            </div>
            <div className="col-span-10">
              <input
                {...register("email")}
                type="email"
                name="email"
                className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full pe-3`}
                placeholder="Email"
              />
            </div>
          </div>
          {errors.email && (
            <p className="text-xs text-red-700 rounded mb-2">
              {errors.email.message}
            </p>
          )}

          {/* Phone */}
          <div className="lg:bg-primary bg-white overflow-hidden rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-400">
            <div className="col-span-2">
              <p className="bi-telephone-fill text-2xl text-center pt-3"></p>
            </div>
            <div className="col-span-10">
              <input
                {...register("phone")}
                type="tel"
                name="phone"
                className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full`}
                placeholder="Phone"
              />
            </div>
          </div>
          {errors.phone && (
            <p className="text-xs text-red-700 rounded mb-2">
              {errors.phone.message}
            </p>
          )}

          {/* Password */}
          <div className="lg:bg-primary bg-white overflow-hidden rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-400">
            <div className="col-span-2">
              <p className="bi-lock-fill text-2xl text-center pt-3"></p>
            </div>
            <div className="col-span-8">
              <input
                {...register("password")}
                type={!passwordType ? "text" : "password"}
                name="password"
                className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full pe-3`}
                placeholder="Password"
              />
            </div>
            <div
              onClick={() => setPasswordType(!passwordType)}
              className="col-span-2 cursor-pointer pt-2"
            >
              <p
                className={` ${
                  passwordType ? "bi-eye-slash-fill" : "bi-eye-fill"
                } text-2xl pt-1 text-center`}
              ></p>
            </div>
          </div>

          {errors.password && (
            <p className="text-xs text-red-700 rounded mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Confirm Password */}
          <div className="lg:bg-primary bg-white rounded-md mb-2 grid grid-cols-12 h-14 shadow border border-gray-400">
            <div className="col-span-2">
              <p className="bi-lock-fill text-2xl text-center pt-3"></p>
            </div>
            <div className="col-span-10">
              <input
                type="password"
                name="password"
                className={`focus:outline-none px-3 lg:bg-primary bg-white h-full placeholder:text-gray-500 text-md w-full pe-3`}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              />
            </div>
          </div>

          {confirmPasswordError && (
            <p className="text-xs text-red-700 rounded mb-2">
              Password not match.
            </p>
          )}

          <div className="mt-8 text-center">
            <Button label="Sign In" type={"button"} borderR={"rounded-lg"} />
          </div>

          <p className="mt-5 text-sm font-poppins">
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-600 font-poppins">
              Sign Up
            </Link>
          </p>

          <p className="text-xs mt-5 text-gray-600">
            By clicking the Sign In button below, you agree to the our terms of
            service.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
