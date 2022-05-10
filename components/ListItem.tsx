interface ListItemProps {
    text?: string
    href?: string
}

const ListItem = ({ text = '', href = '#' }: ListItemProps) => {
    return (
        <li className="nav-item">
            <a
                className={`px-3 py-2 flex items-center text-gray-100  xl:text-2xl capitalize font-bold leading-snug hover:opacity-75`}
                href={href}
            >
                <span className="ml-2">{text}</span>
            </a>
        </li>
    )
}

export default ListItem