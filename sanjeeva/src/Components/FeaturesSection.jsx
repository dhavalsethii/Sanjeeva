function Features() {
  return (
    <section className="py-20 px-[60px] bg-white">

      <h1 className="text-center mb-[60px] text-[50px] font-bold text-black">
        Built for emergencies
      </h1>

      <div className="flex gap-[30px] flex-wrap md:flex-nowrap">

        <div className="bg-[#1A1919] p-10 rounded-[16px] w-full border border-[#3D3C3C] text-white hover:border-[#FF3B3B] transition-colors">
          <h2 className="mb-5 text-2xl font-bold">Live Stock</h2>
          <p className="text-gray-400">
            Blood availability updates in real time.
          </p>
        </div>

        <div className="bg-[#1A1919] p-10 rounded-[16px] w-full border border-[#3D3C3C] text-white hover:border-[#FF3B3B] transition-colors">
          <h2 className="mb-5 text-2xl font-bold">Nearby Search</h2>
          <p className="text-gray-400">
            Find nearby blood banks quickly.
          </p>
        </div>

        <div className="bg-[#1A1919] p-10 rounded-[16px] w-full border border-[#3D3C3C] text-white hover:border-[#FF3B3B] transition-colors">
          <h2 className="mb-5 text-2xl font-bold">Verified</h2>
          <p className="text-gray-400">
            Only verified hospitals are shown.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;