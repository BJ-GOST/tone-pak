import Image from "next/image"
import Link from "next/link"
import HeroCard from "../cardcomponents/herocard"




export default function Hero(){


    return(

        <div className="w-full min-h-screen relative">




            <div className="w-full h-screen absolute z-0 flex flex-row">


                <div className="w-1/3 h-full"></div>


                <div className="w-1/3 h-full flex flex-col items-center pt-8">

                    <Image src='/headphone.png' alt="image of headphone" height={400} width={400} className="rotate-45"/>

                </div>


                <div className="w-1/3 h-full flex flex-col"></div>


            </div>




            <div className="w-full h-full absolute z-10 bg-transparent flex flex-row">



                <div className="w-1/4 h-full flex flex-col relative">



                    <div className="w-full h-24 flex flex-col items-center space-y-2 absolute bottom-60">

                        <HeroCard image='user.jpg' content="TonePak transformed my listening experience"/>

                    </div>



                </div>



                <div className="w-1/2 h-full flex flex-col items-center relative space-y-6">

                    <h1 className="text-5xl font-sans font-bold text-white"> All Your <span className="text-5xl border-sky border-b-4">music</span> in <span className="text-5xl p-2 rounded-full bg-sky circle">one</span> place </h1>
                    <p className="font-sans text-lg text-white font-semibold text-center">TonePak makes listening easier by creating a single playlist from all your streaming services so you can listen from one place</p>

                    <Link href="/" className="p-4 rounded-3xl blue-gradient text-primary-text font-bold font-sans absolute bottom-44"> Create a Playlist</Link>

                </div>



                <div className="w-1/4 h-full relative">


                    <div className="w-full h-44 absolute bottom-40 flex flex-col">


                        <div className="w-1/4 h-0 border-sky border-b-4"></div>

                        <div className="w-1/2">

                            <span className="font-sans font-bold text-primary-text">Over 5000 Playlists</span>
                            <p className="font-sans font-semibold text-primary-text text-sm">You can begin by searching for what your friends listen to</p>
                        
                        </div>

                    </div>



                </div>



            </div>




        </div>

    )


}