const db = [
    {
        id: 45678216,
        name: 'Thomas Tao',
        description: "Hi mi name is Thomas and I'm a movie producer",
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080',
        followers: 501,
        follows: 246
    },
    {
        id: 2549876345,
        name: 'Kevin',
        description: 'Welcome to my profile! Here you will see my every day pitures',
        img: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080',
        followers: 22,
        follows: 103
    },
    {
        id: 13975426,
        name: 'Julie McWire',
        description: "My name is Julie and I love take pictures",
        img: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080',
        followers: 1735,
        follows: 512
    },
    {
        id: 9846762,
        name: 'Ashley',
        description:"Hey I'm a 16 years teen from Oklahoma living on Huston.<br/>I love pets specially dogs and cats. Be free to message me! 😁",
        img: 'https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080',
        followers: 224,
        follows: 313
    }
]

const pubLink = [
    "https://source.unsplash.com/collection/4505632/1080x1080",
    "https://source.unsplash.com/collection/8994315/1080x1080",
    "https://source.unsplash.com/collection/8471054/1080x1080",
    "https://source.unsplash.com/collection/3172234/1080x1080",
    "https://source.unsplash.com/collection/4592013/1080x1080",
    "https://source.unsplash.com/collection/9864310/1080x1080",
    "https://source.unsplash.com/collection/4415261/1080x1080",
    "https://source.unsplash.com/collection/2166952/1080x1080",
    "https://source.unsplash.com/collection/1856437/1080x1080",
    "https://source.unsplash.com/collection/11381416/1080x1080",
]

document.addEventListener("DOMContentLoaded", function(){
    let user = null;
    let userId = getParameter("user");
    if(userId){
        user = db.filter(u => {return u.id == userId;})[0];
        if(user==undefined){
            user = db[Math.floor(Math.random() * db.length)];
        }
    }else{
        user = db[Math.floor(Math.random() * db.length)];
    }
    setUser(user);
    setPosts(user);
    document.getElementById("alert").classList.add(window.innerWidth<991?'w-75':'w-25');
})

function setUser(user){
    document.getElementById("img-profile").setAttribute('src', user.img);
    document.getElementById("name-profile").innerHTML = user.name;
    document.getElementById("messageLabel").innerHTML += user.name; //modal
    document.getElementById("byo-profile").innerHTML = user.description;
    document.getElementById("followers").innerHTML += user.followers;
    document.getElementById("follows").innerHTML += user.follows;
}

function setPosts(user){
    let container = document.getElementById("publish");
    let limit = 3 * Math.floor(Math.random() * 4);
    for(let i=0; i<limit; i++){
        container.innerHTML += getPost(i);
    }
    if(limit==0){
        container.innerHTML += `<h5 class="text-muted text-center">${user.name} not post yet 🙁</h5>`
    }
}
function getPost(i){
    return `<div class="p-0 col-12 col-md-6 col-lg-4 mx-auto p-1 pub-container rounded">
                <img src="${i<pubLink.length?pubLink[i]:pubLink[Math.floor(Math.random() * pubLink.length)]}" class="img-pub d-block mx-auto img-fluid rounded" />
                <div class="details text-light mx-auto text-center">
                    <i class="fas fa-heart mx-2"></i>${Math.floor(Math.random()*120)}
                </div>
            </div>`
}

var follow = false;

function buttonFollow(){
    follow = !follow;
    document.getElementById("buttonFollow").innerHTML = `${follow?'<i class="fas fa-user-times"></i> Unfollow':'<i class="fas fa-user-plus"></i> Follow'}`
    document.getElementById("followers").innerHTML = Number.parseInt(document.getElementById("followers").innerHTML.split()) + (follow?1:-1);
}

function sendMessage(){
    setAlert(`Message sended!`)
}

var timeout=null;

function setAlert(message){
    clearTimeout(timeout);
    let alert = document.getElementById("alert");
    let alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = message;
    alert.classList.remove("d-none");
    timeout = setTimeout(()=>{
        alertMessage.innerHTML = '';
        alert.classList.add("d-none");
    }, 2000)
}

function getParameter(param){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function redirectHome(){
    window.location.replace('/LeWagon/Red')
}

function messageLength(){
    let message = document.getElementById("message-text").value;
    let cant = message.length;
    document.getElementById("length").innerHTML = cant;
    document.getElementById("send-button").disabled = message.trim().length==0;
}