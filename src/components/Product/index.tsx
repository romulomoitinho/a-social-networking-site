import Classes from "./index.module.css";

interface productProps {
  ProductImage?: string;
  ProductName?: string;
  ProductPrice?: number;
}

const Product: React.FC<productProps> = ({
  ProductImage = "src/assets/img/noImage.png",
  ProductName = "Produto",
  ProductPrice = 10,
}) => {
  return (
    <div className={Classes.container}>
      <img src={ProductImage} alt="Imagem do usuário" />
      <div>
        <p>{ProductName}</p>
        <p className={Classes.priceText}>{ProductPrice}</p>
      </div>
    </div>
  );
};

export default Product;
