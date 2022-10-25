import { Component } from "react";
import "./index.css";

class ChatItemgen extends Component {

    render() {
        const { user } = this.props;
        const { profileUrl, UserName, msg, time, msgCount } = user
        return (
            <li className="eachListItem mt-1">
                <div className="imgCon d-flex flex-column justify-content-center align-items-center"><img src={profileUrl} alt="" className="profilePic rounded-circle" /></div>
                <div className="chatBodyCon ">
                    <div className="">
                        <h4 className="userName">{UserName}</h4>
                        <p className="msg">{msg}</p>
                    </div>
                </div>
                <div className="chatCountCon">
                    {msgCount !== 0 ? < p className="timeColor">{time}</p> : <p className="time">{time}</p>}
                    {msgCount !== 0 ? <div className="count rounded-circle d-flex flex-column justify-content-center align-items-center">{msgCount}</div> : null}
                </div>
            </li >
        )
    }
}

export default ChatItemgen;