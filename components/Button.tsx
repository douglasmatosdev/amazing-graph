interface ButtonProps {
    text?: string
}

const Button = ({ text = '' }: ButtonProps) => {
    return (
        <button className="bg-orange md:mr-auto p-4 sm:p-6 w-9/12 md:h-16 md:p-2 md:w-7/12 h-25 text-white active:bg-orange font-bold text-xl rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            {text}
        </button>
    )
}

export default Button