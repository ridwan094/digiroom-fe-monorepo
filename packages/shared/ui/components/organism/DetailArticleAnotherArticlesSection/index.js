import { OtherArticles } from 'ui/components/molecules';

const DetailArticleAnotherArticlesSection = ({ anotherArticles }) => {
  return (
    <section className="my-8">
      <div className="container">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-2xl">
          Artikel Lainnya
        </h2>
        <OtherArticles items={anotherArticles} />
      </div>
    </section>
  );
};

export default DetailArticleAnotherArticlesSection;
