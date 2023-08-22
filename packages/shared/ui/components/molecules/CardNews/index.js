import Link from 'next/link';
import { Card, Tag } from '../../atoms';

const CardNews = ({ slug, title, image, date, tag, content, lastArticle }) => {
  return (
    <Card
      className={`border-b-[0.5px] border-reliableBlack-310 lg:border-transparent ${
        lastArticle && 'border-transparent'
      }`}
    >
      {tag && (
        <Tag className="rounded-br lg:hidden" severity="warn">
          {tag}
        </Tag>
      )}
      <div className="flex items-center gap-4 pt-2 px-4 pb-4 lg:flex-col lg:pt-0 lg:px-0 lg:pb-0">
        <div className="flex-[0_0_128px] h-20 lg:flex-auto lg:flex-auto lg:h-[270px]">
          <Link href={`/articles/${slug}`}>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Auto2000 article and news image"
            />
          </Link>
        </div>
        <div>
          <Link href={`/articles/${slug}`}>
            <p className="text-sm font-semibold text-reliableBlack mb-1 line-clamp-2 lg:text-xl lg:font-bold">
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
