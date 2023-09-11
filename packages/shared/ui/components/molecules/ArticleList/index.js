import React from 'react';
import Link from 'next/link';
import { Card, Tag } from 'ui/components/atoms';
import { CardNews } from 'ui/components/molecules';

const ArticleList = ({ articles, usingTag }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
        {articles.map((article, index) => {
          if (index === 0) {
            return (
              <Card
                key={index}
                className="bg-reliableBlack3 border-b-[0.5px] border-reliableBlack10 md:col-span-2 lg:col-span-3"
              >
                <Link
                  href={{
                    pathname: `/berita-dan-tips/${article.slug}`,
                    query: {
                      slugCode: article.slug,
                    },
                  }}
                  as={`/berita-dan-tips/${article.slug}`}
                >
                  <img
                    className="w-full object-cover"
                    src={article.image}
                    alt="Auto2000 article and news image"
                  />
                </Link>

                {usingTag && (
                  <div className="bg-reliableBlack3">
                    <Tag className="border-br" serverity="warn">
                      {article.category}
                    </Tag>
                  </div>
                )}

                <div className="pt-2 px-4 pb-4 lg:pt-8 lg:px-6 lg:pb-6">
                  <Link
                    href={{
                      pathname: `/berita-dan-tips/${article.slug}`,
                      query: {
                        slugCode: article.slug,
                      },
                    }}
                    as={`/berita-dan-tips/${article.slug}`}
                  >
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
                lastArticle={articles.length === index + 1 ? true : false}
                AdditionalClassName={`lg:-mt-8`}
              />
            );
          }
        })}
      </div>
    </React.Fragment>
  );
};

ArticleList.defaultProps = {
  articles: [],
  usingTag: false,
};

export default ArticleList;
