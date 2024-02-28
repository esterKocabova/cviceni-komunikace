import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {

  const handleClick = () => {
    onSelectPrice(price)
  }
  return (
    <div onClick={handleClick} className="product">
      <img src={image} className="product__image" />
      <div className="product__body">{name}: {price} Kč</div>
    </div>
  );
};
