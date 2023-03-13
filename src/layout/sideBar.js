import { useContext } from "react";
import { WeatherDataContext } from "../Context/WeatherData";

function SideBar() {
    const WeatherData = useContext(WeatherDataContext);
    const data = WeatherData.Now.suntype;
    return (
        <div className="rounded-r-3xl w-full lg:w-1/3 xl:w-1/3 bg-color-B6D5F0 p-5 px-5 font-quick">
            <div className="flex justify-between">
                <div className="w-1/2 text-4xl font-bold">
                    <h2>Weather Forecast</h2>
                </div>
                <div className="w-1/2 px-2">
                    <img
                        src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678556563/6f_sglfbv.png"
                        alt="#"
                    />
                </div>
            </div>
            {/* uv  */}
            <div className="my-2 ">
                <h2 className=" bg-color-5382B7 text-white font-black text-2xl rounded-2xl inline-block  p-2 text-center">
                    UV Index
                </h2>
                <div className="flex justify-between">
                    <img
                        className="w-1/3"
                        src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678556562/3_ru3cxl.png"
                        alt="#"
                    />
                </div>
            </div>
            <div className="">
                <h2 className="bg-color-5382B7 text-white font-black text-2xl rounded-2xl inline-block  p-2 text-center">
                    Sunrise & Sunset
                </h2>
                <div>
                    <div className="flex">
                        <img
                            className="w-1/3"
                            src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678590279/5f2_1_jdmenm.png"
                            alt="#"
                        />
                        <h2 className="inline-block my-auto text-2xl font-medium">
                            {data.sunrise}
                        </h2>
                    </div>
                    <div className="flex">
                        <img
                            className="w-1/3"
                            src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678590279/5f3_1_xgrj7n.png"
                            alt="#"
                        />
                        <h2 className="inline-block my-auto text-2xl font-medium">
                            {data.sunset}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar;
