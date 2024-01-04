import PropTypes from 'prop-types';

interface CartProps {
    product: SPData
    changeAmount: CallableFunction
}

function CartProduct({product, changeAmount}: CartProps) {

    return (
        <li>
            <a href="#">
                <section className="img-big-wrapper">
                    <img src={product.image.default} alt="" />
                </section>
                <div className="div-big-wrapper-description">
                    <h3>{product.title}</h3>
                    <p className="line-through-p">R$ {product.oldPrice}</p>
                    <p className="main-price-p">
                        R$ {product.price}
                        <span>{product.percentOFF}% OFF</span>
                    </p>
                    <div>
                        <button
                            onClick={() => {
                                changeAmount(product, true);
                            }}
                        >
                            +
                        </button>
                        <output>{product.occurrences}</output>
                        <button
                            onClick={() => {
                                changeAmount(product, false);
                            }}
                        >
                            -
                        </button>
                    </div>
                </div>
            </a>
        </li>
    );
}

CartProduct.propTypes = {
    changeAmount: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

export default CartProduct;
