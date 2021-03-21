import {isNil} from "lodash"

const fetchGetShips = () =>{

   return fetch("https://swapi.dev/api/starships/").then((res)=>res.json()).then((data)=> data.results).catch((err)=>{
       console.error("GetShipsError:", err)
   })

}

export const getShips = () => async dispatch =>{
  const data = await fetchGetShips();
  if(!isNil(data)){
      dispatch({type:"ADD_SHIPS",payload:data})
  }
}

export const removeShips = () => dispatch =>{
      dispatch({type:"DELETE_SHIPS"})
}


