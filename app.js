$(document).ready(function() {
    let user = document.getElementById('users');

    getUser = () => {

        $.ajax({
            url: 'https://api.github.com/users',
            type: 'GET',
            success: (users) => {
                let result = "";
                console.log(users);
                users.forEach((users) => {
                    result +=
                        '<div class="user">' +
                        "<img class='user_img' src=" +
                        users.avatar_url +
                        "<ul> " +
                        "<li>ID: " +
                        users.id +
                        "</li>" +
                        "<li>Login:" +
                        users.login +
                        "</li>" +
                        "<li>Events URL:" +
                        users.events_url +
                        "</li>" +
                        "<li>Is a site admin:" +
                        users.site_admin +
                        "</li>" +
                        "</ul>" +
                        "</div>";
                })
                user.innerHTML = result;
            },
        });
    };
    document.getElementById("btn").addEventListener("click", getUser);
});