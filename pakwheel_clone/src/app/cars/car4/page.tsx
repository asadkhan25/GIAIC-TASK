import Link from "next/link"

export default function car1()
{
    return(
        <div>
            <div className="flex flex-col w-10/12 ml-24 place-items-center bg-white mt-10 ">
                <h1 className="mt-16 font-bold underline text-center text-3xl">Honada Civic 2024 Price in Pakistan, Images, Reviews & <br /> Specs</h1>
                <div className="mt-10">
                    <img className="w-12/12 h-80" src="https://pictures.dealer.com/b/bernardihonda/1234/eef7eea8f5fe4b5eacc7a058df8a643d.jpeg?impolicy=downsize_bkpt&w=2500" alt="Civi-car" />
                </div>
                <div className="flex space-x-10 mt-10">
                    <button className="bg-blue-700 text-white text-sm w-36 h-10 rounded-md">Book a Test Drive</button>
                    <button className="text-sm w-40 h-10 rounded-md border border-black">Request Bank Finance</button>
                    <button className="text-sm w-36 h-10 rounded-md border border-black">Visit Place</button>
                    <button className="text-sm w-36 h-10 rounded-md border border-black">Car Inspection</button>
                </div>
                <div>
                    <h3 className="mt-5 mb-10 font-bold underline cursor-pointer text-xl text-center">Vehicle Description</h3>
                    <p className="space-x-12"><b>Number of Doors</b>: 4 <b>Engine</b>: 1800CC <b>Conditon</b>: 8.5/10
                     <b>Driven</b>: 9500Km <b>Suspension Type </b>: Soft Suspension </p> 
                    <p className="space-x-12 items-start"> <b>Avg</b>: 13Km-per-Ltr <b>Transmission</b>: Automatic <b>Fuel Type</b>: High Octane</p>
                </div>
                <div className="text-center my-10">
                    <h2 className="font-semibold cursor-pointer">PKR 60,00,000</h2>
                    <Link href="/Forms">
                    <button className="mt-10 w-40 h-14 rounded-md text-white font-semibold bg-blue-700">Make Payment</button>
                    </Link>
                </div>
                
            </div>
           
        </div>
    )
}
