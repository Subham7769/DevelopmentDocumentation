import "./ProductResearchView.css";
import TableView from "../../Common/TableView/TableView";
import { useSelector } from "react-redux";
const ProductResearchView = () => {
  const products = useSelector((state) => state.ProductSlice.products);
  return (
    <div className="ProductResearchView">
      <h4>Product Research View</h4>
      <TableView products={products} />
    </div>
  );
};

export default ProductResearchView;
