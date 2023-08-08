import { useState, useEffect } from 'react';
import Text from '../Text';

const Article = ({ data, block, containerClassName }) => {
  const classNameAssigned = [block ? 'w-full' : '', containerClassName];
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
    <div className={classNameAssigned.join(' ')}>
      <div className="flex flex-col gap-4 mt-4 text-black w-3/4 md:w-full gap-2">
        <Text.BodyMedium className="text-lg font-semibold md:text-3xl text-reliableBlack">
          {data.titleHeadPost}
        </Text.BodyMedium>
        <Text.BodyLarge className="text-xs font-normal text-reliableBlack90 md:text-base">
          Diposting {data.datePost}
        </Text.BodyLarge>
      </div>

      <div className="flex flex-col gap-2 mt-4 text-black">
        <Text.BodyLarge className="text-base font-normal md:text-lg">
          Presiden Joko Widodo telah meresmikan jalan tol baru Bengkulu-Taba Penajung, dan
          berdasarkan informasi dari Kementerian PUPR ditargetkan akhir tahun 2023 akan ada 13 ruas
          tol baru.
        </Text.BodyLarge>
        <Text.BodyLarge className="text-base font-normal md:text-lg">
          Namun perlu dipahami bahwa mengendarai kendaraan di jalan tol bukanlah perkara mudah, dan
          sangat berbeda dengan berkendara di jalan umum biasa. Selanjutnya, Auto2000 memberikan
          tips berkendara aman di jalan tol.
        </Text.BodyLarge>
      </div>

      {data.contents &&
        data.contents.map((items, index) => (
          <div className="flex flex-col gap-2 mt-4 text-black">
            <Text.BodyLargeSemibold className="text-base font-semibold md:text-lg">
              {index + 1}. {items.title}
            </Text.BodyLargeSemibold>
            <Text.BodyLarge className="text-base font-normal md:text-lg">
              {items.subTitle1}
            </Text.BodyLarge>
            <Text.BodyLarge className="text-base font-normal md:text-lg">
              {items.subTitle2}
            </Text.BodyLarge>
            {items.newsContent && (
              <Text.BodyLarge>
                Baca Juga:
                <a
                  className="ml-1"
                  href="https://auto2000.co.id/berita-dan-tips/crm-paa-mobil-raize-apakah-matic-ulasan"
                  target="_blank"
                  style={{
                    color: '#036EBC',
                  }}
                >
                  {items.newsContent}
                </a>
              </Text.BodyLarge>
            )}
            {items.subTitle3 && (
              <Text.BodyLarge className="text-base font-normal md:text-lg">
                {items.subTitle3}
              </Text.BodyLarge>
            )}
            {items.subTitle4 && (
              <Text.BodyLarge className="text-base font-normal md:text-lg">
                {items.subTitle4}
              </Text.BodyLarge>
            )}
          </div>
        ))}

      <div className="flex flex-col gap-3 mt-4 text-black">
        <Text.BodyExtraLarge className="text-base font-semibold md:text-lg">
          CHOOSE AND OWN THE RUSH YOU WANT
        </Text.BodyExtraLarge>
        <Text.BodyLarge className="text-base font-normal md:text-lg">
          Information in the content of this article is subject to change and difference, adapting
          to certain developments, situations, business strategies, technological advances and
          policies without prior notification.
        </Text.BodyLarge>
      </div>
    </div>
  );
};

Article.defaultProps = {
  data: '',
  containerClassName: '',
  block: false,
};

export default Article;
