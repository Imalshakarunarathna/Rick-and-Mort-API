import rick from "../assets/rick.jpg"

const Body = () => {
  
  return (
    <div className="w-full m-0 p-0 xl:flex-row flex-col justify-center items-center
    min-h-screen gap-10 text-slate-900">
      <div>
       <h1 className="text-8xl xl:text-8xl md:text-7xl max-sm:text-7xl
       font-sans font-semibold text-center mt-[200px] max-sm:mt-[100px]">
      
        <span className="inline-block">
          The Rick and
  
          </span>
        <span className="inline-block ml-4">
           Morty API
            </span>
          </h1>
          <img src={rick} alt="Logo" className="absolute text-center w-[100%]
          h-[60%] object-contain opacity-5 z-0  mt-[-350px] max-sm:mt-[-300px]"></img>
    </div>
    <div>
   
      </div>
      </div>
   
   
  )
}

export default Body