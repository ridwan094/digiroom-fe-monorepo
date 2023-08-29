import React from 'react';
import Link from 'next/link';
import { Card, Tag } from '../../atoms';

const CardProductKnowledge = ({ slug, title, coverImg, date, tag, className }) => {
  return (
    <React.Fragment>
      <Card className={`border-b-[0.5px] border-reliableBlack-10 ${className}`}>
        {tag && (
          <Tag className="rounded-br" severity="warn">
            {tag}
          </Tag>
        )}

        <div className="flex items-center gap-4 pt-2 px-4 pb-4">
          <div className="flex lg:h-[100px] max-w-[160px]">
            <Link href={`/product-knowledge/${slug}`}>
              <img
                className="min-w-[160px] h-full object-cover"
                src={coverImg}
                alt="Auto2000 article and news image"
              />
            </Link>
          </div>
          <div>
            <Link href={`/product-knowledge/${slug}`}>
              <p className="text-base font-semibold text-reliableBlack mb-1 line-clamp-2 lg:text-base lg:font-bold">
                {title}
              </p>
            </Link>
            <p className="text-xs font-normal text-reliableBlack50 lg:mb-4 lg:text-sm lg:text-reliableBlack">
              {date}
            </p>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

CardProductKnowledge.defaultProps = {
  id: null,
  slug: '',
  title: '',
  coverImg: '',
  date: '',
  tag: null,
  content: '',
};

export default CardProductKnowledge;
