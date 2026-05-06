const CTASection = () => {
  return (
    <section className="px-16 py-24 bg-black">

      <div className="bg-red-700 rounded-[40px] py-24 text-center">

        <h2 className="text-6xl font-bold">
          Need blood right now?
        </h2>

        <p className="text-xl mt-6 text-red-100">
          Search nearby hospitals in under 30 seconds.
        </p>

        <button className="mt-10 bg-black hover:bg-zinc-900 px-10 py-5 rounded-2xl text-xl font-semibold transition">
          Start Searching
        </button>

      </div>

    </section>
  );
};

export default CTASection;