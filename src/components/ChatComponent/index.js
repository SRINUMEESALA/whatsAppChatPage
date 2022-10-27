import "./index.css"
import SendMsg from "../SendMessage";
import ReceiveMsg from "../ReceiveMessage";


const ChatComponent = (props) => {
    return (
        [<SendMsg messageTo={"Hi What's going on?"} />,
        <ReceiveMsg messageFrom={"Hi..."} url={"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1666708456~exp=1666709056~hmac=1b0daea836dc47b610e4fbe80965b704b4acff49041a8b1463197548478e94ff"} />,
        <ReceiveMsg messageFrom={"Good Morning!"} />,
        <ReceiveMsg messageFrom={"Hello who is this?"} />,
        <SendMsg messageTo={"This is Srinu! Full stack developer"} url={"https://img.freepik.com/free-vector/hand-draw-sketch-lord-krishna-happy-janmashtami-festival-card-background_1035-24262.jpg?w=740&t=st=1666707464~exp=1666708064~hmac=686bed3a81b0038bbdc9a80495438353c2c224eade53bab840fa05e942889ca6"} />,
        <SendMsg messageTo={"Couldn't catch?"} />,
        <ReceiveMsg messageFrom={"How do you do?"} />,
        <ReceiveMsg messageFrom={"How do you do?"} />,
        <ReceiveMsg messageFrom={"How do you do? "} />,
        ]
    )
}


export default ChatComponent;