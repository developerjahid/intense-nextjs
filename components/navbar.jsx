import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <span>Intense Bitprice by developerjahid.</span>

                <div className="flex">
                    <Link href="/">
                        <a className="me-2 text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-white">About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
