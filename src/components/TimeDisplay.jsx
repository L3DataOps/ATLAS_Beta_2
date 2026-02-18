import { useEffect } from "react";

const TimeDisplay = ({now, setTime}) => {
    

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
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
}
 
export default TimeDisplay;