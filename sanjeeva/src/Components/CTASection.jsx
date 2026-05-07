const CTASection = () => {
  return (
    <section className="px-16 py-24 bg-black">

      <div className="bg-red-600 rounded-[48px] py-24 text-center text-white px-10 shadow-2xl">

        <h2 className="text-6xl font-black tracking-tight">
          Need blood right now?
        </h2>

        <p className="text-xl mt-6 text-red-100 max-w-xl mx-auto font-medium">
          Search nearby hospitals and verified donors in under 30 seconds.
        </p>

        <button className="mt-12 bg-white text-red-600 hover:bg-red-50 px-12 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
          Start Searching
        </button>

      </div>

    </section>
  );
};

export default CTASection;