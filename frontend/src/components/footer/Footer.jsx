import { SocialMedia } from "../socialmedia/SocialMedia";
export const Footer = () => {
  return (
    <footer className="w-full h-[30vh] bg-gray-800 flex flex-col justify-center items-center bottom-0 ">
      <section className="flex items-center justify-center gap-10 flex-grow">
        <div>
          <img src="/firebooklylogo.svg" className="w-32 invert" />
        </div>
        <div className="w-1 h-20 bg-white"></div>
        <div>
          <span className="font-bold text-xl text-white">Our Social Media</span>
          <SocialMedia color={"white"} size={30} />
        </div>
        <div className="w-1 h-20 bg-white"></div>
        <div className="text-white">
          <span className="font-semibold  text-lg">Tentang FIREBOOKLY</span>
          <ul>
            <li>Tentang Kami</li>
            <li>Lokasi Kami</li>
          </ul>
        </div>
        <div className="w-1 h-20 bg-white"></div>
        <div className="text-white">
          <span className="font-semibold  text-lg">Lainnya</span>
          <ul>
            <li>Syarat & Ketentuan</li>
            <li>Bantuan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </section>
      <section className="bottom-0 ">
        <span className="font-thin text-white ">
          &copy; Copyright 2024 All rights reserved, Firebookly Store
        </span>
      </section>
    </footer>
  );
};
