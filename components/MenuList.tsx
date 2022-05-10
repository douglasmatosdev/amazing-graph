import ListItem from "./ListItem"

const MenuList = () => {
    return (
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <ListItem color="gray-100" text="Home" />
            <ListItem color="gray-100" text="Features" />
            <ListItem color="gray-100" text="Contact" />
        </ul>
    )
}

export default MenuList