import { useContext } from "react";
import { WeatherDataContext } from "../Context/WeatherData";

function SideBar() {
    const WeatherData = useContext(WeatherDataContext);
    const data = WeatherData.Now.suntype;
    const now = WeatherData.Now;
    return (
        <div className="rounded-r-3xl w-full lg:w-1/3 xl:w-1/3 bg-color-#CAE1F6 p-5 px-5 font-quick">
            <div className="flex justify-between mb-8">
                <div className="w-1/2 text-4xl my-auto font-bold">
                    <h2>Weather Forecast</h2>
                </div>
                <div className="w-1/2">
                    <img
                        src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678895846/LOGO_j7jy20.png"
                        alt="#"
                    />
                </div>
            </div>

            {/* uv  */}
            <div className="mb-5 ">
                <h2 className=" bg-color-5382B7 text-white font-black text-2xl rounded-2xl my-2  p-1 text-center">
                    UV INDEX
                </h2>
                <div className="flex justify-between">
                    <h2 className="inline-block my-auto text-2xl font-medium">
                        UV now: {now.uv}
                    </h2>
                    <img
                        className="w-1/2"
                        src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678895846/UV_lkbc5e.png"
                        alt="#"
                    />
                </div>
            </div>
            {/* Pressure  */}
            <div className="mb-5 ">
                <h2 className="bg-color-5382B7 text-white font-black text-2xl rounded-2xl my-2  p-1 text-center">
                    PRESSURE
                </h2>
                <div className="flex my-4 justify-between">
                    <h2 className="inline-block my-auto text-2xl font-medium">
                        {" "}
                        {now.pressure} mb
                    </h2>
                    <img
                        className="w-1/4 mr-5"
                        src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678896901/apsuat_chaowo.png"
                        alt="#"
                    />
                </div>
            </div>
            {/* Sun  */}
            <div className="mb-5 ">
                <h2 className="bg-color-5382B7 text-white font-black text-2xl rounded-2xl my-2  p-1 text-center">
                    SUNRISE & SUNSET
                </h2>
                <div>
                    <div className="flex my-4 justify-between ">
                        <h2 className="inline-block my-auto text-2xl font-medium">
                            {data.sunrise}
                        </h2>
                        <img
                            className="w-1/5 mr-5"
                            src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678895936/5f2_3_dmilwz.png"
                            alt="#"
                        />
                    </div>
                    <div className="flex my-4 justify-between ">
                        <h2 className="inline-block my-auto text-2xl font-medium">
                            {data.sunset}
                        </h2>
                        <img
                            className="w-1/5 mr-5"
                            src="https://res.cloudinary.com/dwohqjquz/image/upload/v1678895884/5f1_snzpvf.png"
                            alt="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar;
