// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


(function () {
    const mainLogoSource = 'images/firefox-logo.png';
    const secondaryLogoSource = 'images/firefox2.png';
    const logoImage = document.querySelector("img");

    logoImage.onclick = () => logoImage.setAttribute("src", logoImage.getAttribute("src") === mainLogoSource ? secondaryLogoSource : mainLogoSource);

    const buttonChangeUser = document.querySelector("button");
    const heading = document.querySelector("h1");
    const changeUserNameOnTitle = userName => heading.textContent = `Mozilla is cool, ${userName}!`;

    function setUserName(promptMessage) {
        let userName = prompt(promptMessage);
        if (!userName) {
            setUserName("Please, you must enter your name:");
        } else {
            localStorage.setItem("userName", userName);
            changeUserNameOnTitle(userName);
        }
    }

    if (!localStorage.getItem("userName")) {
        setUserName("Please, enter your name:");
    } else {
        changeUserNameOnTitle(localStorage.getItem("userName"));
    }

    buttonChangeUser.onclick = () => setUserName("Please, change your name:");
})();