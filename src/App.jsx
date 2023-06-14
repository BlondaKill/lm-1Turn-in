import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Welcome a La Mala"}/>
      <TituloPrincipal/>
      <ItemCount/>
      
    </>
  )
}

export default App