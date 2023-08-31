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
            <span>
              <svg
                width="11"
                height="8"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.825 0.158325L5 3.97499L1.175 0.158325L0 1.33333L5 6.33332L10 1.33333L8.825 0.158325Z"
                  fill="#4F4C4D"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchInfoSection;
