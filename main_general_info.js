const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let input_search = document.getElementById("input_search")
input_search.onkeydown = value_input_search;

function value_input_search(e){
    if(e.keyCode == 13){
        let input_search_value = input_search.value;
        let url = `https://api.github.com/users/${input_search_value}`;
        fetch(url)
            .then(response => response.json())
            .then(datos => {
                add_img_profile(datos.avatar_url)
                add_name_user(datos.name)
                add_username(datos.login)
                add_bio(datos.bio)
                add_repos(datos.public_repos)
                add_followers(datos.followers)
                add_following(datos.following)
                add_location(datos.location)
                add_company(datos.company)
                add_twitter(datos.twitter_username)
                add_page(datos.blog)
                add_date(datos.created_at)
            })
    }
}

function add_img_profile(image) {
    let image_profile = document.getElementById("profile_image");
    image_profile.src= image;
}

function add_name_user(name) {
    let name_user = document.getElementById("name");
    name_user.innerText = name;
}

function add_username(username) {
    let username_profile = document.getElementById("username");
    username_profile.innerText = `@${username}`
}

function add_bio(bio) {
    let bio_profile = document.getElementById("info_bio");
    bio_profile.innerText = bio;
}

function add_repos(repos) {
    let repositories = document.getElementById("repos");
    repositories.innerText = repos;
}

function add_followers(followers){
    let followers_profile = document.getElementById("followers");
    followers_profile.innerText = followers;
}

function add_following(following){
    let following_profile = document.getElementById("following");
    following_profile.innerText = following;
}

function add_location(location) {
    let location_profile = document.getElementById("location")
    location_profile.innerText = location;
}

function add_twitter(twitter) {
    let twitter_profile = document.getElementById("twitter")
    twitter_profile.innerText = twitter;
}

function add_company(company) {
    let company_profile = document.getElementById("company")
    company_profile.innerText = company;
}


function add_page(page) {
    let page_profile = document.getElementById("website")
    page_profile.innerText = page;
}

function add_date(date) {
    let date_profile = document.getElementById("date")
    let formating_date = new Date(date);

    date_profile.innerText = `Joined ${formating_date.getDate()} ${MESES[formating_date.getMonth()]} ${formating_date.getFullYear()}`;
}
