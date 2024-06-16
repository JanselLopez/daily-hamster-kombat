import IconChevronDown from "../assets/icons/IconChevronDown"

const Fab = ({onClick, className=""}:{onClick:()=>void,className?:string}) => {
  return (
    <div onClick={onClick} className={`cursor-pointer hover:bg-blue-300 transition-all flex justify-center items-center bg-blue-400 shadow-md rounded-full w-14 h-14 ${className}`}>
        <IconChevronDown/>
    </div>
  )
}

export default Fab