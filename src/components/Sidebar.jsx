import { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";

const Sidebar = () => {

    const [now, setNow] = useState(new Date());

    return (
        <TimeDisplay now={now} setTime={setNow} />
    );
};

export default Sidebar;
