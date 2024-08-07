import {Link} from "react-router-dom";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const checkIfActivePage = (path) => {
  return (window.location.pathname === path);
}

export default function Navbar() {
  return (
    <nav className={'flex items-center w-full py-4'}>
      <div className={'flex flex-grow w-1/3 h-fit align-center gap-6'}>
        <Link
          to={'/'}
          className={`align-middle text-l hover:text-blue-700 transition 
          ${checkIfActivePage('/') ? 'text-black font-semibold' : 'text-neutral-500'} `}
        >
          HOME
        </Link>
        <Link
          to={'/store'}
          className={`text-l hover:text-blue-700 transition 
          ${checkIfActivePage('/store') ? 'text-black font-semibold' : 'text-neutral-500'} `}
        >
          STORE
        </Link>
      </div>
      <div className={'flex-grow w-1/3 flex justify-center'}>
        <Link to={'/'}>
          <img src="/src/assets/img/logos/bitwave.png" alt="bitwave logo" className={'w-12'}/>
        </Link>
      </div>
      <div className={'flex-grow flex flex-row-reverse items-center gap-4 w-1/3'}>
        <img src="/src/assets/img/icons/default-profile-pic.jpg" alt="profile picture" className={'w-8 rounded-full cursor-pointer'}/>
        <span className={`h-6 w-0.5 bg-neutral-400`}></span>
        <Link to={'/cart'}>
          <p
            className={`flex justify-center items-center gap-2 w-fit text-center text-neutral-500 bg-white px-3 py-1 
            rounded-md transition font-medium hover:bg-neutral-800 hover:text-white`}
          >
            My Cart <FontAwesomeIcon width={15} icon={faCartShopping} />
          </p>
        </Link>
      </div>
    </nav>
  )
}