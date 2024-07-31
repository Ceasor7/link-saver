import RegisterForm from '@/components/RegisterForm';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <section className="h-screen pt-10 flex items-center justify-center">
        <RegisterForm />
      </section>
    </div>
  );
};

export default page;
