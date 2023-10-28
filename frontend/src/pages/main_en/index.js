import Definition from "../../components/definition";
import Header from "../../components/header";
import Jurisdiction from "../../components/jurisdiction";
import MenuBar from "../../components/menu";
import Navbar from "../../components/nav"
import Violation from "../../components/violations";
const Main=()=>{
    return(
        <div>
          <Navbar activePage="English"/>
          <Header/>
          <MenuBar/>
          <Definition/>
          <Jurisdiction/>
          <Violation/>
        </div>
    )
}
export default Main;