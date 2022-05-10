
interface HamburgerProps {
    onClick?: () => void
}
const Hamburger = ({ onClick }: HamburgerProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="HAMBURGER-ICON space-y-1 text-white text-lg cursor-pointer leading-none  py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        >
            <span className="block h-1 w-8 bg-gray-100"></span>
            <span className="block h-1 w-8 bg-gray-100"></span>
            <span className="block h-1 w-8 bg-gray-100"></span>
            <span className="block h-1 w-8 bg-gray-100"></span>
        </button>
    )
}

export default Hamburger