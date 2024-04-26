import Link from "next/link"
import Image from "next/image"




export default function NavBar(){

    
    return (

        <div className="w-full h-28 flex flex-row justify-between px-12">



            <div className="w-1/4 h-full flex flex-row justify-start items-center">

                <Link href='/' className="font-bold font-sans text-lg text-white">TonePak</Link>

            </div>



            <div className="w-1/3 h-full flex flex-row justify-evenly items-center text-primary-text">

                <Link href='/#home' className="font-medium font-sans text-sm nav-link">Home</Link>
                <Link href='/' className="font-medium font-sans text-sm nav-link">About</Link>
                <Link href='/' className="font-medium font-sans text-sm nav-link">Playlists</Link>
                <Link href='/' className="font-medium font-sans text-sm nav-link">Features</Link>

            </div>



            <div className="w-1/4 h-full flex flex-row text-primary-text space-x-4">

                
                <div className="w-3/4 h-full flex flex-row items-center ">


                    <form action="" className="w-full flex flex-row items-center justify-end">

                        <button className="w-1/4">
                            <Image src='/search.svg' alt="search icon" width={20} height={20}/>
                        </button>
                    
                    </form>

                </div>


                <div className="w-1/4 h-full flex flex-row justify-end items-center">

                    <Link href='/' className="w-38 font-bold font-sans">Log In</Link>

                </div>



            </div>


            
        </div>

    )


}
