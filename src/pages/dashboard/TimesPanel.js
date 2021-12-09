import Schedule from "./Schedule";
import "./TimesPanel.css";



const TimesPanel = ({date, timeslots, randomTimes}) => {
    return (
        <div className={`times--panel ${date ? "show" : "hide"}`}>
            <div className="times--panel-inner">
                {date && `Available Appointments for ${date.toDateString()}`}
                <div className="times--wrap">
                    <div className="times--row">
                        <div className="times--col time">{timeslots[randomTimes]}</div>
                        <div className="times--col"><Schedule /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimesPanel;