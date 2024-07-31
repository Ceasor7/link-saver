import AddLink from '@/components/AddLink';

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="flex items-center justify-center">
        <AddLink />
      </section>
    </main>
  );
};

export default page;
