import { RecommedationCard } from 'ui/components/molecules';

const ProductKnowledgeRecommendationSection = ({ items = [] }) => {
  return (
    <section className="my-8">
      <div>
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-2xl">
          Avanza Matic Terbaru 2023 di Auto2000
        </h2>
        <p className="text-sm lg:text-lg font-normal mb-4 leading-relaxed text-reliableBlack">
          Toyota Avanza Matic hadir dalam beragam pilihan yang bisa Anda jadikan pertimbangan.
          Kenali apa saja tipe dari mobil Toyota Avanza matic di bawah ini
        </p>
        <RecommedationCard items={items} />
      </div>
    </section>
  );
};

export default ProductKnowledgeRecommendationSection;
