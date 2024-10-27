import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import { logo } from "../../assets";

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
});

type FormData = z.infer<typeof schema>;

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Submit Email
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="bg">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="lg:w-[38%] w-full lg:px-2 px-5">
            <div className="col-span-2 mb-6">
              <img src={logo} alt="Logo" className="w-44" />
            </div>

            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-black text-2xl">Forgot your password?</h1>
              <p className="my-4 font-poppins">
                Forgot your password? No problem! Just enter the email address
                associated with your account, and we'll send you a link to reset
                your password.
              </p>

              {/* Email */}
              <div className="bg-white overflow-hidden rounded-md mb-3 grid grid-cols-12 h-14 shadow border border-gray-400">
                <div className="col-span-2">
                  <p className="bi-envelope-fill text-2xl text-center pt-3"></p>
                </div>
                <div className="col-span-10">
                  <input
                    {...register("email")}
                    type="tel"
                    name="email"
                    className={`focus:outline-none bg-white px-3 h-full placeholder:text-gray-400 text-md w-full`}
                    placeholder="Email"
                  />
                </div>
              </div>

              {errors.email && (
                <p className="text-xs mb-5 text-red-700 rounded">
                  {errors.email.message}
                </p>
              )}

              <div className="mt-8 text-center">
                <Button
                  borderR="rounded-lg"
                  label={"Reset Password"}
                  type="button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
