import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/client";

import { SigninInputs } from "@/types/Signin";

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<SigninInputs> = (data) => {
    signIn("credentials", {
      ...data,
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <>
      <h1>SIGNIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Signin;
