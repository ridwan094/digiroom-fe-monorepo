const ProductPanel = ({ containerClassName, imageProductPanelClassName, srcImage }) => {
  return (
    <div className={containerClassName}>
      <img src={srcImage} alt="image" className={imageProductPanelClassName} />
    </div>
  );
};

ProductPanel.defaultProps = {
  containerClassName: '',
  imageProductPanelClassName: '',
  srcImage: '',
};

export default ProductPanel;
