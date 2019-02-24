var LICENSE = 10644347

//grab sdk
let sdk = window.LivechatVisitorSDK.init({
  license: LICENSE,
})


$(document).ready(function () {

  //update message box
  sdk.on('new_message', function (data) {
    console.log(data);

    let authorType;
    if (data.hasOwnProperty("customId")) {
      authorType = 'respondent';
    }else {
      authorType = 'agent';
    }

    appendMessage(data.text, authorType)
    console.log(data);
  })

})

console.log(sdk);

let user_id = 0;

//appends message to message window
function appendMessage(text, authorType) {
  let messageDivContainer = document.getElementById('message-list');

  let messageDiv = document.createElement('div');
  messageDiv.classList.add('message-container');

  if (authorType == 'agent'){
    messageDiv.classList.add('agent');
  }

  let message = document.createElement('p');
  message.classList.add('message');

  message.innerHTML = text;
  messageDiv.append(message);
  messageDivContainer.append(messageDiv);

}

//sends out message
function sendMessage() {
  let input = document.getElementById('message-input');
  let text = input.value;

  console.log('test');
  sdk.sendMessage({
    customId: String(Math.random()),
    text: text
  })

  input.value = '';
}

//Check if user sent message
document.getElementById('message-input').onkeydown = function (event) {
  //send message if event was pressed
  if (event.which == 13) {
    sendMessage()
    return false;
  }
}

document.getElementById('send-button').onclick = function (event) {
  sendMessage();
}
