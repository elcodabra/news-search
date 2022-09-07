import Footer from "../footer/Footer";
import Header from "../header/Header";


const Layout = ({
    children,
    loader,
    noNewsFound,
    searchResult,
}) => {
    return (
        <div>
            <Header
                loader={loader}
                noNewsFound={noNewsFound}
                searchResult={searchResult}
            />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;