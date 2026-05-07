import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="py-20 px-[60px] min-h-[80vh] bg-gradient-to-r from-[#2a0000] to-[#0b0b0b]">

      <p className="text-[#FF5A5A] mb-[25px] font-medium tracking-wide">
        Real-time blood availability
      </p>

      <h1 className="text-[80px] leading-[80px] font-bold text-white">
        Every drop.
        <br />
        Every second.
      </h1>

      <p className="mt-[30px] text-[#A2A0A0] w-[600px] text-xl">
        Sanjeeva connects patients with nearby blood banks and hospitals during emergencies.
      </p>

      <div className="mt-10 flex gap-5">

        <Link to="/search" className="bg-[#D92121] text-white no-underline py-3.5 px-6 rounded-[10px] cursor-pointer font-bold hover:bg-[#b91c1c] transition-colors">
          Find Blood
        </Link>

        <Link to="/emergency" className="bg-transparent text-white border border-[#B22C2C] no-underline py-3.5 px-6 rounded-[10px] cursor-pointer font-bold hover:bg-[#B22C2C] transition-colors">
          Emergency Request
        </Link>

      </div>

      <div className="flex gap-20 mt-[70px]">

        <div>
          <h2 className="text-[#FB3B3B] text-[40px] font-bold">12K+</h2>
          <p className="text-gray-400">Donors</p>
        </div>

        <div>
          <h2 className="text-[#FB3B3B] text-[40px] font-bold">340+</h2>
          <p className="text-gray-400">Hospitals</p>
        </div>

        <div>
          <h2 className="text-[#FB3B3B] text-[40px] font-bold">99%</h2>
          <p className="text-gray-400">Success</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;