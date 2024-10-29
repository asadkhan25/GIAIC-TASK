import React from 'react'
import Link from 'next/link'


export default function Feature() {
  return (
    <section className='bg-gray-200 h-screen mt-10 '>
        
        <div className=' ml-24  bg-gray-200-200  place-content-center h- w-10/12'>
            <div className='bg-gray-200 flex justify-between '>
                <h1 className='font-semibold text-2xl inline mb-10 mt-10 '>Featured New Cars</h1>
                <a className=' hover:text-blue-600 hover:underline mt-10' href="#">View All New Cars</a>
            </div>
            <div>
                <a className='font-semibold text-xl border-4 border-b-blue-800' href="">Popular</a>
                <a className='ml-10 font-semibold text-lg text-gray-500' href="">Upcoming</a>
                <a className='ml-10 font-semibold text-lg text-gray-500' href="">Newly Launched</a>
            </div>
            <div id='' className='flex justify-evenly space-x-6 ml-12 mt-4'>
                <Link href="./cars/car1" className='text-center w-3/12 px-3 mt-8 mb-5 h-72 bg-white'>
                    <div className=' hover:scale-105 transform duration-500 ease-in-out'>
                        <img className='mt-2' src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Grande" />
                        
                        <h3 className='hover:text-blue-500 text-blue-900 font-bold  '>Toyota Corolla</h3>
                        <p className='text-green-600'>PKR 59.7 - 75.5 lacs</p>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>★</span>
                        <span className='text-orange-500 font-extrabold'>☆</span>
                        <span className='text-orange-500 font-extrabold'>☆</span>
                        <span className='text-gray-500 font-bold pl-3'>621 Reviews</span>
                    </div>
                </Link>
                <Link href="./cars/car2"  className='text-center w-3/12 px-3 mt-8 mb-5 h-72 bg-white' >
                    <div className='hover:scale-105 transform duration-500'>
                        <img  className='mt-10 mb-5' src="https://www.musclecarszone.com/wp-content/uploads/2015/12/Suzuki-Alto-Works-Is-One-Awesome-Hatchback-cover.jpg" alt="" />
                    
                    <h3 className='font-bold text-blue-900 hover:text-blue-500'>Suzuki Alto</h3>
                    <p className='text-green-600'>PKR 23.3 - 30.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold'>199 Reviews</span>
                    </div>
                </Link>
                <Link href="./cars/car3"  className='text-center w-3/12 px-3 mt-8 mb-5 h-72 bg-white' >
                    <div className='hover:scale-105 transform duration-500'>
                    <img className='mt-7 mb-4' src="https://th.bing.com/th/id/OIP.KKBj7EW2mKuUY351ZkJ1hgAAAA?rs=1&pid=ImgDetMain" alt="City-Car" />
                    <h3 className='font-bold text-blue-900 hover:text-blue-500'>Honda City</h3>
                    <p className='text-green-600'>PKR 46.5 - 58.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold'>458 Reviews</span>
                    </div>
                </Link>
                <Link href="./cars/car4"  className='text-center w-3/12 px-3 mt-8 mb-5 h-72 bg-white' >
                    <div className='hover:scale-105 transform duration-500'>
                    <img className='mt-2 mb-6' src="https://pictures.dealer.com/b/bernardihonda/1234/eef7eea8f5fe4b5eacc7a058df8a643d.jpeg?impolicy=downsize_bkpt&w=2500" alt="Civic" />
                    <h3 className='font-bold text-blue-900 hover:text-blue-500'>Honda Civic</h3>
                    <p className='text-green-600'>PKR 86.6 - 99.0 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold'>357 Reviews</span>
                    </div>
                </Link>
               
            </div>
        </div>

    </section>
    

  )
}
