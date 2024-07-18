import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Header = () => {

  return (
    <div className=" sticky top-0 z-10 bg-white flex items-center justify-between p-0 text-slate-900">
        <div className="flex justify-between items-center max-container">
        <img src={logo} className="w-20 md:w-36 object-cover"/>
        </div>

        <div className="flex gap-20 text-lg font-bold p-5">
            <button className="rounded-full w-full  items-center
            justify-center hover:text-orange-400">
                Docs
            </button> 
 
             <button className="rounded-full max-w-full flex items-center
             justify-center   hover:text-orange-400" >
                About
            </button>

            <button className=" rounded-md  items-center  text-sm
            justify-center  hover:text-white flex-1 flex gap-16 max-lg:hidden
             hover:bg-orange-400 whitespace-nowrap border border-solid border-orange-400 p-2.5">
                SUPPORT US
             
            </button>

            <div className="hidden max-lg:block hover:cursor-pointer">
                <i className="fa fa-heart w-8 h-8 text-center pt-1 border 
                bg-orange-400 border-solid border-orange-400 text-white rounded-lg"></i>
                </div>

           
   </div>
        </div>

  )
}

export default Header