const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/the-grammar-games", {
        useMongoClient: true
    }
);

const questionSeed = [

    // 3rd Grade

    // THREE WAYS TO END A SENTENCE
    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: The slug left a trail of slime on the pavement[]",
        choices: [“A: The slug left a trail of slime on the pavement ? ”, “B : The slug left a trail of slime on the pavement!”, “C: The slug left a trail of slime on the pavement.”, “D: Fine as is”],
        answer: "C: The slug left a trail of slime on the pavement.",
        pointValue: 1
    }

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Is anyone home[]",
        choices: [“A: Is anyone home ? ”, “B : Is anyone home!”, “C: Is anyone home.”, “D: Fine as is”],
        answer: “A: Is anyone home ? ”,
        pointValue: 2
    }

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Roxana is pretty good at the guitar[]”,    
        choices: [“A: Roxana is pretty good at the guitar!”, “B: Roxana is pretty good at the guitar.”, “C: Roxana is pretty good at the guitar ? ”, “D : Fine as is”],
        answer: “A: Roxana is pretty good at the guitar.”,
        pointValue: 1
    }

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Levi, have you seen my glasses[]”,    
        choices: [“A: Levi, have you seen my glasses.”, “B: Levi, have you seen my glasses!”, “C: Levi, have you seen my glasses ? ”, “D : Fine as is”],
        answer: “C: Levi,
        have you seen my glasses ? .”,
        pointValue : 2
    }

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Ben and Anna got to pet a sloth, and I am super jealous[]”,    
        choices: [“A: Ben and Anna got to pet a sloth, and I am super jealous!”, “B: Ben and Anna got to pet a sloth, and I am super jealous ? ”, “C : Ben and Anna got to pet a sloth, and I am super jealous.”, “D: Fine as is”],
        answer: “A: Ben and Anna got to pet a sloth,
        and I am super jealous!”,
        pointValue: 4
    }

    // COMMON AND PROPER NOUNS

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Alex inspected the complicated knot.  What is the proper noun in this sentence?”,
        choices: [“A: inspected”, “B: the”, “C: knot”, “D: Alex”],
        answer: “D: Alex”,
        pointValue: 1
    }

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "The lamb bounded toward Noemi. What is the common noun in this sentence?”,
        choices: [“A: Noemi”, “B: bounded”, “C: lamb”, “D: toward”],
        answer: “C: lamb”,
        pointValue: 3
    }


    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "The carriage rolled to a halt, and Kim got out. What is the proper noun in this sentence?”,
        choices: [“A: Kim”, “B: carriage”, “C: halt”, “D: out”],
        answer: “A: Kim”,
        pointValue: 2
    } {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Benny knew the hat had a curse on it, but he put it on anyway. Which of the following is a common noun in this sentence?”,
        choices: [“A: Benny”, “B: the”, “C: on”, “D: curse”],
        answer: “D: curse”,
        pointValue: 3
    }

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Nia rubbed her nose and sniffled. What is the common noun in this sentence”,
        choices: [“A: her”, “B: Nia”, “C: nose”, “D: sniffed”],
        answer: “C: nose”,
        pointValue: 3
    }

    // PERSONAL PRONOUNS

    {
        grade: 3,
        skill: "Personal pronouns",
        question: "Choose the best personal pronoun for this sentence: Eating breakfast is important to ______.”,
        choices: [“A: us”, “B: Jill”, “C: teachers”, “D: dogs”],
        answer: “A: us”,
        pointValue: 2
    }

    {
        grade: 3,
        skill: "Personal pronouns",
        question: "Choose the best personal pronoun for this sentence: Lola the cat is very fond of ______.”,
        choices: [“A: Yuna”, “B: treats”, “C: me”, “D: cats”],
        answer: “C: me”,
        pointValue: 3
    }

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Keeping her yard clean was a difficult job for ______.”,
        choices: [“A: her”, “B: Annika”, “C: the neighbor”, “D: penguins”],
        answer: “A: her”,
        pointValue: 2
    }

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Coincidentally, Lena and ______ had gotten each other the same present.”,
        choices: [“A: he”, “B: Gavin”, “C: they”, “D: “Max”],
        answer: “A: he”,
        pointValue: 4
    }

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Tyrone gave ______ a big hug.”,
        choices: [“A: Darcy”, “B: the tree”, “C: her”, “D: “snails”],
        answer: “C: her”,
        pointValue: 5
    }
    // 4th Grade

    // PREPOSITIONAL PHRASES
    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: The Queen ______ Galacticon declared March 1st a Day of Peace.",
        choices: [“A: that”, “B: with”, “C: to”, “D: of”],
        answer: "D: of",
        pointValue: 2
    }

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: This jacket is ______ special occasions.",
        choices: [“A: with”, “B: for”, “C: to”, “D: of”],
        answer: "B: for",
        pointValue: 1
    }

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: Lorelei floated ______ the surface of the water.",
        choices: [“A: on”, “B: for”, “C: to”, “D: of”],
        answer: "A: on",
        pointValue: 1
    }

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: I got a care package ______ my brother.",
        choices: [“A: on”, “B: from”, “C: to”, “D: of”],
        answer: "B: from",
        pointValue: 2
    }

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: The birds flew ______ north.",
        choices: [“A: down”, “B: from”, “C: up”, “D: of”],
        answer: "C: up",
        pointValue: 5
    }

    // COORDINATING CONJUNCTIONS

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Choose the conjunction that fits best in this sentence: Kathleen recently moved to Seattle, ______ she hates the rain.",
        choices: [“A: but”, “B: or”, “C: yet”, “D: nor”],
        answer: "C: yet",
        pointValue: 5
    }

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Naomi is afraid of small spaces, so she always takes the stairs instead of the elevator. What is the word so doing in this sentence?",
        choices: [“A: Expressing an exception”, “B: Showing a choice between options”, “C: Showing the consequence of something”, “D: Expressing a negative feeling”],
        answer: " C: Showing the consequence of something ",
        pointValue: 6
    }

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Desteni loves being outside, ______ she walks home from school every day.",
        choices: [“A: so”, “B: or”, “C: yet”, “D: nor”],
        answer: "A: so",
        pointValue: 1
    }

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Do you want to go for a bike ride or stay home and read?
        What is or doing in this sentence ? ",
        choices : [“A: Expressing an exception”, “B: Showing a choice between options”, “C: Showing the consequence of something”, “D: Expressing a negative feeling”],
        answer: “B: Showing a choice between options ",
        pointValue: 5
    }

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Choose the conjunction that fits best in this sentence: I was confident about my submarine driving exam results, ______ I had studied.",
        choices: [“A: but”, “B: or”, “C: yet”, “D: for”],
        answer: "D: for",
        pointValue: 7
    }

    // RELATIVE PRONOUNS
    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: The sand dunes ______ cover this beach are beautiful.",
        choices: [“A: who”, “B: that”, “C: whose”, “D: what”],
        answer: "B: that",
        pointValue: 1
    }

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Caleb, ______ favorite food is spaghetti, ate a whole plate of pasta and meatballs.",
        choices: [“A: that”, “B: whose”, “C: what”, “D: who”],
        answer: "B: whose",
        pointValue: 2
    }


    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: The orangutan ______ waved to me at the zoo has two babies.",
        choices: [“A: that”, “B: whose”, “C: who”, “D: what”],
        answer: "A: that",
        pointValue: 1
    }

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Miyu, with ______ I have been friends for five years, is moving to Virginia.",
        choices: [“A: that”, “B: whose”, “C: whom”, “D: who”],
        answer: "C: whom",
        pointValue: 5
    }

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Jenny is faster at scooping ice cream than the girl ______ normally works at Parson’s Ice Cream Parlor.",
        choices: [“A: that”, “B: whose”, “C: whom”, “D: who”],
        answer: "D: who",
        pointValue: 4
    }
    // 5th Grade

    // PUNCTUATING A LIST

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places:
        Tesfai needs to buy dinnerget gas and pick up his kids on his way home.
        ",
        choices: [“A: Tesfai needs to buy dinner, get gas and pick up his kids on his way, home.”, “B: Tesfai needs to buy dinner, get gas, and pick up, his kids, on his way home.”, “C: Tesfai needs to buy dinner, get gas, and pick up his kids on his way home.”, “D: Fine as is”],
        answer: "C: Tesfai needs to buy dinner, get gas, and pick up his kids on his way home.",
        pointValue: 8
    }

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: At recess I like to read play foursquare and talk to my friends who are in other classes.",
        choices: [“A: At recess I like, to read, play foursquare and talk, to my friends who are in other classes.”, “B: At recess, I like to read, play foursquare, and talk to my friends who are in other classes.”, “C: At recess I like to read play foursquare, and talk to my friends who, are in other classes.”, “D: Fine as is”],
        answer: "B: At recess, I like to read, play foursquare, and talk to my friends who are in other classes.",
        pointValue: 10
    }

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: When the class went to the zoo they saw zebras kangaroos penguins and many more animals.",
        choices: [“A: When the class went to the zoo, they saw zebras, kangaroos, penguins, and many more animals.”, “B: When the class went to the zoo, they saw zebras kangaroos penguins, and many more animals.”, “C: When the class went to the zoo, they saw zebras, kangaroos, penguins, and many, more, animals.”, “D: Fine as is”],
        answer: "A: When the class went to the zoo, they saw zebras, kangaroos, penguins, and many more animals.",
        pointValue: 8
    }

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: She likes her coffee with one packet of sugar some skim milk and a bagel on the side.",
        choices: [“A: She likes her coffee with one packet of sugar, some skim milk and a bagel on the side.”, “B: She likes her coffee with one packet of sugar some, skim, milk, and a bagel on the side.”, “C: She likes her coffee with one packet of sugar, some skim milk, and a bagel on the side.”, “D: Fine as is”],
        answer: “C: She likes her coffee with one packet of sugar,
        some skim milk,
        and a bagel on the side.
        ",
        pointValue: 12
    }

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: I want to try her famous cookies but I’m allergic to eggs milk peanuts and shrimp.",
        choices: [“A: I want to
            try her famous cookies, but I am allergic to eggs, milk, peanuts, and shrimp.”, “B: I want to
            try her famous cookies, but I am allergic to eggs milk peanuts and shrimp.”, “C: I want to
            try her famous cookies, but I am allergic to, eggs, milk, peanuts, and shrimp.”, “D: Fine as is”
        ],
        answer: “B: I want to
        try her famous cookies,
        but I am allergic to eggs milk peanuts and shrimp.
        ",
        pointValue: 14
    }


    // CORRELATIVE CONJUNCTIONS

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: Should I stay ____ should I go?",
        choices: [“A: nor”, “B: but”, “C: or”, “D: then”],
        answer: "C: or",
        pointValue: 4
    }

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: We’ll find the kangaroos either by the watering hole ______ under the shade tree.",
        choices: [“A: and”, “B: or”, “C: nor”, “D: yet”],
        answer: "B: or",
        pointValue: 3
    }

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: Mrs. Emmer, a chef, not only dices onions with ease ______ specializes in lemon meringue pie.",
        choices: [“A: nevertheless”, “B: nor”, “C: or”, “D: but also”],
        answer: "D: but also",
        pointValue: 10
    }

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: ______ Samantha nor her mother had been to Iowa City before.",
        choices: [“A: Either”, “B: Neither”, “C: Nor”, “D: Also”],
        answer: "B: Neither",
        pointValue: 10
    }

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: If I let you go to Mars, ______ I’d have to let everyone else go.",
        choices: [“A: then”, “B: so”, “C: but”, “D: nor”],
        answer: "A: then",
        pointValue: 12
    }

    // INTRO TO VERB TENSE

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: Tomorrow, we ______ a rocket to the moon!",
        choices: [“A: were riding”, “B: rode”, “C: will ride”, “D: rides”],
        answer: "C: will ride",
        pointValue: 6
    }

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: The rubber balls bounced and ______ on the floor.",
        choices: [“A: will tumble”, “B: tumbled”, “C: tumble”, “D: tumbles”],
        answer: "B: tumbled",
        pointValue: 8
    }

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: Agnes ______ on the window, but nobody answered.",
        choices: [“A: tapped”, “B: taps”, “C: will tap”, “D: tapping”],
        answer: "A: tapped",
        pointValue: 4
    }

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: The dead leaves ______ while we were gone.”,
        choices: [“A: will rot”, “B: rotting”, “C: rotted”, “D: rot”],
        answer: "C: rotted",
        pointValue: 2
    }

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: I think he can ______ me behind this fence.”,
        choices: [“A: saw”, “B: will see”, “C: see”, “D: sees”],
        answer: "C: see",
        pointValue: 4
    }

     // 6th Grade

    // POSSESSIVE PRONOUNS

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: Jessica, I can’t believe ______ dog ate that entire steak!”,
        choices: [“A: you”, “B: your”, “C: yours”, “D: that”],
        answer: “B: your”,
        pointValue: 2
    }

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: Whose treehouse is the greatest in the world, you ask? ______ is!”,
        choices: [“A: We”, “B: Our”, “C: Ours”, “D: This”],
        answer: “C: Ours”,
        pointValue: 6
    }

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: That fluffy pink llama is _______.”,
        choices: [“A: We”, “B: Ours”, “C: Our”, “D: This”],
        answer: “B: Ours”,
        pointValue: 6
    }

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: ______ dream is to be part of the first Mars colony.”,
        choices: [“A: Mine”, “B: Me”, “C: My”, “D: That”],
        answer: “C: My”,
        pointValue: 4
    }

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: That baseball glove is ______.”,
        choices: [“A: hers”, “B: her”, “C: she”, “D: he”],
        answer: “A: hers”,
        pointValue: 5
    }

    // REFLEXIVE PRONOUNS

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Jamal cut ______ shaving.”,
        choices: [“A: himself”, “B: him”, “C: “that”, “D: thatself”],
        answer: “A: himself”,
        pointValue: 2
    }

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Abigail was nervous about her presentation, but Isabella told ______ it would be okay.”,
        choices: [“A: herself”, “B: her”, “C: “that”, “D: thatself”],
        answer: “B: her”,
        pointValue: 3
    }

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Will you listen to ______? You're being absurd.”,
        choices: [“A: I”, “B: yourself”, “C: “you”, “D: this”],
        answer: “B: yourself”,
        pointValue: 6
    }

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: A fly appeared in the frog’s field of vision. The frog captured ______.”,
        choices: [“A: it”, “B: itself”, “C: “you”, “D: this”],
        answer: “A: it”,
        pointValue: 4
    }

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Milosh didn't care if Evana was mean to ______; he loved her.”,
        choices: [“A: it”, “B: itself”, “C: “himself”, “D: him”],
        answer: “D: him”,
        pointValue: 6
    }

    // THE PERFECT ASPECT OF VERBS

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: Anju [thought] the cake looked dreadful, but she ate it anyhow.”,
        choices: [“A: thought”, “B: was thinking”, “C: “had thought”, “D: thinks”],
        answer: “C: had thought”,
        pointValue: 8
    }

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: Beatriz [exhausted] all her options.”,
        choices: [“A: was exhausting”, “B: exhausted”, “C: “exhausts”, “D: had exhausted”],
        answer: “D: had exhausted”,
        pointValue: 6
    }

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: The court already [made] its judgment by the time Wendell made it to the courthouse.”,
        choices: [“A: was making”, “B: had made”, “C: “made”, “D: makes”],
        answer: “B: had made”,
        pointValue: 4
    }

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: By Thursday, I will [visit] Western Pennsylvania.”,
        choices: [“A: visit”, “B: be visiting”, “C: “have visited”, “D: visits”],
        answer: “C: have visited”,
        pointValue: 7
    }

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: The conductor [chatted] with passengers when Imelda boarded the train.”,
        choices: [“A: had chatted”, “B: chatted”, “C: “chats”, “D: chatting”],
        answer: “A: had chatted”,
        pointValue: 8
    }

];

db.Question
    .remove({})
    .then(() => db.Question.collection.insertMany(QuestionSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });