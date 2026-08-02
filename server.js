const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", (req, res) => {

    let msg = req.body.message.toLowerCase();

    let reply = "🤖 NovaAI: Mujhe is question ka answer abhi nahi pata. Kuch aur poochho 😊";


    const answers = [

        {
            keys:["hello","hi","hey"],
            answer:"Hello 👋 Main NovaAI hoon. Main tumhari coding aur general questions me help kar sakta hoon."
        },

        {
            keys:["your name","tumhara naam","name"],
            answer:"Mera naam NovaAI hai 🤖 Main ek smart AI assistant demo hoon."
        },

        {
            keys:["html"],
            answer:"HTML website ka structure banane ke liye use hoti hai. Isse headings, paragraphs, images aur links bante hain."
        },

        {
            keys:["css"],
            answer:"CSS website ko design karne ke liye use hoti hai. Isse colors, layouts aur animations add karte hain."
        },

        {
            keys:["javascript","js"],
            answer:"JavaScript website me interaction add karti hai jaise buttons, forms aur dynamic features."
        },

        {
            keys:["python"],
            answer:"Python ek popular programming language hai jo AI, automation aur software development me use hoti hai."
        },

        {
            keys:["c++","cpp"],
            answer:"C++ ek powerful programming language hai jo software, games aur system programming me use hoti hai."
        },

        {
            keys:["computer"],
            answer:"Computer ek electronic device hai jo data ko process karta hai aur useful information deta hai."
        },

        {
            keys:["ai","artificial intelligence"],
            answer:"AI ka matlab Artificial Intelligence hai. Ye computers ko smart tasks perform karne me help karti hai."
        },

        {
            keys:["what is internet","internet"],
            answer:"Internet duniya bhar ke computers ko connect karne wala network hai."
        },

        {
            keys:["website"],
            answer:"Website web pages ka collection hoti hai jo internet par available hoti hai."
        },

        {
            keys:["app"],
            answer:"App ek software application hoti hai jo mobile ya computer par chalti hai."
        },

        {
            keys:["coding","programming"],
            answer:"Coding computer ko instructions dene ka process hai."
        },

        {
            keys:["algorithm"],
            answer:"Algorithm kisi problem ko solve karne ke step-by-step instructions hote hain."
        },

        {
            keys:["database"],
            answer:"Database data ko store aur manage karne ka system hota hai."
        },

        {
            keys:["thank","thanks"],
            answer:"You're welcome 😊 Main hamesha help ke liye available hoon."
        },

        {
            keys:["who are you","tum kon ho"],
            answer:"Main NovaAI hoon 🤖 Tumhara personal AI assistant demo."
        },

        {
            keys:["weather"],
            answer:"Main abhi live weather check nahi kar sakta, lekin weather apps se check kar sakte ho."
        },

        {
            keys:["study","education"],
            answer:"Main studies, assignments aur learning me help kar sakta hoon."
        },

        {
            keys:["physics"],
            answer:"Physics matter, energy aur nature ke rules ka study hai."
        },

        {
            keys:["math","mathematics"],
            answer:"Main maths problems solve karne aur concepts samjhane me help kar sakta hoon."
        },

        {
            keys:["english"],
            answer:"Main English grammar, writing aur vocabulary me help kar sakta hoon."
        },

        {
            keys:["good morning"],
            answer:"Good morning ☀️ Have a great day!"
        },

        {
            keys:["good night"],
            answer:"Good night 🌙 Sleep well!"
        }

    ];


    for(let item of answers){

        if(item.keys.some(word => msg.includes(word))){
            reply = "🤖 NovaAI: " + item.answer;
            break;
        }

    }


    res.json({
        reply: reply
    });

});


app.listen(3000,()=>{
    console.log("NovaAI server running on port 3000");
});
