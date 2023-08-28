import Link from 'next/link';
import { Card, Tag } from '../../atoms';

const CardNews = ({ slug, title, image, date, tag, content, lastArticle }) => {
  return (
    <Card className={`border-b-[0.5px] border-reliableBlack-310 mb-8`}>
      {tag && (
        <Tag className="rounded-br mb-2" severity="warn">
          {tag}
        </Tag>
      )}
      <div className="flex items-start gap-4 pt-2 px-4 pb-4 mb-2 lg:flex-row lg:pt-0 lg:px-0 lg:pb-0">
        <div className="flex-[0_0_150px] h-20 lg:flex-[0_0_150px] lg:flex-[0_0_150px] lg:h-[100px]">
          <Link href={`/articles/${slug}`}>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Auto2000 article and news image"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-between px-0 lg:px-0 lg:px-0">
          <Link href={`/articles/${slug}`}>
            <p className="text-sm font-semibold text-reliableBlack mb-1 line-clamp-2 lg:text-sm lg:font-bold">
              {title}
            </p>
          </Link>
          <p className="text-xs font-normal text-reliableBlack50 lg:text-sm lg:text-reliableBlack50">
            {date}
          </p>
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
