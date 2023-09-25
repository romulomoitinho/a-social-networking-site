import Classes from "./index.module.css";
import { CaretUp } from '@phosphor-icons/react';
import Product from "../Product";
 
const PopularProducts: React.FC = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.popularProductsDiv}>
        <p>Itens em Destaque</p>
        <CaretUp />
      </div>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  );
};

export default PopularProducts;
