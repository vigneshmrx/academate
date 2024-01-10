const randomQuoteFun = () => {
    let arrayObj = {"quoteArrOne" : ["\"<i>I hated every minute of training. But I said, 'Don't quit. Suffer now and live the rest of your life as a champion</i>.'\"<br><br><b>Muhammad Ali</b>",
                                        "\"<i>Remember the bad and forget the good to keep your own greatness in prespective</i>\"", 
                                        "\"<i>Every person is a world to explore</i>\"<br><br><b>Thich Nhat Hanh</b>",
                                        "\"They are forever free who renounce all selfish desires and break away from the ego care of \'I\', \'me\', and \'mine\'.\"<br><br><b>Bhagvad Gita</b>",
                                        "\"<i>Controlling your time is the highest dividend money pays</i>.\"",
                                        "\"<i>Good investing is not necessarily about making good decisions. It's about consistently not screwing up</i>.\"",
                                        "\"<i>Men often become what they believe themselves to be. If I believe I cannot do something, it makes me incapable of doing it. But when I believe I can, then I acquire the ability to do it even if I didn\'t have it in the beginning</i>.\"",
                                        "<i>A wise old owl lived in an oak,<br>The more he saw the less he spoke,<br>The less he spoke, the more he heard,<br>Why aren't we all like the wise old bird?</i>",
                                        "\"<i>Gold laboureth diligently and contentedly for the wise owner who finds for it profitable employment, multiplying even as the flocks of the field</i>.\"<br><br><b>The Second Law of Gold</b> (The Richest Man in Babylon - George S. Clason)",
                                        "\"<i>The desire for more positive experience is itself a negative experience. And, paradoxically, the acceptance of one's negative experience is itself a positive experience</i>.\""],
                    
                    "quoteArrTwo" : ["\"<i>The ignorant work for their own profit… the wise work for the welfare of the world…</i>\"<br><br><b>Bhagavad Gita, 3:25</b>",
                                        "\"<i>Do not live as if you have ten thousand years left. Your fate hangs over you. While you are still living, while you still exist on this Earth, strive to become a genuinely great person.</i>\"<br><br><b>Marcus Aurelius, Roman emperor</b>",
                                        "\"<i>Everyone holds his fortune in his own hands, like a sculptor the raw material he will fashion into a figure.. .. The skill to mold the material into what we want must be learned and attentively cultivated.</i>\"<br><br><b>Johann Wolfgang von Goethe</b>",
                                        "\"<i>A child has no trouble believing the unbelievable, nor does the genius or the madman. It\'s only you and I, with our big brains and our tiny hearts, who doubt and overthink and hesitate</i>.\"<br><br><b>Steven Pressfield</b>",
                                        "\"<i>Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become.</i>\"<br><br><b>Steve Jobs</b>",
                                        "\"<i>Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe 80% of how you think the world works</i>.\"",
                                        "\"<i>Whatever you can do or dream you can, begin it. Boldness has genius, power and magic in it. Begin it now</i>.\"<br><br><b>Goethe</b>",
                                        "\"<i>Gold cometh gladly and in increasing quantity to any man who will put by not less than one-tenth of his earnings to create an estate for his future and that of his family</i>.\"<br><br><b>The First Law of Gold</b> (The Richest Man in Babylon - George S. Clason)",
                                        "\"<i>Gold clingeth to the protection of the cautious owner who invests in under the advice of men wise in its handling</i>.\"<br><br><b>The Third Law of Gold</b> (The Richest Man in Babylon - George S. Clason)"],
                    
                    "quoteArrThree" : ["\"<i>It is well to be up before breakfast, for such habits contribute to health, wealth and wisdom</i>.\"<br><br><b>Aristotle</b>",
                                        "\"<i>The men who are great live with that which is substantial, they do not stay with that which is superficial; they abide with realities, they remain not with what is showy. The one they discard, the other they hold</i>.\"<br><br><b>Lao Tzu</b>",
                                        "\"<i>The life given us, by nature is short, but the memory of a well-spent life is eternal</i>.\"<br><br><b>Cicero</b>",
                                        "\"<i>The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart</i>.\"<br><br><b>Helen Keller</b>",
                                        "\"<i>Spending money to show people how much money you have is the fastest way to have less money</i>.\"<br><br><b>The Psychology of Money</b>",
                                        "\"<i>No matter how busy you may think you are, you must find time for reading, or surrender yourself to self-chosen ignorance</i>.\"",
                                        "\"<i>Very little is needed to make a happy life; it is all within yourself, in your way of thinking</i>\"<br><br><b>Marcus Aurelius</b>",
                                        "\"<i>Wisdom is a weapon to ward off destruction; It is an inner fortress which enemies cannot destroy</i>.\"<br><br><b>Thirukkural 421 (200 BC)</b>",
                                        "\"<i>Gold slippeth away from the man who invests it in business or purposes with which he is not familiar or which are not approved by those skilled in its keep</i>.\"<br><br><b>The Fourth Law of Gold</b> (The Richest Man in Babylon - George S. Clason)"],
                    
                    "quoteArrFour" : ["\"<i>Spending money to show people how much money you have is the fastest way to have less money</i>.\"", 
                                        "\"<i>The most important part of every plan is planning on your plan not going according to plan</i>.\"", 
                                        "\"<i>Everything has a price, but not all prices appear on labels</i>.\"",
                                        "\"<i>You cannot escape the responsibility of tomorrow by evading it today</i>\"<br><br><b>Abraham Lincoln</b>", 
                                        "\"<i>Work on it TODAY, not tomorrow</i>\"", 
                                        "\"<i>Fools learn from experience. I prefer to learn from the experience of others</i>.\"<br><br><b>Otto Van Bismarck</b>",
                                        "\"<i>If life were predictable it would cease to be life, and be without flavor</i>\"<br><br><b>Eleanor Roosevelt</b>",
                                        "\"<i>Determine that things can and shall be done, and then we shall find the way</i>.\"<br><br><b>Abraham Lincoln</b>",
                                        "\"<i>Gold flees the man who would force it to impossible earnings or who followeth the alluring advice of tricksters and schemers or who trust it to his own inexperience and romantic desires in investment</i>.\"<br><br><b>The Fifth Law of Gold</b> (The Richest Man in Babylon - George S. Clason)"]
                    };

    let arrNames = ["quoteArrOne", "quoteArrTwo", "quoteArrThree", "quoteArrFour"];

    let randomKey = arrNames[Math.floor(Math.random() * 4)];

    let randomQuote = arrayObj[randomKey][(Math.floor(Math.random() * 9))];

    showQuote(randomQuote);
}

const showQuote = (theQuote) => {
    let quoteBox = document.getElementsByClassName("quote-box")[0];

    quoteBox.innerHTML = theQuote;
}
