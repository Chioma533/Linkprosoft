import { Link } from 'react-router-dom';

const config = {
    login: {
        headerBg: "bg-black",
        logoColor: "text-white",
        buttonText: "Sign Up",
        buttonStyle: "bg-[#006FA3] text-white",
        pageLink: "/register",
    },
    signup: {
        headerBg: "bg-black",
        logoColor: "text-white",
        buttonText: "Login",
        buttonStyle: "bg-white text-[#006FA3]",
        pageLink: "/login",
    },
};

const HeaderBanner = ({ mode }) => {
    const current = config[mode];

    return (
        <header className={`w-full border-b-[3px] sticky top-0 z-[9999] ${current.headerBg}`}>
            <nav className="w-full">
                <div className="w-[90%] mx-auto py-4 flex items-center justify-between">

                    <div className={`text-3xl font-bold cursor-pointer ${current.logoColor}`}>
                        <Link to="/">Linkprosoft</Link>
                    </div>

                    <Link
                        to={current.pageLink}
                        className={`px-6 py-2 rounded-md font-bold ${current.buttonStyle}`}
                    >
                        {current.buttonText}
                    </Link>

                </div>
            </nav>
        </header>
    );
};

export default HeaderBanner;