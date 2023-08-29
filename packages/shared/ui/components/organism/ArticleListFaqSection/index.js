import { Accordion } from 'ui/components/atoms';

const ArticleListFaqSection = ({ faqs }) => {
  return (
    <>
      <section className="my-[30px] lg:my-20">
        <div className="container">
          <h2 className="text-base mb-2 text-reliableBlack font-bold uppercase lg:mb-5 lg:text-2xl">
            FAQ Tips Toyota
          </h2>

          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title}>
              {faq.content}
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
};

export default ArticleListFaqSection;
