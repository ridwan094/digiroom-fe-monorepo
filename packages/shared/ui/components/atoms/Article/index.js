import { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Text from "../Text";

const Article = ({ data }) => {
  // If response using html string
  // const [article, setArticle] = useState({ __html: "" });

  // useEffect(() => {
  //   async function createMarkUp() {
  //     return await { __html: data };
  //   }

  //   createMarkUp().then((result) => setArticle(result));
  // }, []);

  // return <div dangerouslySetInnerHTML={article} />;
  return (
    <div className="w-full px-4">
      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>
          Pahami Hal Mendasar Mengemudi Aman di Jalan Tol, Auto2000 Bantu Jaga
          Kondisi Mobil
        </Text.Head6>
        <div className="flex items-center gap-4">
          <FiCalendar />
          <Text.Head8>Diposting 01 Jul 2023</Text.Head8>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <p>
          Presiden Joko Widodo telah meresmikan jalan tol baru Bengkulu-Taba
          Penajung, dan berdasarkan informasi dari Kementerian PUPR ditargetkan
          akhir tahun 2023 akan ada 13 ruas tol baru.
        </p>
        <p>
          Namun perlu dipahami bahwa mengendarai kendaraan di jalan tol bukanlah
          perkara mudah, dan sangat berbeda dengan berkendara di jalan umum
          biasa. Selanjutnya, Auto2000 memberikan tips berkendara aman di jalan
          tol.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>1. Pahami Kondisi Jalan</Text.Head6>
        <p>
          Jika AutoFamily tidak melewati jalan tol yang sama setiap hari, ada
          risiko tidak mengetahui potensi masalah seperti jalan rusak.
        </p>
        <p>
          Bahkan pada saat normal melintas, ada kemungkinan kondisi jalan akan
          berubah, seperti sedang dilakukan perbaikan jalan yang mengharuskan
          pengemudi untuk tetap waspada.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>2. Pahami Rambu dan Marka Jalan</Text.Head6>
        <p>
          Karena kurang memperhatikan rambu-rambu lalu lintas, ada pengendara
          yang nekad memotong jalan dari jalur cepat hingga pintu keluar tol.
        </p>
        <p>
          Tindakan ini sangat berbahaya karena berisiko tertabrak dari belakang
          atau menyebabkan mobil terguling.
        </p>
        <p>
          Baca Juga:
          <a
            className="ml-1"
            href="https://auto2000.co.id/berita-dan-tips/crm-paa-mobil-raize-apakah-matic-ulasan"
            target="_blank"
            style={{
              color: "#036EBC",
            }}
          >
            https://auto2000.co.id/berita-dan-tips/crm-paa-mobil-raize-apakah-matic-ulasan
          </a>
        </p>

        <p>
          Also make sure not to drive on the shoulder of the toll road because
          there is a risk of crashing from behind, where this type of accident
          still occurs frequently.
        </p>
        <p>
          Don't forget to obey the speed limit and always keep a safe distance
          from the car in front.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>3. Pahami Rambu dan Marka Jalan</Text.Head6>
        <p>
          Karena kurang memperhatikan rambu-rambu lalu lintas, ada pengendara
          yang nekad memotong jalan dari jalur cepat hingga pintu keluar tol.
        </p>
        <p>
          Tindakan ini sangat berbahaya karena berisiko tertabrak dari belakang
          atau menyebabkan mobil terguling.
        </p>
        <p>
          Also make sure not to drive on the shoulder of the toll road because
          there is a risk of crashing from behind, where this type of accident
          still occurs frequently.
        </p>
        <p>
          Don't forget to obey the speed limit and always keep a safe distance
          from the car in front.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>
          4. Understand the Skill of Each Driver Is Different
        </Text.Head6>
        <p>
          AutoFamily may already have sufficient driving skills.But what about
          other drivers? They may just be able to drive a car.For that,
          understand the skills of other drivers by seeing how they. If it's
          dangerous, avoid it immediately and don't be provoked because it can
          make them panic and make the wrong decision.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>5. Understand the Importance of Safety Features</Text.Head6>
        <p>
          Even though it is the most basic safety feature that protects the most
          because it is proven to be able to prevent passengers from hitting the
          glass or being thrown out during an accident.
        </p>
        <p>
          Toyota cars are equipped with seat belts up to the 3rd row bench, make
          the most of this feature and other advanced safety features such as
          Toyoto Safety Sense
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>6. Understand Body Condition</Text.Head6>
        <p>
          Because of trivial gaps, many drivers ignore sleep attacks and insist
          on driving. As a result they hit microsleep and ended in an accident.
        </p>
        <p>
          Understand the condition of the body from the potential for
          drowsiness, fatigue, and dangerous diseases.
        </p>

        <p>
          Also Read:
          <a href="#" target="_blank">
            Rush Services can be really be this easy
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.Head6>CHOOSE AND OWN THE RUSH YOU WANT</Text.Head6>
        <p>
          Information in the content of this article is subject to change and
          difference, adapting to certain developments, situations, business
          strategies, technological advances and policies without prior
          notification.
        </p>
      </div>
    </div>
  );
};

Article.defaultProps = {
  data: "",
};

export default Article;
