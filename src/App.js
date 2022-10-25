// import logo from './logo.svg';
import "./App.css";
import Chatting from "./components/chatComponent";
import Chatlistgen from "./components/ChatListGenComponent";

function App() {
  return (
    <div className="parentCon">
      <div className="chatCon">
        <div className="LeftSection">
          <h1 className="whatsappHead">WhatsApp Beta</h1>
          <div className="chatParent">
            <div className="chatOptionsCon">
              <h1 className="chatHead">Chats</h1>
              <div className="setAddCon">
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-gear"></i>
              </div>
            </div>
            <div className="searchCon">
              <input type="Search" className="inputBox" placeholder="Search or Start new Chat" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <ul className="chatListCon mt-2 overflow-auto">
              <Chatlistgen />
            </ul>
          </div>
        </div>
        <div className="RightSection">
          <div className="windowOptsCon">
            <div className="winIcons">
              <i class="fa-solid fa-minus"></i>
              <i class="fa-regular fa-square"></i>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="callingCon">
            <div className="UserDetCon">
              <h6 className="userNameHead">Murari</h6>
              <p className="status">Online</p>
            </div>
            <div className="callingOptsCon">
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
              <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1666691777~exp=1666692377~hmac=f79349baac0bea8d3f442c778fa7b7efbcc9f12c1a69f551000b3dbd157d7ff5" className="pic rounded-circle" alt="" />
            </div>
          </div>
          <ul className="chattingCon overflow-auto">
            <Chatting />
          </ul>
          <div className="msgSendCon">
            <i class="fa-solid fa-face-smile"></i>
            <i class="fa-solid fa-paperclip"></i>
            <input type="text" className="sendMsgInput" placeholder="Type a message" />
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
