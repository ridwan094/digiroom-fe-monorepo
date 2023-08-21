import { useState } from 'react';
import ShareButton from '../ShareButton';
import { BiCalendar } from 'react-icons/bi';
import ModalShare from '../ModalShare';


const Article = ({ data, block, containerClassName }) => {
  const classNameAssigned = [block ? 'w-full' : '', containerClassName];

  const [showModalPreview, setShowModalPreview] = useState(false);

  return (
    <div className={classNameAssigned.join(' ')}>
      <div className="flex mt-6 justify-between">
        <h1 className="text-2xl md:text-4xl text-reliableBlack font-bold">
          Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli{' '}
        </h1>
        <ShareButton
          onClick={() => setShowModalPreview((prevShowModalPreview) => !prevShowModalPreview)}
        />
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

      <ModalShare
        visible={showModalPreview}
        close={() => setShowModalPreview((prevShowModalPreview) => !prevShowModalPreview)}
      />

     
    </div>
  );
};

Article.defaultProps = {
  data: '',
  containerClassName: '',
  block: false,
};

export default Article;
