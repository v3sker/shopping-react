import Navbar from '../lib/navbar.jsx';
import IconButton from '../lib/buttons.jsx';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function ErrorPage() {
  return (
    <div className={`w-full h-screen flex flex-col`}>
      <Navbar />
      <div className={'w-full flex-grow flex justify-center items-center'}>
        <div className={'flex gap-5'}>
          <div>
            <img src={'src/assets/img/icons/404.jpg'} className={'w-64'}></img>
          </div>
          <div className={'flex flex-col justify-center'}>
            <div>
              <h1 className={'text-3xl font-bold'}>Oops.. Something went wrong!</h1>
              <p>Seems like the page you are looking for does not exist..</p>
              <IconButton path={'/'} text={'Go back'} icon={faRightFromBracket} params={'mt-10'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}