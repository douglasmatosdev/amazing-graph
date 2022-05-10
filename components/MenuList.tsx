import ListItem from "./ListItem"

const MenuList = () => {
    return (
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <ListItem text="Home" />
            <ListItem text="Features" />
            <ListItem text="Contact" />
        </ul>
    )
}

export default MenuList