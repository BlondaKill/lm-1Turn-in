

const Promesas = () => {

    //Programaciom sincronica

    console.log("tarea 1");
    console.log("tarea 2");

    //Programacion asincronica

    setTimeout( () => {
        console.log("tarea A") 
    }, 2000)

    setTimeout( () => {
        console.log("tarea B")
    }, 1000)


  return (
    <div>Promises</div>
    
  )
}

export default Promesas