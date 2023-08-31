import { useEffect, useState } from 'react';
import { MdShare, MdOutlineCalendarMonth } from 'react-icons/md';
import { Button, ModalShare, ShareButton } from 'ui/components/atoms';

const DetailArticleBodySection = ({ article }) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger share system on mobile
  const handleShare = () => {
    if (isMobileScreen && navigator.share) {
      navigator
        .share({
          title: article.title,
          text: 'Check out this article!',
          url: window.location.href,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Share error:', error));
    } else {
      setShareOpen(true);
    }
  };

  return (
    <section className="my-[30px] mx-4 lg:mx-0 lg:mt-8">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
          <h1 className="text-sm font-semibold text-reliableBlack lg:text-4xl">{article.title}</h1>
          <ShareButton onClick={isMobileScreen ? handleShare : () => setShareOpen(true)} />
        </div>

        {/* Date */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth size={18} />
            <p className="text-sm text-reliableBlack80 lg:text-base">
              <span className="inline-block mr-1">Diterbitkan</span>
              {article.createdDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          {article.content.split('</p>').map((v, idx) => (
            <div
              className="text-sm font-normal leading-relaxed text-reliableBlack mb-3"
              key={idx}
              dangerouslySetInnerHTML={{ __html: v }}
            ></div>
          ))}
        </div>

        {/* Additional info */}
        <div>
          <p className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-xl">
            Pilih dan Miliki Toyota RUSH yang Anda inginkan
          </p>
          <p className="text-sm font-normal leading-relaxed text-reliableBlack">
            Informasi dalam artikel ini dapat berubah dan berbeda menyesuaikan dengan perkembangan,
            situasi, strategi bisnis, kemajuan teknologi, dan kebijakan tertentu tanpa pemberitahuan
            sebelumnya.
          </p>
        </div>
      </div>

      {/* Share Modal */}
      {shareOpen && <ModalShare visible={true} onClose={() => setShareOpen(false)} />}
    </section>
  );
};

export default DetailArticleBodySection;
