interface ListItemProps {
    color?: string
    text?: string
    href?: string
}

const ListItem = ({ color = 'white', text = '', href = '#' }: ListItemProps) => {
    return (
        <li className="nav-item">
            <a
                className={`px-3 py-2 flex items-center text-xs capitalize font-bold leading-snug text-${color} hover:opacity-75`}
                href={href}
            >
                <span className="ml-2">{text}</span>
            </a>
        </li>
    )
}

export default ListItem