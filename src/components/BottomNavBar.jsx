import NavLink from "./NavLink";
import { UserCircleIcon, CodeBracketIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid"

const navLinks = [
    {
        title: "About",
        path: "#about",
        icon: <UserCircleIcon className="h-6 w-6" />
    },
    {
        title: "Projects",
        path: "#projects",
        icon: <CodeBracketIcon className="h-6 w-6" />
    },
    {
        title: "Contact",
        path: "#contact",
        icon: <ChatBubbleLeftIcon className="h-6 w-6" />
    }
]

const BottomNavBar = () => {   
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-t border-slate-800">
            <div className="menu block md:hidden md:w-auto" id="navbar">
                <ul className="flex justify-evenly p-2 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} icon={link.icon} />
                                </li>
                            ))
                        }
                </ul>
        </div>
        </nav>
    );
}


export default BottomNavBar;