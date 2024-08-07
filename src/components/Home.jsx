import Navbar from '../lib/navbar.jsx';
import IconButton from "../lib/buttons.jsx";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={`w-full h-screen flex flex-col`}>
      <Navbar />
      <main className={`flex-grow flex justify-center items-center mb-20`}>
        <div className={`flex`}>
          <div>
            <img src="/assets/img/icons/cart.png" alt="" className={`h-96`}/>
          </div>
          <div className={`flex flex-col justify-center`}>
            <h1 className={`text-5xl font-black w-96`}>The best Online-shop in Moldova!</h1>
            <p className={`text-l w-96 mt-3.5`}>Start shopping today, ang discover the best deals only for you, with the fastest delivery!</p>
            <IconButton path={'/store'} text={'Shop now'} icon={faDoorOpen} params={`mt-10 px-6 py-2 text-xl font-semibold`} />
          </div>
        </div>
      </main>
    </div>
  )
}