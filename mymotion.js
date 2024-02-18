const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");

const notifWithMessage = document.querySelector("main .notif_card:nth-of-type(4)")
const message = document.querySelector(".message");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length;
    })
})

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
})

notifWithMessage.addEventListener("click", () => {
    message.classList.remove("hidden");
})