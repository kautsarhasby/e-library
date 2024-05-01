export const Landingpage = () => {
  return (
    <main className="w-full h-[70vh] mb-[30vh] ">
      <div className="bg-[#72160a]  w-full h-full flex justify-center items-center p-4">
        <section className="flex gap-10 ">
          <div className="flex flex-col items-center justify-center gap-y-10">
            <div className="text-white flex flex-col items-start">
              <span className="text-5xl font-serif font-medium">
                Welcome to FireBookly!
              </span>
              <p className="font-semibold text-xl">
                Perpustakaan dan Toko buku dengan Koleksi terbesar.
              </p>
              <p className="font-semibold text-xl">
                Baca dimanapun dan kapanpun.
              </p>
            </div>
            <div className="">
              <button className="font-medium  font-serif text-2xl text-white relative after:content-[''] after:absolute after:h-[2px] after:bg-white after:left-0 after:right-0 after:bottom-0 after:w-[0%] hover:text-yellow-300 hover:transition-all hover:ease-in-out hover:after:w-full after:transition-all  after:duration-700 after:ease-in-out p-4">
                Mulai Menjelajah!
              </button>
            </div>
          </div>

          <div>
            <img src="/book-landing.svg" width={400} loading="lazy" />
          </div>
        </section>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#72160a"
          fillOpacity="1"
          d="M0,192L40,170.7C80,149,160,107,240,101.3C320,96,400,128,480,165.3C560,203,640,245,720,224C800,203,880,117,960,90.7C1040,64,1120,96,1200,96C1280,96,1360,64,1400,48L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </main>
  );
};
