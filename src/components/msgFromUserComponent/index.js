import "./index.css"

const SendMsg = (props) => {
    const { messageTo, url } = props
    return (
        <li className="eachMsg">
            {url === undefined ? (<div className="insideEachmsg">
                <p className="msgUser">{messageTo}</p>
                <small className="sendTime" >04:23PM</small>
            </div>) : (<div className="d-flex flex-column">
                <div className="text-right pr-2"><img src={url} className="sendingImage " alt="" /></div>
                <div className="d-flex imgmsgCon">
                    <p className="msgUser imgMsg">{messageTo}</p>
                    <small className="sendTime" >04:23PM</small>
                </div>
            </div>)
            }
        </li >
    )
}

export default SendMsg;