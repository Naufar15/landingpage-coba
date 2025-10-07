"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Perbaikan: Import komponen Image dari Next.js untuk optimasi.
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          EVERY SHOT A MOVIE.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
          Ubah tampilan FiveM kamu menjadi dunia sinematik penuh cahaya,
          refleksi, dan atmosfer realistis. Nikmati setiap momen gameplay
          seperti adegan film blockbuster.
        </p>
        <a
          href="https://discord.gg/Y9PkZJbxkT"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg inline-block"
        >
          Mulai Ubah Dunia Visualmu
        </a>
      </section>

      {/* SECTION 1 */}
      <section className="py-20 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">
          GRAFIK STANDAR? BOSAN.
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Pernah merasa tampilan FiveM kamu datar dan kusam? Bayangan tak
          realistis, pencahayaan hambar, dan warna yang gak hidup? Padahal kamu
          ingin dunia yang sinematik — layaknya film aksi besar.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="rounded-2xl shadow-2xl max-w-4xl w-full">
            {/* Perbaikan: Menggunakan komponen Image dan menambahkan width/height */}
            <Image
              src="/cinemora.png"
              alt="Perbandingan Grafik"
              width={1024} // Sesuaikan dengan ukuran gambar asli jika diketahui
              height={576} // Sesuaikan dengan ukuran gambar asli jika diketahui
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority // Tambahkan priority karena ini gambar utama di bagian atas
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="py-20 bg-gradient-to-b from-gray-900 to-black px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Introducing: GrafikPack Sinematik 2025
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Koleksi mod grafik terbaik yang kami rancang untuk membawa FiveM ke
          level sinematik. Dari <b>preset ReShade</b>, <b>ENB</b>, <b>EVE</b>,
          hingga <b>pack efek cuaca dan refleksi</b>, semuanya kami optimalkan
          agar kamu mendapatkan pengalaman visual terbaik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition-transform">
            {/* Perbaikan: Menggunakan komponen Image */}
            <Image
              src="/VERDANCE 5.png"
              alt="Preset ReShade"
              width={400} // Perkiraan ukuran
              height={225} // Perkiraan ukuran
              className="rounded-lg mb-4 w-full h-auto"
            />
            <h3 className="text-xl font-bold mb-2">Preset ReShade</h3>
            <p className="text-gray-400">
              Filter sinematik, tone warna film, dan pencahayaan realistis yang
              bikin setiap frame terlihat seperti adegan film.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition-transform">
            {/* Perbaikan: Menggunakan komponen Image */}
            <Image
              src="/nanoboost 2.png"
              alt="Graphic Pack"
              width={400} // Perkiraan ukuran
              height={225} // Perkiraan ukuran
              className="rounded-lg mb-4 w-full h-auto"
            />
            <h3 className="text-xl font-bold mb-2">Graphic Pack</h3>
            <p className="text-gray-400">
              Kombinasi langit dinamis, refleksi kendaraan, dan pencahayaan
              malam hari yang menakjubkan.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition-transform">
            {/* Perbaikan: Menggunakan komponen Image. Pastikan huruf kapital sesuai nama file. */}
            <Image
              src="/NANOPACK 1.PNG"
              alt="Mod Pack"
              width={400} // Perkiraan ukuran
              height={225} // Perkiraan ukuran
              className="rounded-lg mb-4 w-full h-auto"
            />
            <h3 className="text-xl font-bold mb-2">Mod Pack Lengkap</h3>
            <p className="text-gray-400">
              Satu paket siap pakai — tinggal install dan nikmati dunia baru
              penuh keindahan visual.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 px-6" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-center mb-8">
          Setiap Sudut, Setiap Cahaya
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Tidak hanya terang, tapi hidup. Lihat bagaimana FiveM berubah total
          dengan pencahayaan sinematik, refleksi realistis, dan tone film yang
          dramatis.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YrBpQz0CvP4?autoplay=1&mute=1&loop=1&playlist=YrBpQz0CvP4"
              title="FiveM Graphic Mod Showcase"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Perbaikan Tanda Kutip Ganda */}
      <section
        className="py-20 bg-gradient-to-t from-gray-900 to-black text-center px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4">Setiap Detik Jadi Sinematik</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Dunia FiveM Anda tidak harus biasa-biasa saja. Sudah saatnya gameplay
          Anda mencapai level yang setara dengan film-film blockbuster
          Hollywood. Mulai sekarang, lupakan tekstur rata dan pencahayaan yang
          kaku. Biarkan mod ini mengubah segalanya: setiap pantulan cahaya pada
          kap mobil yang mengkilap, setiap embusan kabut di gang sempit yang
          misterius, dan setiap kilau hujan di aspal basah yang mencerminkan
          lampu kota. Ini bukan sekadar mod — ini adalah evolusi visual yang
          dirancang untuk merayakan detail, memberikan kedalaman, dan
          menyuntikkan realisme ke dalam setiap bingkai.
        </p>

        <h3 className="text-xl font-bold text-white max-w-2xl mx-auto mt-10 mb-4">
          Jual Pengalaman, Bukan Sekadar Fitur
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Bayangkan momen-momen terbaik Anda. Saat Anda merekam video roleplay
          untuk diunggah ke YouTube, hasilnya akan terlihat begitu memukau,
          begitu kaya warna, hingga penonton Anda akan bertanya-tanya,
          **&quot;Ini syuting film, atau game?&quot;** Refleksi sinematik dan
          tone warna yang dramatis memastikan bahwa cerita yang Anda bangun
          memiliki latar belakang visual yang layak.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Atau, rasakan adrenalin balapan di malam hari: setiap lampu sorot
          mobil lawan, setiap percikan air dari ban, dan jalan basah yang tampak
          nyata akan menciptakan intensitas yang belum pernah Anda rasakan
          sebelumnya. Bahkan saat Anda berhenti sejenak — di puncak bukit saat
          pemandangan sunset FiveM memancarkan warna-warna oranye dan ungu yang
          memabukkan — Anda akan menyadari bahwa dunia game ini kini mampu
          memaksa siapa pun untuk berhenti, mengambil screenshot, dan mengagumi
          keindahannya.
        </p>

        <h3 className="text-xl font-bold text-white max-w-2xl mx-auto mt-10 mb-4">
          Untuk Konten Kreator & Roleplayer Sejati
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Mod grafis ini adalah senjata rahasia Anda di medan kompetisi konten.
          Di era di mana kualitas visual menentukan engagement, mengapa puas
          dengan yang standar? Ubah setiap screenshot menjadi karya seni dan
          setiap video menjadi cuplikan yang menarik ribuan views. Ini adalah
          investasi visual yang akan meningkatkan kualitas roleplay dan brand
          pribadi Anda. Jadikan dunia game Anda kanvas, dan jadikan gameplay
          Anda mahakarya.
        </p>

        <a
          href="https://discord.gg/Y9PkZJbxkT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-110 transition-all duration-300"
        >
          💎 Dapatkan Sekarang – Jadikan Dunia Kamu Film Nyata
        </a>
      </section>

      {/* SECTION 5 - Perbaikan Tanda Kutip Ganda */}
      <section
        className="py-20 bg-gradient-to-t from-gray-900 to-black text-center px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4">DAPATKAN PENAWARAN TERBAIK</h2>
        <div className="max-w-2xl mx-auto mb-8 text-center text-gray-300">
          <p className="text-2xl font-bold text-white mb-2">
            Normal price <span className="text-blue-400">Rp.600.000,-</span>
          </p>

          <p className="text-lg mb-2 line-through">
            EARLY BIRD Rp. 99.000,-(HABIS)
          </p>

          <p className="text-lg mb-2">Phase 2 Open (100 Murid)</p>

          <p className="text-4xl font-bold text-red-500 underline">
            Rp. 149.000,-
          </p>
        </div>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Bayangkan saat kamu rekam video roleplay, hasilnya terlihat seperti
          film sungguhan. Saat kamu balapan di malam hari, setiap refleksi lampu
          dan jalan basah tampak nyata. Bahkan pemandangan sunset FiveM kini
          bisa bikin siapa pun berhenti sejenak.
        </p>

        <a
          href="https://discord.gg/Y9PkZJbxkT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-110 transition-all duration-300"
        >
          💎 Dapatkan Sekarang Juga !!!
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © 2025 Nanosauruss Visual Mods. Every Shot a Movie.
      </footer>
    </main>
  );
}
