const Prices = (props) => {
    return (
        <div className="prices">
            <h4>Prices</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {props.description} :
                    <span className="badge bg-danger">{props.code}</span> $
                    {props.price}
                </li>
            </ul>
        </div>
    );
};

export default Prices;
