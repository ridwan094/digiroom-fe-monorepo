import React from 'react';
import Link from 'next/link';
import { Card, Tag } from '../../atoms';

const CardNews = ({ slug, title, image, date, tag, content, lastArticle, AdditionalClassName }) => {
  const hrefLink = {
    pathname: `/berita-dan-tips/${slug}`,
    query: {
      slugCode: slug,
    },
  };

  const asLink = `/berita-dan-tips/${slug}`;

  return (
    <React.Fragment>
      <Card
        className={`border-b-[0.5px] border-reliableBlack-10 ${
          lastArticle && 'border-transparent'
        } ${AdditionalClassName}`}
      >
        {tag && (
          <Tag className="rounded-br" severity="warn">
            {tag}
          </Tag>
        )}
        <div className="flex items-center gap-4 pt-2 px-4 pb-4">
          <div className="flex lg:h-[100px] max-w-[160px]">
            <Link href={hrefLink} as={asLink}>
              <img
                className="min-w-[160px] h-full object-cover"
                src={image}
                alt="Auto2000 article and news image"
              />
            </Link>
          </div>
          <div>
            <Link href={hrefLink} as={asLink}>
              <p className="text-sm font-semibold text-reliableBlack mb-1 line-clamp-2 lg:text-base lg:font-bold">
                {title}
              </p>
            </Link>
            <p className="text-xs font-normal text-reliableBlack50 lg:mb-4 lg:text-sm lg:text-reliableBlack">
              {date}
            </p>
            <div className="hidden lg:block">
              <p className="text-base text-reliableBlack leading-relaxed line-clamp-3">{content}</p>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

CardNews.defaultProps = {
  id: null,
  title: '',
  slug: '',
  image: '',
  date: '',
  tag: null,
  content: '',
  lastArticle: false,
};

export default CardNews;
