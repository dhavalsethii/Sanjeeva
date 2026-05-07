function Features() {
  return (
    <section className="py-20 px-[60px] bg-white">

      <h1 className="text-center mb-[60px] text-[50px] font-bold text-black">
        Built for emergencies
      </h1>

      <div className="flex gap-[30px] flex-wrap md:flex-nowrap">

        <div className="bg-[#e83838] p-10 rounded-[24px] w-full border border-red-400/30 text-white hover:border-white transition-all hover:scale-[1.02]">
          <h2 className="mb-5 text-2xl font-bold">Live Stock</h2>
          <p className="text-red-50/80 leading-relaxed">
            Blood availability updates in real time.
          </p>
        </div>

        <div className="bg-[#e83838] p-10 rounded-[24px] w-full border border-red-400/30 text-white hover:border-white transition-all hover:scale-[1.02]">
          <h2 className="mb-5 text-2xl font-bold">Nearby Search</h2>
          <p className="text-red-50/80 leading-relaxed">
            Find nearby blood banks quickly.
          </p>
        </div>

        <div className="bg-[#e83838] p-10 rounded-[24px] w-full border border-red-400/30 text-white hover:border-white transition-all hover:scale-[1.02]">
          <h2 className="mb-5 text-2xl font-bold">Verified</h2>
          <p className="text-red-50/80 leading-relaxed">
            Only verified hospitals are shown.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;