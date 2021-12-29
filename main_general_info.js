const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let input_search = document.getElementById("input_search")
input_search.onkeydown = value_input_search;

function value_input_search(e) {
    if (e.key == 'Enter') {
        let input_search_value = input_search.value;
        let url = `https://api.github.com/users/${input_search_value}`;
        searchText(input_search_value);
        fetch(url).then(procesaResponse);

    }
}

function searchText(text) {
    text = text.trim();
    if (text.length === 0) {
        document.querySelector('.error-text').style.visibility = 'visible';
        return;
    }
    input_search.disabled = true;
    document.querySelector('#text-icon').style.visibility = 'hidden';
    document.querySelector('#animated-icon').style.visibility = 'visible';
    setTimeout(procesaResultado, 1500);
}

function procesaResultado() {
    input_search.disabled = false;
    input_search.value = '';
    document.querySelector('#text-icon').style.visibility = 'visible';
    document.querySelector('#animated-icon').style.visibility = 'hidden';
}

function procesaResponse(response) {
    if (response.status === 200) {
        response.json().then(procesaJson);
    } else {
        procesaError();
    }
}

function procesaJson(json) {
    update_dom(json);
}

function procesaError() {
    let error = document.getElementById("error");
    error.style.visibility = 'visible';
    error.innerText ="El usuario no existe";
}

function update_dom(json) {
    let name = document.getElementById('name');
    let repos = document.getElementById('repos');
    let followers = document.getElementById('followers');
    let following = document.getElementById('following')
    let username = document.getElementById("username");
    let image = document.getElementById("profile_image");
    let bio_profile = document.getElementById("info_bio");
    let page_profile = document.getElementById("website")
    let icon_website = document.getElementById("icon_website")
    let location_profile = document.getElementById("location")
    let icon_location = document.getElementById("icon_location")
    let twitter_profile = document.getElementById("twitter");
    let icon_twitter = document.getElementById("icon_twitter")
    let company_profile = document.getElementById("company")
    let icon_company = document.getElementById("icon_company")
    let date_profile = document.getElementById("date")
    let formating_date = new Date(json.created_at);




    image.src= json.avatar_url;
    username.innerText = `@${json.login}`
    name.innerText= `${json.name}`;
    repos.innerText= `${json.public_repos}`;
    followers.innerText= `${json.followers}`;
    following.innerText= `${json.following}`;
    bio_profile.innerText = json.bio === null ? bio_profile.innerText="This profile has no bio" : bio_profile.innerText = json.bio;
    date_profile.innerText = `Joined ${formating_date.getDate()} ${MESES[formating_date.getMonth()]} ${formating_date.getFullYear()}`;


    validate_null(json.blog,page_profile,icon_website);
    validate_null(json.location,location_profile,icon_location);
    validate_null(json.twitter_username,twitter_profile,icon_twitter);
    validate_null(json.company,company_profile,icon_company);
}


function validate_null(data,data_html,icon_html){
    if(data === null || data ===""){
        data_html.innerText = "Not available";
        data_html.className += ' opacity';
        icon_html.className += ' opacity';
    } else {
        data_html.innerText = data;
    }
}


//https://untalpeluca.github.io/GitHubUserSearchApp/