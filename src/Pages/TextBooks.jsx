import yr11 from "../images/Year1-1.webp";
import yr12 from "../images/Year1-2.webp";
import yr13 from "../images/Year1-3.webp";
import yr14 from "../images/Year1-4.webp";
import yr15 from "../images/Year1-5.webp";
import yr16 from "../images/Year1-6.webp";
import yr17 from "../images/Year1-7.webp";
import yr21 from "../images/Year2-1.webp";
import yr22 from "../images/Year2-2.webp";
import yr23 from "../images/Year2-3.webp";
import yr31 from "../images/Year3-1.webp";
import yr32 from "../images/Year3-2.webp";
import yr33 from "../images/Year3-3.webp";
import yr34 from "../images/Year3-4.webp";
import yr41 from "../images/Year4-1.webp";
import yr42 from "../images/Year4-2.webp";
import yr43 from "../images/Year4-3.webp";
import yr51 from "../images/Year5-1.webp";
import yr52 from "../images/Year5-2.webp";
import yr53 from "../images/Year5-3.webp";
import yr54 from "../images/Year5-4.webp";

export const TextBooks = () => {
  return (
    <section className="container relative mx-auto min-h-[calc(100vh-215px)] py-4 text-white mb-24">
      <h2 className="py-6 sectionHead -ml-1">YEAR-1</h2>
      <div id="#year-1" className="grid grid-cols-4 gap-12 mb-20 -ml-1">
        <img src={yr11} alt="Arabic" className="rounded-lg" />
        <img src={yr12} alt="Arabic Abridge" className="rounded-lg" />
        <img src={yr13} alt="Sarf" className="rounded-lg" />
        <img src={yr14} alt="Nahw" className="rounded-lg" />
        <img src={yr15} alt="Muntaqbat" className="rounded-lg" />
        <img src={yr16} alt="Taseef" className="rounded-lg" />
        <img src={yr17} alt="Qisa" className="rounded-lg" />
      </div>
      <div id="#year-2" className="-ml-1">
        <h2 className="py-6 sectionHead">YEAR 2</h2>
        <div className="grid grid-cols-4 gap-12 mb-20 -ml-1">
          <img src={yr21} alt="Qur'an" className="rounded-lg" />
          <img src={yr22} alt="Arabic" className="rounded-lg" />
          <img src={yr23} alt="Balagah" className="rounded-lg" />
        </div>
      </div>

      <div id="#year-3" className="-ml-1">
        <h2 className="py-6 sectionHead">YEAR 3</h2>
        <div className="grid grid-cols-4 gap-12 mb-20">
          <img src={yr31} alt="Mishkat" className="rounded-lg" />
          <img src={yr32} alt="Seerat" className="rounded-lg" />
          <img src={yr33} alt="Daroos" className="rounded-lg" />
          <img src={yr34} alt="Tareeq" className="rounded-lg" />
        </div>
      </div>
      <div id="#year-4" className="-ml-1">
        <h2 className="py-6 sectionHead">YEAR 4</h2>
        <div className="grid grid-cols-4 gap-12 mb-20">
          <img src={yr41} alt="Arabic" className="rounded-lg" />
          <img src={yr42} alt="Arabic" className="rounded-lg" />
          <img src={yr43} alt="Arabic" className="rounded-lg" />
        </div>
      </div>
      <div id="#year-5" className="-ml-1">
        <h2 className="py-6 sectionHead">YEAR 5</h2>
        <div className="grid grid-cols-4 gap-12 mb-20">
          <img src={yr51} alt="Arabic" className="rounded-lg" />
          <img src={yr52} alt="Arabic" className="rounded-lg" />
          <img src={yr53} alt="Arabic" className="rounded-lg" />
          <img src={yr54} alt="Arabic" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};
