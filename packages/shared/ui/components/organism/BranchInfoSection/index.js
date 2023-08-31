import { Icons } from '../../atoms';

const BranchInfoSection = () => {
  return (
    <section className="py-[30px] border-t-4 lg:py-20">
      <div className="container">
        <h2 className="text-base font-bold text-reliableBlack uppercase mb-4 lg:text-2xl lg:mb-5">
          Dealer dan Bengkel Toyota di Jakarta Pusat
        </h2>
        <p className="text-sm font-regular text-reliableBlack leading-relaxed lg:max-w-7xl lg:text-base ">
          Selamat datang di dealer dan bengkel Toyota Jakarta Pusat cabang resmi Auto2000. Tim kami
          siap untuk membantu Anda dalam menemukan pilihan mobil yang tepat hingga memberikan
          layanan purna jual yang maksimal. Sebagai cabang resmi dealer dan bengkel Toyota Jakarta
          Pusat, kami menyediakan berbagai layanan yang bisa mempermudah Anda. Mulai dari pilihan
          beragam mobil Toyota, layanan purna jual, hingga penjualan suku cadang untuk mobil Toyota
          kesayangan Anda.
        </p>
        <div className="flex justify-center lg:justify-start">
          <div className="flex items-center w-fit gap-2 mt-4 cursor-pointer lg:mt-6">
            <p className="text-sm font-semibold text-reliableBlack uppercase  lg:border-b-2 lg:border-supportiveRed lg:text-base">
              Lihat Lebih Banyak
            </p>
            <Icons.DropDownArrow size={11} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchInfoSection;
