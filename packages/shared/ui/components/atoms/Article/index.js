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
        <Text.Head6>{data.titleHeadPost}</Text.Head6>
        <div className="flex items-center gap-4">
          <FiCalendar />
          <Text.Head8>Diposting {data.datePost}</Text.Head8>
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

      {data.contents &&
        data.contents.map((items, index) => (
          <div className="flex flex-col gap-3 mt-4 text-black">
            <Text.Head6>
              {index + 1}. {items.title}
            </Text.Head6>
            <p>{items.subTitle1}</p>
            <p>{items.subTitle2}</p>
            {items.newsContent && (
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
                  {items.newsContent}
                </a>
              </p>
            )}

            <p>{items.subTitle3}</p>
            <p>{items.subTitle4}</p>
          </div>
        ))}

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
