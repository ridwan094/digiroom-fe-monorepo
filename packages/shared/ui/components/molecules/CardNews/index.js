import React from 'react';
import Card from '../../atoms/Card';

const CardNews = ({ id, title, coverImg, date, index }) => {
  const isFirstCard = index === 0;

  return (
    <Card className="border border-reliableBlack-310 transition-all ease-in-out duration-300 hover:scale-105">
      <div
        key={id}
        className={`p-4 lg:p-6 md:p-6 ${isFirstCard ? '' : 'h-full'}`}
      >
        <img
          className={`w-full h-full object-cover ${isFirstCard ? 'h-40 lg:mb-10 ' : 'h-40 mb-4'}`}
          src={coverImg}
          alt="Auto2000 promo"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-reliableBlack mb-2 lg:text-base">{title}</p>
          <p className="text-xs text-reliableBlack70 lg:text-sm">{date}</p>
        </div>
      </div>
    </Card>
  );
};

CardNews.defaultProps = {
  id: null,
  title: '',
  coverImg: '',
  date: '',
};

export default CardNews;
