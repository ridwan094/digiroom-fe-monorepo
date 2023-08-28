const ArticleListHeroSection = () => {
  return (
    <section className="pt-4 pb-6 lg:py-8">
      <div className="container">
        <h1 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
          Berita & Tips
        </h1>
        <p className="text-xs font-medium leading-relaxed text-reliableBlack lg:text-base">
          Dapatkan informasi terkini melalui berita eksklusif dan tips dari Auto2000
        </p>
        <div className="hidden md:block relative aspect-video">
          <a href="/detail" className="bg-reliableBlack10">
            <img src="/images/banner.webp" alt="" objectFit="cover" objectPosition="0 0" fill />
            <h3 className="text-reliableBlack text-4xl font-bold">
              Pahami Hal Mendasar Mengemudi Aman di Jalan Tol, Auto2000 Bantu Jaga Kondisi Mobil
              Anda
            </h3>
            <h5 className="text-reliableBlack text-xl">20 Juli 2023</h5>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleListHeroSection;
