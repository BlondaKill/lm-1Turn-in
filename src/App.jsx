import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"




const App = () => {
  return (
    <>
      
      <TituloPrincipal/> 
      <NavBar/> 
      <ItemListContainer greeting = {"Welcome to La Mala"}/>   
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <ItemDetailContainer/>
    </>
  )
}

export default App