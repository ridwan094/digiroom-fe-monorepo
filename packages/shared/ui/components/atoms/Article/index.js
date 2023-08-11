import { useState, useEffect } from 'react';
import Text from '../Text';
import Button from '../Button';
import { BiSolidShareAlt, BiCalendar } from 'react-icons/bi';

const Article = ({ data, block, containerClassName }) => {
  const classNameAssigned = [block ? 'w-full' : '', containerClassName];
  // If response using html string
  // const [article, setArticle] = useState({ __html: "" });

  // useEffect(() => {
  //   async function createMarkUp() {
  //     return await { __html: data };
  //   }

  //   createMarkUp().then((result) => setArticle(result));
  // }, []);

  // return <div dangerouslySetInnerHTML={article} />;
  return (
    <div className={classNameAssigned.join(' ')}>
      <div className="flex mt-6 justify-between">
        <h1 className="text-2xl md:text-4xl text-reliableBlack font-bold">
          Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli{' '}
        </h1>
        <Button
          className="bg-reliableBlack20 md:hidden sm:block px-3 py-[11px]"
          type="button"
          variant={'bg-reliableBlack10'}
        >
          <BiSolidShareAlt size={24} fill="bg-reliableBlack90" />
        </Button>
      </div>
      <div className="flex mt-6 items-center gap-4">
        <BiCalendar size={24} color="black" />
        <h5 className="text-black">Diposting pada 19 Juli 2023</h5>
      </div>
      <p className="mt-6 text-black">
        Hi AutoFamily! Untuk Anda para keluarga modern, mobil Calya cocok banget untuk Anda nih.
        Mobil Calya yang memiliki ruang kabin yang lega bisa menampung 7 penumpang sekaligus loh.
        Tak hanya itu, mobil Calya juga dilengkapi dengan Fitur Entertainment yang lengkap. Yuk bawa
        pulang Toyota Calya untuk keluarga tersayang sekarang dengan cicilan mulai dari 3.3
        jutaan/bulan saja! <br /> Jangan lupa untuk isi formulir di bawah ini untuk dapatkan
        penawarannya sekarang!
      </p>
    </div>
  );
};

Article.defaultProps = {
  data: '',
  containerClassName: '',
  block: false,
};

export default Article;
