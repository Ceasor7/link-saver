import RegisterForm from "@/components/RegisterForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <section className="h-screen flex items-center justify-center">
        <RegisterForm />
      </section>
    </div>
  );
};

export default page;
