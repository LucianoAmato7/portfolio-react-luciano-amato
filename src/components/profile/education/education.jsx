import { Link } from "react-router-dom";
import { profile_data } from "../../../data/profile_data.js";

const Education = () => {
    return (
        <>
        <h3 className="italic text-xl md:text-3xl mt-5 w-fit px-2 border-t border-slate-800 rounded-t-lg font-medium bg-slate-800 text-slate-100 tracking-widest">EDUCACIÓN:</h3>
        <div className="flex flex-col items-center md:flex-row justify-around mb-16 md:mb-32 w-5/6 md:w-4/6 bg-slate-800 rounded-2xl  shadow-2xl">
            {profile_data.education.map((tittle, index) => (
                //${tittle.institute == "CoderHouse" ? "mb-12 md:mb-0" : ""}
                <div className={`flex flex-col justify-between items-center text-slate-200 bg-slate-700 rounded-xl bg-opacity-60 pb-4 pt-2 my-6 drop-shadow-lg`} key={index} data-aos="zoom-in">
                    <Link className="w-2/3 p-4" to={`${tittle.url}`} target="_blank">
                        <img className={`hover:shadow-md ease-out duration-300 hover:shadow-slate-500 drop-shadow-2xl shadow-black w-64 border rounded-full ${tittle.institute == "ORT Argentina" ? "border-4 border-blue-900" : ""}`} src={tittle.image} alt={tittle.institute} />
                    </Link>
                    <h3 className="text-lg py-1 tracking-wider italic">{tittle.career}</h3>
                    <h4 className="text-sm text-slate-500">{tittle.status}</h4>
                </div>
            ))}
        </div>
        </>
    );
};

export default Education;