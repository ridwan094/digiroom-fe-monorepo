import { Icons } from '../../atoms';
import Text from '../../atoms/Text';

const ReviewSection = ({ detailsUrl = '#' }) => {
  return (
    <section className="text-reliableBlack bg-reliableBlack5 p-5 md:p-10">
      <div className="md:container">
        <div className="flex justify-between mb-5">
          <div>
            <Text.Headline4 className="font-bold mb-[6px] md:text-2xl">
              APA KATA PEMBELI?
            </Text.Headline4>
            <div className="flex items-center">
              <Icons.Grade />
              <Text.BodySmall className="md:text-lg">4.8/5 (Dari 6 Ulasan)</Text.BodySmall>
            </div>
          </div>
          <a href={detailsUrl} className="items-center gap-3 font-medium hidden md:flex">
            LIHAT SEMUA <Icons.ArrowForward size="24" />
          </a>
        </div>
        <ul>
          {[1, 2, 3].map((review) => (
            <li
              key={review}
              className="flex justify-between gap-3 pb-[10px] mb-[10px] border-b border-reliableBlack70 last:border-none md:border-[#E7E7E7] md:pb-5 md:mb-5"
            >
              <div>
                <Text.BodyMediumSemibold className="mb-1 md:text-xl md:mb-2">
                  Kiki Halim
                </Text.BodyMediumSemibold>
                <Text.BodySmall className="md:text-base">
                  “Fitur yang cukup lengkap dan pas untuk sehari hari.”
                </Text.BodySmall>
              </div>
              <div className="flex items-center">
                <span>
                  <Icons.Grade />
                </span>
                <Text.BodySmall className="md:text-2xl">5.0</Text.BodySmall>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <a href={detailsUrl} className="flex md:hidden items-center gap-2 text-xs font-medium">
            LIHAT SEMUA <Icons.ArrowForward />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
