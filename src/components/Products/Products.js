import Product from "./Product";
import "./products.css";
import { Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { connect } from "react-redux";

function Products({ items }) {
    return (
        <div className="products">
            <div className="products-header">
                <h3>Products</h3>
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="products-row">
                <Row className="g-3 justify-content-center" fluid>
                    {items.map((item) => (
                        <Product key={item.id} {...item} />
                    ))}
                </Row>
            </div>
        </div>
    );
}

Products.defaultProps = {
    items: storeItems,
};
const mapStateToProps = (state) => {
    return {
        products: state.cart.items,
    };
};

export default connect(mapStateToProps)(Products);
