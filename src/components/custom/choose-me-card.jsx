"use client"

export default function ChooseMeCard({ icon, title, description, iconBgColor }) {

    
    return (

        <div
            className="p-6 cursor-pointer bg-[#d4d4d434] dark:bg-[#2626263b] w-[350px] md:w-[320px] lg:w-[32%] rounded-2xl  transition-all duration-300"
        >
            <div className="">
                <div
                    className="inline-block mb-3 p-2 rounded-xl shadow-lg text-white"
                    style={{ backgroundColor: iconBgColor }}
                >
                    {icon}
                </div>
                <h4 className="text-xl font-semibold dark:text-gray-50">{title}</h4>
                <p className="mt-2 text-[16px]">{description}</p>
            </div>
        </div>
        
    );
}
