import { OtherPromo } from 'ui/components/molecules';

const DetailPromoAnotherPromoSection = ({ anotherPromo }) => {
  return (
    <section className="my-8">
      <div className="container">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-2xl">
          Promo Lainnya
        </h2>
        <OtherPromo items={anotherPromo} />
      </div>
    </section>
  );
};

export default DetailPromoAnotherPromoSection;
