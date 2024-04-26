import Hero from "./maincomponents/hero";
import NavBar from "./maincomponents/navbar";




export default function Home() {


  return (

    <main className="flex min-h-screen flex-col justify-start bg-dark space-y-10">
     
     <NavBar/>

     <Hero/>

    </main>

  );


}
