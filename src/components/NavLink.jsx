import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
    return (
        <Link 
        href={href} 
        className="block pl-3 pr-4 test-[#ADB7BE] sm:text-small rounded md:p-0 text-slate-500 hover:text-white">
            <div className="flex flex-col items-center">
                {icon}
                <span>{title}</span>
            </div>
        </Link>
    );
}

export default NavLink;