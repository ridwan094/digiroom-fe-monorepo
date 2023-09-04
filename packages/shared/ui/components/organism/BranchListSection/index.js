import { BranchCard, BranchFilter } from '../../molecules';

const BranchListSection = () => {
  return (
    <section className="md:container">
      <div className="px-4 md:px-0 py-6">
        <h1 className="text-xl md:text-2xl font-bold mb-3">
          Dealer dan Bengkel Toyota di Jakarta Pusat
        </h1>
        <p className="text-xs md:text-base">
          Selamat datang di Auto2000 Jakarta Pusat. Dapatkan informasi terkait promosi terbaru,
          alamat, jam operasional Auto2000 Jakarta Pusat terbaru disini.
        </p>
      </div>
      <div className="mb-9">
        <BranchFilter onClickHandlerViewMap={() => {}} />
      </div>
      <div className="md:grid grid-cols-3 gap-6">
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
      </div>
    </section>
  );
};

export default BranchListSection;
