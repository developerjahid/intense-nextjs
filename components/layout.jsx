import Navbar from "./navbar";
import { Fragment } from "react";
import Head from "next/head";

const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Intense Bit Price</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <Navbar />
            <div
                className="
            container"
            >
                {props.children}
            </div>
        </Fragment>
    );
};

export default Layout;
