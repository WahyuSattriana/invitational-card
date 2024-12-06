import Image from "next/image";
import hero from "./images/hero.jpg";
import ochasm from "./images/ocha-sm.jpg";
import savitrism from "./images/savitri-sm.jpg";


const mepandesOchaSavitri = () => {
  return (
    <div className="box-border">
      <header className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center gap-10 my-10">
          <h1 className="font-aboreto text-xl text-white">MEPANDES</h1>
          <div className="flex flex-col items-center gap-8">
            <h1 className="font-cinzel text-4xl text-white">Ocha Chandra</h1>
            <h1 className="font-cinzel text-4xl text-white">&</h1>
            <h1 className="font-cinzel text-4xl text-white">Savitri Candrika</h1>
          </div>
          <h1 className="font-aboreto text-xl text-white">13 / 12 / 2024</h1>
        </div>
        <p className="text-center font-baskervville m-5 text-white">Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i</p>
        {/* <div onClick={"#section-one"} className="cursor-pointer px-3 py-1 bg-zinc-500 opacity-100 text-white rounded-md bg-opacity-50">V</div> */}

        <Image fill alt="hero" quality={100} src={hero} sizes="cover" className="object-cover -z-20 absolute top-0 brightness-50"/>
      </header>
      <section id="section-one" className="h-screen bg-white flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex justify-center gap-2">
            <Image alt="ocha" src={ochasm} width={100} height={100} className="rounded-sm"/>
            <Image alt="savitri" src={savitrism} width={100} height={100} className="rounded-sm"/>
          </div>
          <h1 className="font-aboreto text-xl">OM SWASTYASTU</h1>
          <p className="text-center font-baskervville max-w-96">Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, Kami bermaksud menyelenggarakan Acara Mepandes pada:</p>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-aboreto text-4xl">13 DESEMBER 2024</h1>
            <h1 className="font-aboreto text-base underline"><a target="_blank" href="https://calendar.app.google/5pVTBM7smVJnsk8h8">TAMBAH KE KALENDER</a></h1>
          </div>
          <p className="text-center font-baskervville max-w-96">Merupakan suatu kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir.<br/>Atas kehadiran dan doanya, kami mengucapkan terima kasih.</p>
        </div>
      </section>
    </div>
  );
}

export default mepandesOchaSavitri;