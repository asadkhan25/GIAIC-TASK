import "../globals.css";
export default function Hero ()
{
    
    return(

            <div className="font-sans ">
               
                    <div className=" flex justify-center p-10 bg-white font-semibold text-2xl  ">
                    <h1>Sell Your Car on PakWheels and Get the Best Price</h1>
                    </div>
                    <div className="flex justify-evenly items-center ">
                        <div className="bg-white ml-36 ">
                        <h1 className="font-semibold text-xl  text-sky-900 mb-2">Post Your Ad on PakWheels</h1>
                        <ul  className=" space-y-1.5">
                            <li >✓ Post your Ad for Free in 3 Easy Steps</li>
                            <li> ✓ Get Genuine offers from Verified Buyers</li>
                            <li> ✓ Sell your car Fast at the Best Price</li>
                            
                        </ul>
                        <button className="mt-5 bg-red-700 text-white px-10 py-3 rounded-md"> Post Your Ad</button>
                        </div>

                        

                        <div className="bg-white font-semibold text-xl text-gray-400"> <h1>OR</h1></div>

                        <div className="bg-white mr-28">
                        <h1 className="font-semibold text-xl text-sky-900 mb-2">Try PakWheels Sell It For Me</h1>
                        <ul className="space-y-1.5">
                            <li> ✓ Dedicated Sales Expert to Sell your Car</li>
                            <li> ✓ We Bargain for you and share the Best Offer</li>
                            <li> ✓ We ensure Safe & Secure Transaction</li>
                        </ul>
                        <button  className="bg-blue-500 text-white mt-5 px-10 py-3 rounded-md">Register Your Car</button>
                        </div>
                    </div>
                
            </div>
    )
}
