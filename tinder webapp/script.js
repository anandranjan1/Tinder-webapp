//get the data
let users = [
{
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:4,
    location: "Delhi, India",
    name:"Harshita",
    age: 23,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum, voluptate velit reiciendis omnis.",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:1,
    location: "Bhopal, India",
    name:"Shivangi",
    age: 24,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum, voluptate velit reiciendis omnis.",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1519895609939-d2a6491c1196?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:3,
    location: "Delhi, India",
    name:"Nishi",
    age: 21,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum, voluptate velit reiciendis omnis.",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:2,
    location: "Delhi, India",
    name:"Avina",
    age: 22,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum, voluptate velit reiciendis omnis.",
    isFriend: null
},
];

function select(elem){
    return document.querySelector(elem)
}
 let curr = 0;
 let isAnimating = false;

 function setData(index){
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}<h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;
 }

 (function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr);

    curr = 2;
 })();



 function imageChange(){
    if(!isAnimating){
        isAnimating = true;
   let tl = gsap.timeline({
    onComplete: function(){
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main,{
            scale: 1,
            opacity: 1
        })
        if(curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
    }
   });

   tl.to(".maincard",{
    scale: 1.1,
    opacity: 0,
    ease: Circ,
    duration: 1.1
   }, "a")
   .from(".incomingcard",{
    scale: .9,
    opacity: 0,
    ease: Circ,
    duration: .9
   }, "a")
 }
}

 let deny = select(".deny");
 let accept = select(".accept");

 deny.addEventListener("click", function (){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
     })
 });

 accept.addEventListener("click", function (){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
     })
 });

 (function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
 })();

