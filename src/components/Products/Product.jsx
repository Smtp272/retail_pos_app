import { Button, Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
import formatCurrency from "../utilities/formatCurrency";
import { useState } from "react";
import "./product.css"
function Product({ id, unitPrice, name, imgUrl }) {
    const [added, setAdded] = useState(false);

    const toggleAdded = () => {
        setAdded((added) => !added);
    };

    const quantity = 0;
    return (
        <Card style={{ maxWidth: "325px", minWidth: "325px",marginLeft:"20px"}} className="product-card">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                width="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between mb-4 align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">
                        {formatCurrency(unitPrice)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    <Button className={`w-100 ${added? "grey":"normal"}`}  onClick={toggleAdded}>
                        {added ? "Remove from cart" : "Add to cart"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

Product.propTypes = {
    id: PropTypes.number,
    unitPrice: PropTypes.number,
    name: PropTypes.string,
    imgUrl: PropTypes.string,
};
export default Product;
