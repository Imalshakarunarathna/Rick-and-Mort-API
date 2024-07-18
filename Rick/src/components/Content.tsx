import { useEffect, useState } from "react";

interface Character{
    id:number;
    name:string;
    status:string;
    species:string;
    image:string;
 
}
interface ContentProps{
    updateCharacterCount:(count:number)=>void;
}

const Content :React.FC<ContentProps>  = ({updateCharacterCount}) => {
   const[characters , setCharacters]=useState<Character[]>([]);

   useEffect(()=>{
    const fetchCharacters=async()=>{
        try{
        const response=await fetch('https://rickandmortyapi.com/api/character');
        if(!response.ok){
            throw new Error('Network Error!')
        }
        const data= await response.json();
        setCharacters(data.results);
        updateCharacterCount(data.info.count);
    }catch(error){
        console.error("Fetching data Error",error);
    }
};
        fetchCharacters();
    
   },[updateCharacterCount]);
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-[200px] pt-36
         pb-36 gap-x-0 gap-y-8 text-slate-300 ml-10 max-sm:ml-0">
          
        
          {characters.map((character) => (
        <div key={character.id} 
           className="bg-slate-700 rounded-2xl  flex flex-col 
           lg:flex-row items-center max-sm:items-start gap-4 w-[70%] 
           max-sm:w-auto">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-60 lg:w-[200px] lg:h-[200px] object-cover rounded-l-xl rounded"
          />
          <div className="max-sm:pl-3">
            <h2 className="text-xl font-semibold ">{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Last known location:</p>
           
            <p>Species: {character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content