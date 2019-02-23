//grab sdk
let sdk = window.LivechatVisitorSDK.init({
  license: LICENSE,
})

//appends message to message window
function appendMessage(text) {
  let messageDivContainer = document.getElementById('messages');
  let messageDiv = document.createElement('div');
  messageDiv.innerHTML = text;
  messageDivContainer.append(messageDiv)
}

//update message box
sdk.on('new_message', function (data) {
  appendMessage(text)
})

//sends out message
function sendMessage() {
  let input = document.getElementById('message-input');
  let text = input.value;

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
