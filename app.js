const person_1 = [{
    id: 1,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "anna johnson",
    role: "web designer",
    desp: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},
{
    id: 2,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan smith",
    role: "web developer",
    desp: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},
{
    id: 3,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "peter jones",
    role: "intern",
    desp: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
},
{
    id: 4,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "bill anderson",
    role: "the boss",
    desp: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
},
]

let arrow_right = document.getElementById("arrow_right");
let person_img = document.getElementById("person_img");
let nam = document.getElementById("name");
let role = document.getElementById("role");
let desp = document.getElementById("desp");
let surprise_btn = document.getElementById("surprise_btn");

let item = 0;

function show(value) {
    person_img.src = person_1[value].img;
    nam.textContent = person_1[value].name;
    role.textContent = person_1[value].role;
    desp.textContent = person_1[value].desp;
}

arrow_right.addEventListener('click', () => {
    item++;
    if (item > person_1.length - 1)
        item = 0;
    show(item);
});

arrow_left.addEventListener('click', () => {
    item--;
    if (item < 0)
        item = person_1.length - 1;
    show(item);
});


function random() {
    return Math.floor(Math.random() * person_1.length);
}

surprise_btn.addEventListener('click', () => {
    const num = random();
    show(num);
});


