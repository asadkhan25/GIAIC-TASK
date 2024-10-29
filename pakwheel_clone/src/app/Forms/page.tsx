import Link from "next/link"

export default function Forms(){
    return(
        <div className="my-20 ">
            <h1 className="text-5xl font-semibold text-center uppercase mb-32">
                enter your details
            </h1>

            <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Email" />

                <input type="nUMBER" className="mt-10 p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your CNIC-Number" />

                <input type="Number" className="mt-10 p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Card Number" />

                <input type="Adress" className="mt-10 p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Adress" />

                <div>
                <Link href="./Thankyou">
                <button className=" mt-24 py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button>
                 </Link>
                </div>
            </form>
            </div>
        
        </div>



    )
} 
