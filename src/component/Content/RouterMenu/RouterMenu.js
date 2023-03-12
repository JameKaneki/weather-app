import { Link } from "react-router-dom";

function RounterMenu() {
    return (
        <ul className="flex font-bold text-xl ">
            <li className="mx-2 hover:border-b-2">
                <Link to="/today">Today</Link>
            </li>
            <li className="mx-2 hover:border-b-2">
                <Link to="/week">Week</Link>
            </li>
        </ul>
    );
}
export default RounterMenu;
