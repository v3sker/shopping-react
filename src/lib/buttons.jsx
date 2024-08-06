import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function IconButton({ path, text, icon, params }) {
  return (
    <Link to={path}>
      <p
        className={`flex justify-center items-center gap-2 w-fit text-center text-white bg-neutral-800 px-3.5 py-1 
        shadow-md border-2 border-neutral-800 rounded-md transition font-medium hover:bg-white hover:text-black
        ${params}`}
      >
        <FontAwesomeIcon icon={icon} /> {text}
      </p>
    </Link>
  )
}