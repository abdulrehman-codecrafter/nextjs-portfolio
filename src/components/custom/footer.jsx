
"use client"
const Footer = () => {
    return (
        <footer className="mt-20 py-4 dark:text-[#A1A1AA]">
            <div className="border-t border-[#d4d4d891] dark:border-[#d4d4d821]"></div>
            <div className="container mx-auto text-center py-9 ">
                <p>&copy; {new Date().getFullYear()} Abdulrahman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;