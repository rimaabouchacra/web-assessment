import Definition from "../../components/definition";
import Header from "../../components/header";
import Jurisdiction from "../../components/jurisdiction";
import MenuBar from "../../components/menu";
import Navbar from "../../components/nav"
const Main=()=>{
    return(
        <div>
          
          <Navbar/>
          <Header/>
          <MenuBar/>
          <Definition/>
          <Jurisdiction/>
        </div>
    )
}
export default Main;