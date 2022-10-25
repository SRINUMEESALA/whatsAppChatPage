import "./index.css"

const ReceiveMsg = (props) => {
    const { messageFrom, url } = props
    return (
        <li className="eachMsgRec">
            {url === undefined ?
                (<div className="insideEachmsgR">
                    <p className="msgUserR">{messageFrom}</p>
                    <small className="sendTimeR" >04:23PM</small>
                </div>) :
                (<div className="d-flex flex-column">
                    <img src={url} className="sendingImage" alt="" />
                    <div className="insideEachmsgR2">
                        <p className="msgUserR">{messageFrom}</p>
                        <small className="sendTimeR" >04:23PM</small>
                    </div>
                </div>)}
        </li>
    )
}

export default ReceiveMsg;