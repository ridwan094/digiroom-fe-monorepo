import { OtherPromo } from 'ui/components/molecules';

const DetailArticleAnotherPromoSection = ({ anotherPromo }) => {
  return (
    <section className="my-8">
      <div className="mx-4 md:mx-0">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-2xl">
          Promo Terkait
        </h2>
        <OtherPromo items={anotherPromo} />
      </div>
    </section>
  );
};

export default DetailArticleAnotherPromoSection;
