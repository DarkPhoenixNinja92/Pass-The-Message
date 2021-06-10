let messageSubmit = () => {
    const lastMessage = document.getElementById("messageIn").value;
    document.getElementById("myLastMessage").innerHTML = lastMessage;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("deliver-button").addEventListener('click', messageSubmit);
})