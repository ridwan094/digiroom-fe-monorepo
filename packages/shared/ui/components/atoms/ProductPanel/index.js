import Image from 'next/image';

const ProductPanel = ({ srcImage, ...props }) => {
  return <Image src={srcImage} {...props} />;
};

ProductPanel.defaultProps = {
  srcImage: '',
};

export default ProductPanel;
