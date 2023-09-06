import { Button } from '../../atoms';
import { MdArrowForward } from 'react-icons/md';
import { CurrentInformation, OtherArticles } from '../../molecules';

const CurrentInformationSection = ({ data }) => {
  return (
    <section className="py-6 border-t-4 lg:py-10">
      <div className="px-4 container ">
        <div className="flex justify-between lg:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-bold uppercase text-reliableBlack lg:text-2xl">
              Informasi Terkini Auto2000 Jakarta Pusat
            </h2>
          </div>
          <Button className="bg-transparent text-reliableBlack text-xs font-semibold uppercase lg:text-base lg:font-medium">
            <span className="flex items-center gap-2 lg:gap-4">
              Lihat Semua
              <MdArrowForward color="#CE181E" size={18} />
            </span>
          </Button>
        </div>
        <p className="text-sm text-reliableBlack mb-2 lg:text-base lg:mb-6">
          Berikut adalah events Auto2000 yang ada di{' '}
          <span className="font-bold">Auto2000 Jakarta Pusat</span>
        </p>
        <CurrentInformation items={data} />
      </div>
    </section>
  );
};

export default CurrentInformationSection;
