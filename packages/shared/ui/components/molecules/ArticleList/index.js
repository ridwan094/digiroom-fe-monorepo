import Link from 'next/link';
import { Card, Tag } from 'ui/components/atoms';
import { CardNews } from 'ui/components/molecules';

const ArticleList = ({ articles, usingTag }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
      {articles.map((article, index) => {
        if (index === 0) {
          return (
            <Card key={index} className="border-b-[0.5px] border-reliableBlack-310 bg-reliableBlack3 lg:col-span-3">
              <Link href={`/articles/${article.slug}`}>
                <img
                  className="w-full h-52 object-cover lg:h-[270px]"
                  src={article.image}
                  alt="Auto2000 article and news image"
                />
              </Link>

              {usingTag && (
                <div className="bg-reliableBlack3 lg:bg-reliableBlack3">
                  <Tag className="border-br" serverity="warn">
                    {article.category}
                  </Tag>
                </div>
              )}

              <div className="pt-2 px-4 pb-4 bg-reliableBlack3 lg:pt-4 lg:px-4 lg:pb-0 lg:bg-reliableBlack3">
                <Link href={`/articles/${article.slug}`}>
                  <p className="text-sm font-semibold text-reliableBlack mb-1 lg:text-xl lg:font-bold">
                    {article.title}
                  </p>
                </Link>
                <p className="text-xs font-normal text-reliableBlack80 lg:mb-4 lg:text-sm lg:text-reliableBlack">
                  {article.createdDate}
                </p>
              </div>
            </Card>
          );
        } else {
          return (
            <CardNews
              key={index}
              title={article.title}
              slug={article.slug}
              date={article.createdDate}
              image={article.image}
              tag={usingTag && article.category}
              content={article.content}
              lastArticle={articles.length === index + 1 ? true : false}
            />
          );
        }
      })}
    </div>
  );
};

ArticleList.defaultProps = {
  articles: [],
  usingTag: false,
};

export default ArticleList;
