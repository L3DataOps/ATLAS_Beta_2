const Sidebar = () => {

    let currentDate = new Date(timestamp)

    return (
        <div className="sidebar">
            <h2>Atlas Beta</h2>
            <h4>{currentDate.toLocaleString()}</h4>
        </div>
    );
}

export default Sidebar;