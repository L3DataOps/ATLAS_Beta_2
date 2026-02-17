import { useState, useEffect } from "react";

const Sidebar = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const estDate = now.toLocaleDateString("en-US", {
        timeZone: "America/New_York"
    });

    const estTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });

    return (
        <div className="sidebar">
            <h2>Atlas Beta</h2>
            <h4>{estDate}</h4>
            <h4>{estTime} EST</h4>
        </div>
    );
};

export default Sidebar;
