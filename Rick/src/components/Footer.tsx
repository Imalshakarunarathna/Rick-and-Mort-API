import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";


interface FooterProps {
  characterCount: number;
  
}
 
const Footer: React.FC<FooterProps> = ({ characterCount }) => {
  const[locationCount,setLocationCount]=useState<number>(0);
  const[episodeCount,setEpisodeCount]=useState<number>(0);

  useEffect(()=>{
    const fetchLocations=async()=>{
      try{
        const response=await fetch('https://rickandmortyapi.com/api/location');
        if(!response.ok){
          throw new Error("Network Error!");
        }
        const data=await response.json();
        setLocationCount(data.info.count);
      }catch(error){
        console.error("Data fetching error",error);
      }
    };

    const fetchEpisodes=async()=>{
      try{
        const response=await fetch('https://rickandmortyapi.com/api/episode');
        if(!response.ok){
          throw new Error("Network Error!");
        }
        const data=await response.json();
        setEpisodeCount(data.info.count);
      }catch(error){
        console.error("Data Fetching Error!",error);
      }
    };
 
    fetchLocations();
    fetchEpisodes();
    },[]);

  



  return (
    <div className="max-container max-sm:pl-5 max-sm:text-sm">
      <div className="flex flex-col justify-between items-center text-slate-500 font-sans text-m">
      
        <div className="flex gap-10 p-28">
          <p>CHARACTERS :{characterCount}</p>
          <p>LOCATIONS :{locationCount}</p>
          <p>EPISODES :{episodeCount}</p>

        </div>

        <div className="flex mt-[-100px]">
        <span>SERVER STATUS</span>
        </div>

        <div className="flex gap-10 p-5 mt-20">
        
           <SocialIcon network="github" url="https://github.com/afuh/rick-and-morty-api"style={{ width: 40, height: 40 }} bgColor="none"/>
           <SocialIcon network="twitter" url="https://twitter.com/rickandmortyapi"style={{ width: 40, height: 40 }} bgColor="none"/>
    <a href="https://rickandmortyapi.com/support-us">
           <i className="fa fa-heart w-12 h-12 pt-3
                bg-none  text-white rounded-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
