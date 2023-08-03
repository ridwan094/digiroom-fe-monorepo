const Card = ({ children, className }) => {
	return <div className={...className}>{children}</div>;
};

Card.defaultProps = {
	className: '',
};

export default Card;
