import Image from "next/image"



interface HeroCardProps{
    image: string;
    content: string;
}




export default function HeroCard({image, content}:HeroCardProps){

    const imageDetail = `/${image}`

    return(

        <div className="w-5/6  h-24 flex flex-row items-center space-x-2 card-dark">

            <div className="w-24 h-24 rounded-full bg-black relative">

                <Image src={imageDetail} alt="user avatar" layout="fill" objectFit="cover"/>

            </div>

            <div className="w-3/4 h-full flex flex-col justify-around pl-2">

                <span className="font-xsm font-semibold font-sans text-primary-text">{content}</span>

            </div>

        </div>

    )
}