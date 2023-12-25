const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {
                links.map((link, index) => {
                    return (
                        <li key={index} className="py-2">
                            <a href={link.path} className="text-lg text-slate-400 hover:text-white font-semibold">{link.title}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default MenuOverlay;