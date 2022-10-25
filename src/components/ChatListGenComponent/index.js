
import ChatItemgen from "../ChatItemGenComponent";
import "./index.css";

const UsersChats = [
    {
        id: 1,
        profileUrl: "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=740&t=st=1666688415~exp=1666689015~hmac=ac37e4bfe5f5f11bdacac9b5c491f6f7902eecc7613efbcfa58e69c2ad0661b5",
        UserName: "Krishna",
        msg: "Used Rendering Techinques",
        time: "00:00AM",
        msgCount: 4

    },
    {
        id: 2,
        profileUrl: "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=740&t=st=1666688530~exp=1666689130~hmac=564120fc821e657ca5aa582d0587d5b93bfb56dcd87dc27f566051bb4cdf2f4b",
        UserName: "Kesava",
        msg: "organized Components",
        time: "01:00PM",
        msgCount: 1

    },
    {
        id: 3,
        profileUrl: "https://img.freepik.com/free-photo/stylish-indian-businessman-formal-wear-standing-against-door-business-center-with-cross-arms_627829-671.jpg?w=740&t=st=1666691601~exp=1666692201~hmac=e296a796c13a7b8f9f96feec55697c3ef3c3f75c9f06310ec698896101249294",
        UserName: "Gopal",
        msg: "Different align optimizations",
        time: "12:00AM",
        msgCount: 1

    },
    {
        id: 4,
        profileUrl: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1666691644~exp=1666692244~hmac=0f733ebe1262ef4c585e6ea56fbcfc06a3ae09bca3d0e1842e1df50b55c372f3",
        UserName: "Govind",
        msg: "Utilized Bootstrap & Css",
        time: "01:00PM",
        msgCount: 3

    },
    {
        id: 5,
        profileUrl: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=740&t=st=1666691696~exp=1666692296~hmac=86ca18f54bf68e7bedefcab26643a95643731b450e8b96dfb759641cbf65f8ed",
        UserName: "Murari",
        msg: "I'm Full stack devpor",
        time: "05:00AM",
        msgCount: 0

    },
    {
        id: 6,
        profileUrl: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=740&t=st=1666691730~exp=1666692330~hmac=3317da897ab640f7d5d21e22232f23731cb28ae3c814d1ee136e30ecdae7594d",
        UserName: "Vasudev",
        msg: "I'm consistent and skillfull as well.",
        time: "01:00PM",
        msgCount: 3

    },
    {
        id: 7,
        profileUrl: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?w=740&t=st=1666691751~exp=1666692351~hmac=aef90b37c9b8bf362452cbfa06203756b76aee7115b09aef13de51ff5d2d9cce",
        UserName: "Narayan",
        msg: "Thanks for the Task!",
        time: "11:00AM",
        msgCount: 0

    },
    {
        id: 8,
        profileUrl: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1666691777~exp=1666692377~hmac=f79349baac0bea8d3f442c778fa7b7efbcc9f12c1a69f551000b3dbd157d7ff5",
        UserName: "Laxmipathi",
        msg: "ThankYou!",
        time: "07:00PM",
        msgCount: 0

    }
    ,
    {
        id: 8,
        profileUrl: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1666691777~exp=1666692377~hmac=f79349baac0bea8d3f442c778fa7b7efbcc9f12c1a69f551000b3dbd157d7ff5",
        UserName: "Laxmipathi",
        msg: "ThankYou!",
        time: "07:00PM",
        msgCount: 0

    }
    ,
    {
        id: 8,
        profileUrl: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1666691777~exp=1666692377~hmac=f79349baac0bea8d3f442c778fa7b7efbcc9f12c1a69f551000b3dbd157d7ff5",
        UserName: "Laxmipathi",
        msg: "ThankYou!",
        time: "07:00PM",
        msgCount: 0

    }
    ,
    {
        id: 8,
        profileUrl: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1666691777~exp=1666692377~hmac=f79349baac0bea8d3f442c778fa7b7efbcc9f12c1a69f551000b3dbd157d7ff5",
        UserName: "Laxmipathi",
        msg: "ThankYou!",
        time: "07:00PM",
        msgCount: 0

    }
]
const Chatlistgen = () => UsersChats.map((eachUser) => < ChatItemgen user={eachUser} key={eachUser.id} />)


export default Chatlistgen;