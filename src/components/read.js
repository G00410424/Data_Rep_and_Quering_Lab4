import { useEffect, useState} from "react";
import Books from "./books"; //this makes read the parent of books!
import axios from "axios";

function Read(){

    const [data, setData] = useState([]);
    // EXAMPLE: const [name, setName] = useState('Martin');

  //react hook  
  useEffect(
    ()=>{
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920') //"promise"
        //got the data, what now?
        .then(
            (response)=>{
                setData(response.data.books)
            }
                
        ) 
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    },[]
  );
    

    return(
        <div className="App">
            <h2>Hello from my READ component!</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}
export default Read;