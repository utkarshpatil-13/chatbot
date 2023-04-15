const arbody = document.querySelector(".ar-body");
const userinput = document.querySelector("#user-input");
const arsend = document.querySelector(".send");

// send.addEventListener("click", () => decodeusermessage());
arsend.addEventListener("click", () => decodeusermessage());

// when press enter then message should sent
userinput.addEventListener("keyup", (event) => {
    // checking the keycode = 13 because this is the code for enter key
    if(event.keyCode === 13){
        decodeusermessage();
    }
});

const decodeusermessage = () => {
    const text_input = userinput.value;
    rendermessage(text_input);
    userinput.value = "";
    // clearing the message after one is sent
    setTimeout(() => {
        decodebotsmessage(text_input);
    }, 600);
    if(arbody.scrollHeight > 0){
        arbody.scrollTop = arbody.scrollHeight;
    }
};

// Here users message is rendered (converted from text to text-node then text-node is appended to div element then div element is appeded to ar-body)
const rendermessage = (txt) => {
    let message_arrived = document.createElement("div");
    let text_node = document.createTextNode(txt);
    message_arrived.classList.add("message-by-user");
    // This adds the given CSS class to div element -> message_arrived
    message_arrived.append(text_node);
    arbody.append(message_arrived);
};

const decodebotsmessage = (txt) => {
    const res = getbotresponse(txt);
    let bots_message = document.createElement("div");
    let text_node = document.createTextNode(res);
    bots_message.classList.add("message-by-bot");
    bots_message.append(text_node);
    arbody.append(bots_message);
}

const getbotresponse = (txt) => {
    if(responseObj[txt] == undefined){
        return "answer not availabel";
    }
    else{
        return responseObj[txt];
    }
};


const responseObj = {
    hello : 'hey',
    hey : 'do you want something',
    "what is artimus" : 'It is a event held by pccoe AIMSA Students which is having very much exciting competitions to participate in',
    "which event should I take part in" : "Hackmatrix"
}

