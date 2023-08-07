import Image from 'next/image';

const ProductPanel = ({ containerClassName, srcImage, block, ...props }) => {
  const classNameAssigned = ['relative h-full', block ? 'w-full' : '', containerClassName];

  return (
    <div className={classNameAssigned.join(' ')}>
      <Image src={srcImage} alt="image" {...props} />
    </div>
  );
};

ProductPanel.defaultProps = {
  containerClassName: '',
  srcImage: '',
  block: false,
};

export default ProductPanel;
