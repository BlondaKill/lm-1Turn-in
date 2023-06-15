import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Welcome a La Mala"}/>
      <TituloPrincipal/>     
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      
    </>
  )
}

export default App