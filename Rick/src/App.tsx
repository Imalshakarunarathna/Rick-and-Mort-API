import { useState } from "react";
import Body from "./components/Body";
import Content from "./components/Content";
import Footer from "./components/Footer";


import Header from "./components/Header";
function App() {
  
  const [characterCount,setCharacterCount]=useState<number>(0);
  const updateCharacterCount=(count:number)=>{
    setCharacterCount(count);
  }
 return (
    <div>
      <Header/>
      <Body/>

      <section className="max-container bg-slate-800 mt-[-600px] max-sm:mt-[-300px]" >
      <Content updateCharacterCount={updateCharacterCount}/>
      </section>
   

    <section className="bg-slate-950">
    <Footer characterCount={characterCount}/>
    </section>

  </div>
  );
}

export default App
