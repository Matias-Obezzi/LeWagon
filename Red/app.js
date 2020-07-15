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
    "https://source.unsplash.com/collection/4554580/1080x1080",
    "https://source.unsplash.com/collection/4697015/1080x1080",
    "https://source.unsplash.com/collection/236/1080x1080",
    "https://source.unsplash.com/collection/3694365/1080x1080",
    "https://source.unsplash.com/collection/136432/1080x1080",
    "https://source.unsplash.com/collection/136095/1080x1080",
    "https://source.unsplash.com/collection/1513994/1080x1080",
    "https://source.unsplash.com/collection/235/1080x1080",
    "https://source.unsplash.com/collection/630950/1080x1080",
    "https://source.unsplash.com/collection/1173341/1080x1080",
    "https://source.unsplash.com/collection/4961056/1080x1080",
    "https://source.unsplash.com/collection/273258/1080x1080",
]

var user;

document.addEventListener("DOMContentLoaded", function(){
    user = db[Math.floor(Math.random() * db.length)];
    setPosts();
})

function setPosts(){
    for(var i=0; i<21; i++){
        let postAuthor = db[Math.floor(Math.random() * db.length)];
        let link = i<pubLink.length?pubLink[i]:pubLink[Math.floor(Math.random() * pubLink.length)];
        document.getElementById("posts").innerHTML +=
        `<div class="p-0 col-12 col-md-6 col-lg-4 mx-auto p-1 pub-container rounded" onclick="redirectProfile(${postAuthor.id})">
            <img src="${link}" class="img-pub d-block mx-auto img-fluid rounded" />
            <div class="details text-light mx-auto text-center">
                <div class="author">
                    <img src="${postAuthor.img}" class="author-img rounded-circle" width="50" height="50" />
                    <p class="d-inline-block my-auto">${postAuthor.name}</p>
                </div>
                <div class="likes"><i class="fas fa-heart mx-2"></i>${Math.floor(Math.random()*120)}</div>
            </div>
        </div>`
    }
}

function redirectProfile(id){
    window.location.replace('/perfil/?user='+id);
}