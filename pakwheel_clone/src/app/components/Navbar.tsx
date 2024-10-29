import "../globals.css";
import Image from 'next/image'
import Link from "next/link"

export default function Navbar ()
{
    
    return(
        <nav className="   text-gray-100  px-6 py-3 font-sans font-bold "> 
           <div className=" items-center justify-between w-auto" >
                <div id="sb">
                <Image  src="/images/mobile.jpeg" alt="mobile" width={30} height={40} className="ml-3 mb-4 mt-3 inline"/>
                    <a  href=""> Download App via Sms</a>
                    <button className=" text-red-700 text-lg font-bold" id="sb0">اردو</button>
                    <button id="sb1"  >Sign Up</button>
                    <button id="sb2">Sign In</button>

                </div>
                <div className="flex items-center justify-evenly space-x-6">
                    <Link href="/">
                    <img className="w-40" src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="Pakwheels.com"  />
                    </Link>
                   
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">Used Cars</Link>
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">New Cars </Link>
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">Bikes</Link>
                    <Link className="hover:bg-white rounded-md w-24 text-center hover:text-red-500" href="/">Auto Store</Link>
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">Videos</Link>
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">Forums</Link>
                    <Link className="hover:bg-white rounded-md w-20 text-center hover:text-red-500" href="/">Blogs</Link>
                    <Link className="hover:bg-white rounded-md w-24 text-center hover:text-red-500" href="/">More 
                    <sup className=" hover:bg-black bg-blue-700 rounded">
                    <button className=" h-8 w-10 ">New</button>
              </sup></Link>
                    <button className="bg-red-700 px-3 pb-1 rounded-md">Post an Ad</button>
                </div>
            </div>
        </nav>
    )
}

