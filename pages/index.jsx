import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Prices from "../components/prices";

const Index = (props) => {
    console.log(props.bpi.USD.code);

    return (
        <Layout>
            <div className="index">
                <h1>Helllo I'm Index</h1>
                <Prices
                    code={props.bpi.USD.code}
                    price={props.bpi.USD.rate_float}
                    description={props.bpi.USD.description}
                />
            </div>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const result = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    const data = await result.json();

    return {
        bpi: data.bpi,
    };
};

export default Index;
