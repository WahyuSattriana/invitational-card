import Image from "next/image";
import hero from "./images/hero.jpg";
import ochasm from "./images/ocha-sm.jpg";
import savitrism from "./images/savitri-sm.jpg";
import ocha from "./images/ocha.jpg";
import savitri from "./images/savitri.jpg";
import hero2 from "./images/hero2.jpg"


const mepandesOchaSavitri = () => {
  return (
    <div className="box-border">
      <header className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-10 my-10">
          <h1 className="font-aboreto text-xl text-white">MEPANDES</h1>
          <div className="flex flex-col items-center gap-8">
            <h1 className="font-cinzel text-4xl text-white">Ocha Chandra</h1>
            <h1 className="font-cinzel text-4xl text-white">&</h1>
            <h1 className="font-cinzel text-4xl text-white">Savitri Candrika</h1>
          </div>
          <h1 className="font-aboreto text-xl text-white">13 / 12 / 2024</h1>
        </div>
        <p className="text-center font-baskervville m-5 text-white">Kami sangat mengharapkan kehadiran <br/> Bapak/Ibu/Saudara/i</p>
        {/* <div onClick={"#section-one"} className="cursor-pointer px-3 py-1 bg-zinc-500 opacity-100 text-white rounded-md bg-opacity-50">V</div> */}

        <Image fill alt="hero" quality={100} src={hero} sizes="cover" className="object-cover -z-20 absolute top-0 brightness-50"/>
      </header>
      <section id="section-one" className="h-screen bg-white flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex justify-center gap-2">
            <Image alt="ocha" src={ochasm} width={100} height={100} className="rounded-md"/>
            <Image alt="savitri" src={savitrism} width={100} height={100} className="rounded-md"/>
          </div>
          <h1 className="font-aboreto text-xl">OM SWASTYASTU</h1>
          <p className="text-center font-baskervville max-w-96">Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, Kami bermaksud menyelenggarakan Acara Mepandes pada:</p>
          <div className="flex flex-col justify-center items-center gap-3 text-sm">
            <h1 className="font-aboreto text-4xl">13 DESEMBER 2024</h1>
            <p className="text-center font-baskervville">Pukul: 13.30 - 17.00 WITA</p>
            <h1 className="font-aboreto text-base underline"><a target="_blank" href="https://calendar.app.google/5pVTBM7smVJnsk8h8">TAMBAH KE KALENDER</a></h1>
          </div>
          <p className="text-center font-baskervville max-w-96">Merupakan suatu kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir.<br/>Atas kehadiran dan doanya, kami mengucapkan terima kasih.</p>
        </div>
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex items-center justify-center flex-col gap-5">
            <Image alt="ocha" src={ocha} width={300} height={300} sizes="50vw" className="rounded-md"/>
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="font-aboreto text-xl">Putu Ocha Chandra Putri</h1>
              <p className="text-center font-baskervville">Anak dari pasangan Bapak I Kadek Oka Putra <br/> Widnyana dan Ibu Putu Ayu Primayanti Chandra</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-5">
            <Image alt="savitri" src={savitri} width={300} height={300} sizes="50vw" className="rounded-md"/>
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="font-aboreto text-xl">Kadek Savitri Candrika Dewi</h1>
              <p className="text-center font-baskervville">Anak dari pasangan Bapak I Ketut Artina <br/> dan Ibu Luh Sariasih</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-center font-baskervville text-white">“Om Hrim, Srim, Am, Um, Mam,<br/> Sarwa papa petaka winasaya hrah, hum phat,<br/> Om Siddhir guru shrom, Sarwasat.”</p>
          <p className="text-center font-baskervville text-white">Arti:<br/> “Om Hyang Widhi Wasa,<br/>semoga semua musuh yang berupa penderitaan,<br/>kesengsaraan, bencana dan lain-lain menjadi sirna.”</p>
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-aboreto text-xl text-white">LOKASI</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.5218951019997!2d115.04564287500882!3d-8.150054891880279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDknMDAuMiJTIDExNcKwMDInNTMuNiJF!5e0!3m2!1sen!2sid!4v1733489271152!5m2!1sen!2sid" width="350" height="200" style={{border: 0, borderRadius: '6px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <Image fill alt="hero2" quality={100} src={hero2} sizes="cover" className="absolute -z-20 object-cover brightness-50"/>
      </section>
    </div>
  );
}

export default mepandesOchaSavitri;