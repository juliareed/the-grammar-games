const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thegrammargames", {
        useMongoClient: true
    }
);

var questionSeed = [

    // 3rd Grade

    // THREE WAYS TO END A SENTENCE
    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: The slug left a trail of slime on the pavement[]",
        answers: ["A: The slug left a trail of slime on the pavement ? ", "B : The slug left a trail of slime on the pavement!", "C: The slug left a trail of slime on the pavement.", "D: Fine as is"],
        value: 2,
        pointValue: 1
    },

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Is anyone home[]",
        answers: ["A: Is anyone home ? ", "B : Is anyone home!", "C: Is anyone home.", "D: Fine as is"],
        value: 0,
        pointValue: 2
    },

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Roxana is pretty good at the guitar[]",
        answers: ["A: Roxana is pretty good at the guitar!", "B: Roxana is pretty good at the guitar.", "C: Roxana is pretty good at the guitar ? ", "D : Fine as is"],
        value: 0,
        pointValue: 1
    },

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Levi, have you seen my glasses[]",
        answers: ["A: Levi, have you seen my glasses.", "B: Levi, have you seen my glasses!", "C: Levi, have you seen my glasses ? ", "D : Fine as is"],
        value: 3,
        pointValue: 2
    },

    {
        grade: 3,
        skill: "Three ways to end a sentence",
        question: "Which terminal punctuation mark would you use to end this sentence: Ben and Anna got to pet a sloth, and I am super jealous[]",
        answers: ["A: Ben and Anna got to pet a sloth, and I am super jealous!", "B: Ben and Anna got to pet a sloth, and I am super jealous ? ", "C : Ben and Anna got to pet a sloth, and I am super jealous.", "D: Fine as is"],
        value: 0,
        pointValue: 4
    },

    // COMMON AND PROPER NOUNS

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Alex inspected the complicated knot.  What is the proper noun in this sentence?",
        answers: ["A: inspected", "B: the", "C: knot", "D: Alex"],
        value: 3,
        pointValue: 1
    },

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "The lamb bounded toward Noemi. What is the common noun in this sentence?",
        answers: ["A: Noemi", "B: bounded", "C: lamb", "D: toward"],
        value: 2,
        pointValue: 3
    },


    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "The carriage rolled to a halt, and Kim got out. What is the proper noun in this sentence?",
        answers: ["A: Kim", "B: carriage", "C: halt", "D: out"],
        value: 0,
        pointValue: 2
    },

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Benny knew the hat had a curse on it, but he put it on anyway. Which of the following is a common noun in this sentence?",
        answers: ["A: Benny", "B: the", "C: on", "D: curse"],
        value: 3,
        pointValue: 3
    },

    {
        grade: 3,
        skill: "Common and proper nouns",
        question: "Nia rubbed her nose and sniffled. What is the common noun in this sentence",
        answers: ["A: her", "B: Nia", "C: nose", "D: sniffed"],
        value: 2,
        pointValue: 3
    },

    // PERSONAL PRONOUNS

    {
        grade: 3,
        skill: "Personal pronouns",
        question: "Choose the best personal pronoun for this sentence: Eating breakfast is important to ______.",
        answers: ["A: us", "B: Jill", "C: teachers", "D: dogs"],
        value: 0,
        pointValue: 2
    },

    {
        grade: 3,
        skill: "Personal pronouns",
        question: "Choose the best personal pronoun for this sentence: Lola the cat is very fond of ______.",
        answers: ["A: Yuna", "B: treats", "C: me", "D: cats"],
        value: 2,
        pointValue: 3
    },

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Keeping her yard clean was a difficult job for ______.",
        answers: ["A: her", "B: Annika", "C: the neighbor", "D: penguins"],
        value: 0,
        pointValue: 2
    },

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Coincidentally, Lena and ______ had gotten each other the same present.",
        answers: ["A: he", "B: Gavin", "C: they", "D: Max"],
        value: 0,
        pointValue: 4
    },

    {
        grade: 3,
        skill: "Personal pronouns",
        question: " Choose the best personal pronoun for this sentence: Tyrone gave ______ a big hug.",
        answers: ["A: Darcy", "B: the tree", "C: her", "D: snails"],
        value: 2,
        pointValue: 5
    },
    // 4th Grade

    // PREPOSITIONAL PHRASES
    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: The Queen ______ Galacticon declared March 1st a Day of Peace.",
        answers: ["A: that", "B: with", "C: to", "D: of"],
        value: 3,
        pointValue: 2
    },

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: This jacket is ______ special occasions.",
        answers: ["A: with", "B: for", "C: to", "D: of"],
        value: 1,
        pointValue: 1
    },

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: Lorelei floated ______ the surface of the water.",
        answers: ["A: on", "B: for", "C: to", "D: of"],
        value: 0,
        pointValue: 1
    },

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: I got a care package ______ my brother.",
        answers: ["A: on", "B: from", "C: to", "D: of"],
        value: 1,
        pointValue: 2
    },

    {
        grade: 4,
        skill: "Prepositional phrases",
        question: "Choose the preposition that makes the most sense in this sentence: The birds flew ______ north.",
        answers: ["A: down", "B: from", "C: up", "D: of"],
        value: 2,
        pointValue: 5
    },

    // COORDINATING CONJUNCTIONS

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Choose the conjunction that fits best in this sentence: Kathleen recently moved to Seattle, ______ she hates the rain.",
        answers: ["A: but", "B: or", "C: yet", "D: nor"],
        value: 2,
        pointValue: 5
    },

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Naomi is afraid of small spaces, so she always takes the stairs instead of the elevator. What is the word so doing in this sentence?",
        answers: ["A: Expressing an exception", "B: Showing a choice between options", "C: Showing the consequence of something", "D: Expressing a negative feeling"],
        value: 2,
        pointValue: 6
    },

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Desteni loves being outside, ______ she walks home from school every day.",
        answers: ["A: so", "B: or", "C: yet", "D: nor"],
        value: 0,
        pointValue: 1
    },

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Do you want to go for a bike ride or stay home and read? What is or doing in this sentence ? ",
        answers: ["A: Expressing an exception", "B: Showing a choice between options", "C: Showing the consequence of something", "D: Expressing a negative feeling"],
        value: 1,
        pointValue: 5
    },

    {
        grade: 4,
        skill: "Coordinating conjunctions",
        question: "Choose the conjunction that fits best in this sentence: I was confident about my submarine driving exam results, ______ I had studied.",
        answers: ["A: but", "B: or", "C: yet", "D: for"],
        value: 3,
        pointValue: 7
    },

    // RELATIVE PRONOUNS
    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: The sand dunes ______ cover this beach are beautiful.",
        answers: ["A: who", "B: that", "C: whose", "D: what"],
        value: 1,
        pointValue: 1
    },

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Caleb, ______ favorite food is spaghetti, ate a whole plate of pasta and meatballs.",
        answers: ["A: that", "B: whose", "C: what", "D: who"],
        value: 1,
        pointValue: 2
    },

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: The orangutan ______ waved to me at the zoo has two babies.",
        answers: ["A: that", "B: whose", "C: who", "D: what"],
        value: 0,
        pointValue: 1
    },

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Miyu, with ______ I have been friends for five years, is moving to Virginia.",
        answers: ["A: that", "B: whose", "C: whom", "D: who"],
        value: 2,
        pointValue: 5
    },

    {
        grade: 4,
        skill: "Relative pronouns",
        question: "Choose the correct relative pronoun: Jenny is faster at scooping ice cream than the girl ______ normally works at Parson’s Ice Cream Parlor.",
        answers: ["A: that", "B: whose", "C: whom", "D: who"],
        value: 3,
        pointValue: 4
    },
    // 5th Grade

    // PUNCTUATING A LIST

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: Tesfai needs to buy dinnerget gas and pick up his kids on his way home.",
        answers: ["A: Tesfai needs to buy dinner, get gas and pick up his kids on his way, home.", "B: Tesfai needs to buy dinner, get gas, and pick up, his kids, on his way home.", "C: Tesfai needs to buy dinner, get gas, and pick up his kids on his way home.", "D: Fine as is"],
        value: 2,
        pointValue: 8
    },

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: At recess I like to read play foursquare and talk to my friends who are in other classes.",
        answers: ["A: At recess I like, to read, play foursquare and talk, to my friends who are in other classes.", "B: At recess, I like to read, play foursquare, and talk to my friends who are in other classes.", "C: At recess I like to read play foursquare, and talk to my friends who, are in other classes.", "D: Fine as is"],
        value: 1,
        pointValue: 10
    },

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: When the class went to the zoo they saw zebras kangaroos penguins and many more animals.",
        answers: ["A: When the class went to the zoo, they saw zebras, kangaroos, penguins, and many more animals.", "B: When the class went to the zoo, they saw zebras kangaroos penguins, and many more animals.", "C: When the class went to the zoo, they saw zebras, kangaroos, penguins, and many, more, animals.", "D: Fine as is"],
        value: 0,
        pointValue: 8
    },

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: She likes her coffee with one packet of sugar some skim milk and a bagel on the side.",
        answers: ["A: She likes her coffee with one packet of sugar, some skim milk and a bagel on the side.", "B: She likes her coffee with one packet of sugar some, skim, milk, and a bagel on the side.", "C: She likes her coffee with one packet of sugar, some skim milk, and a bagel on the side.", "D: Fine as is"],
        value: 2,
        pointValue: 12
    },

    {
        grade: 5,
        skill: "Punctuating a list",
        question: "Punctuate the different elements of this list by putting commas in the right places: I want to try her famous cookies but I’m allergic to eggs milk peanuts and shrimp.",
        answers: ["A: I want to try her famous cookies, but I am allergic to eggs, milk, peanuts, and shrimp.", "B: I want to try her famous cookies, but I am allergic to eggs milk peanuts and shrimp.", "C: I want to try her famous cookies, but I am allergic to, eggs, milk, peanuts, and shrimp.", "D: Fine as is"],
        value: 1,
        pointValue: 14
    },


    // CORRELATIVE CONJUNCTIONS

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: Should I stay ____ should I go?",
        answers: ["A: nor", "B: but", "C: or", "D: then"],
        value: 2,
        pointValue: 4
    },

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: We’ll find the kangaroos either by the watering hole ______ under the shade tree.",
        answers: ["A: and", "B: or", "C: nor", "D: yet"],
        value: 1,
        pointValue: 3
    },

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: Mrs. Emmer, a chef, not only dices onions with ease ______ specializes in lemon meringue pie.",
        answers: ["A: nevertheless", "B: nor", "C: or", "D: but also"],
        value: 3,
        pointValue: 10
    },

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: ______ Samantha nor her mother had been to Iowa City before.",
        answers: ["A: Either", "B: Neither", "C: Nor", "D: Also"],
        value: 1,
        pointValue: 10
    },

    {
        grade: 5,
        skill: "Correlative conjunctions",
        question: "Choose the best conjunction for this sentence: If I let you go to Mars, ______ I’d have to let everyone else go.",
        answers: ["A: then", "B: so", "C: but", "D: nor"],
        value: 0,
        pointValue: 12
    },

    // INTRO TO VERB TENSE

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: Tomorrow, we ______ a rocket to the moon!",
        answers: ["A: were riding", "B: rode", "C: will ride", "D: rides"],
        value: 2 ",
        pointValue: 6
    },

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: The rubber balls bounced and ______ on the floor.",
        answers: ["A: will tumble", "B: tumbled", "C: tumble", "D: tumbles"],
        value: 1,
        pointValue: 8
    },

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: Agnes ______ on the window, but nobody valueed.",
        answers: ["A: tapped", "B: taps", "C: will tap", "D: tapping"],
        value: 0,
        pointValue: 4
    },

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: The dead leaves ______ while we were gone.",
        answers: ["A: will rot", "B: rotting", "C: rotted", "D: rot"],
        value: 2,
        pointValue: 2
    },

    {
        grade: 5,
        skill: "Intro to verb tense",
        question: "Choose the verb tense that makes the most sense: I think he can ______ me behind this fence.",
        answers: ["A: saw", "B: will see", "C: see", "D: sees"],
        value: 2,
        pointValue: 4
    },

     // 6th Grade

    // POSSESSIVE PRONOUNS

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: Jessica, I can’t believe ______ dog ate that entire steak!",
        answers: ["A: you", "B: your", "C: yours", "D: that"],
        value: 1,
        pointValue: 2
    },

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: Whose treehouse is the greatest in the world, you ask? ______ is!",
        answers: ["A: We", "B: Our", "C: Ours", "D: This"],
        value: 2,
        pointValue: 6
    },

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: That fluffy pink llama is _______.",
        answers: ["A: We", "B: Ours", "C: Our", "D: This"],
        value: 1,
        pointValue: 6
    },

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: ______ dream is to be part of the first Mars colony.",
        answers: ["A: Mine", "B: Me", "C: My", "D: That"],
        value: 2,
        pointValue: 4
    },

    {
        grade: 6,
        skill: "Possessive pronouns",
        question: "Choose the correct possessive pronoun or adjective for this sentence: That baseball glove is ______.",
        answers: ["A: hers", "B: her", "C: she", "D: he"],
        value: 0,
        pointValue: 5
    },

    // REFLEXIVE PRONOUNS

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Jamal cut ______ shaving.",
        answers: ["A: himself", "B: him", "C: that", "D: thatself"],
        value: 0,
        pointValue: 2
    },

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Abigail was nervous about her presentation, but Isabella told ______ it would be okay.",
        answers: ["A: herself", "B: her", "C: that", "D: thatself"],
        value: 1,
        pointValue: 3
    },

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Will you listen to ______? You're being absurd.",
        answers: ["A: I", "B: yourself", "C: you", "D: this"],
        value: 1,
        pointValue: 6
    },

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: A fly appeared in the frog’s field of vision. The frog captured ______.",
        answers: ["A: it", "B: itself", "C: you", "D: this"],
        value: 0,
        pointValue: 4
    },

    {
        grade: 6,
        skill: "Reflexive pronouns",
        question: "Choose the best pronoun for this sentence: Milosh didn't care if Evana was mean to ______; he loved her.",
        answers: ["A: it", "B: itself", "C: himself", "D: him"],
        value: 3,
        pointValue: 6
    },

    // THE PERFECT ASPECT OF VERBS

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: Anju [thought] the cake looked dreadful, but she ate it anyhow.",
        answers: ["A: thought", "B: was thinking", "C: had thought", "D: thinks"],
        value: 2,
        pointValue: 8
    },

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: Beatriz [exhausted] all her options.",
        answers: ["A: was exhausting", "B: exhausted", "C: exhausts", "D: had exhausted"],
        value: 3,
        pointValue: 6
    },

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: The court already [made] its judgment by the time Wendell made it to the courthouse.",
        answers: ["A: was making", "B: had made", "C: made", "D: makes"],
        value: 1,
        pointValue: 4
    },

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: By Thursday, I will [visit] Western Pennsylvania.",
        answers: ["A: visit", "B: be visiting", "C: have visited", "D: visits"],
        value: 2,
        pointValue: 7
    },

    {
        grade: 6,
        skill: "The perfect aspect of verbs",
        question: "Choose the perfect form of the bracketed verb: The conductor [chatted] with passengers when Imelda boarded the train.",
        answers: ["A: had chatted", "B: chatted", "C: chats", "D: chatting"],
        value: 0,
        pointValue: 8
    }

];

db.Question
    .remove({})
    .then(() => db.Question.collection.insertMany(questionSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });