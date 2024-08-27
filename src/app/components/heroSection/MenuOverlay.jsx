import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return (
        <ul className="lg:hidden flex flex-col py-4 items-center">
            {Array.isArray(links) && links.length > 0 && links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay