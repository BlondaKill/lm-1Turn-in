import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import Promesas from "./componentes/Promesas/Promesas"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Welcome a La Mala"}/>
      <TituloPrincipal/>     
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <Promesas/>
      
    </>
  )
}

export default App