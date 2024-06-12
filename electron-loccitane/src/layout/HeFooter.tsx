import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

function HeFooter({props}:any){
    return (
    <>
    <Header/>
    {props}
    <Footer/>
    </>
    )
}

export default HeFooter;