const quotes = {
    'Steve Jobs': [
        'Innovation distinguishes between a leader and a follower.',
        'Design is not just what it looks like and feels like. Design is how it works.',
        'Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.',
        'Don’t let the noise of others’ opinions drown out your own inner voice.',
        'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.',
        'Sometimes life\'s going to hit you in the head with a brick. Don\'t lose faith. I\'m convinced that the only thing that kept me going was that I loved what I did.',
        'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.',
        'People who know what they are talking about don\'t need PowerPoint.'
    ],
    'Albert Einstein': [
        'Creativity is intelligence having fun.',
        'Try not to become a man of success, but rather try to become a man of value.',
        'Great spirits have always encountered violent opposition from mediocre minds.',
        'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
        'If you can\'t explain it to a six year old, you don\'t understand it yourself.',
        'Anyone who has never made a mistake has never tried anything new.',
        'Never memorize something that you can look up.',
        'A clever person solves a problem. A wise person avoids it.',
        'Any fool can know. The point is to understand.',
        'The measure of intelligence is the ability to change.',
        'It is not that I\'m so smart. But I stay with the questions much longer.'
    ],
    'Bill Gates': [
        'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.',
        'If you can\'t make it good, at least make it look good.',
        'Your most unhappy customers are your greatest source of learning.',
        'Most people overestimate what they can do in one year and underestimate what they can do in ten years.',
        'Success is a lousy teacher. It seduces smart people into thinking they can\'t lose.',
        'If you give people tools, and they use their natural abilities and their curiosity, they will develop things in ways that will surprise you very much beyond what you might have expected.',
        'As we look ahead into the next century, leaders will be those who empower others.',
        'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
        'Our success has really been based on partnerships from the very beginning.',
        'The vision is really about empowering workers giving them all the information about what’s going on so they can do a lot more than they’ve done in the past',
        'Some people may call me a nerd. I claim the label with pride.'
    ],
    'Jeff Bezos': [
        'If you decide that you’re going to do only the things you know are going to work, you’re going to leave a lot of opportunity on the table.',
        'Life’s too short to hang out with people who aren’t resourceful.',
        'People who are right most of the time are people who change their minds often.',
        'The thing that motivates me is a very common form of motivation. And that is, with other folks counting on me, it’s so easy to be motivated.',
        'Cleverness is a gift, kindness is a choice.',
        'A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.',
        'The common question that gets asked in business is, ‘why?’ That’s a good question, but an equally valid question is, ‘why not?’',
        'If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.',
        'The best customer service is if the customer doesn’t need to call you, doesn’t need to talk to you. It just works.',
        'Obsess about customers, not competitors.',
        'Your brand is what other people say about you when you’re not in the room.',
        'If you double the number of experiments you do per year you’re going to double your inventiveness.',
        'Be stubborn on vision, but flexible on details.',
        'We can’t be in survival mode. We have to be in growth mode.',
        'Work hard, have fun, make history.',
        'The keys to success are patience, persistence, and obsessive attention to detail',
        'All of my best decisions in business and in life have been made with heart, intuition, guts… not analysis.'
    ],
    'Elon Musk': [
        'When something is important enough, you do it even if the odds are not in your favour.',
        'My proceeds from the PayPal acquisition were $180 million. I put $100 million in SpaceX, $70m in Tesla, and $10m in Solar City. I had to borrow money for rent.',
        'You should take the approach that you’re wrong. Your goal is to be less wrong.',
        'You get paid in direct proportion to the difficulty of problems you solve.',
        'Constantly seek criticism. A well thought out critique of whatever you’re doing is as valuable as gold.',
        'It is possible for ordinary people to choose to be extraordinary.',
        'If you need inspiration, don\'t do it.',
        'The first step is to establish that something is possible then probability will occur.',
        'One of the biggest mistakes we made was trying to automate things that are super easy for a person to do, but super hard for a robot to do.',
        'If you buy a ticket to hell, it isn\'t fair to blame hell.'
    ],
    'Walt Disney': [
        'Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back and see you do it again, and they will want to bring others and show them how well you do what you do.',
        'The difference between winning and losing is most often not quitting.',
        'Some dream it, some do it, some do both.',
        'You can be happy or you can be unhappy. It\'s just according to the way you look at things.',
        'Just as writers write the books they always wished they could read, Walt built the playground his inner child had always wanted to explore.',
        'If you can dream it, you can do it.',
        'Laughter is timeless, imagination has no age, dreams are forever.',
        'The way to get started is to quit talking and begin doing.',
        'Why worry? If you’ve done the very best you can, then worrying won’t make it any better.',
        'I don’t make pictures just to make money. I make money to make more pictures.'
    ],
    'Arnold Schwarzenegger': [
        'You have to remember something: Everybody pities the weak; jealousy you have to earn.',
        'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.',
        'What is the point of being on this Earth if you are going to be like everyone else?',
        'Just like in bodybuilding, failure is also a necessary experience for growth in our own lives, for if we’re never tested to our limits, how will we know how strong we really are? How will we ever grow?',
        'For me life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.',
        'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion. That’s what most people lack, having the guts to go on and just say they’ll go through the pain no matter what happens.',
        'If you don’t find the time, if you don’t do the work, you don’t get the results.',
        'Positive thinking can be contagious. Being surrounded by winners helps you develop into a winner.',
        'If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream.',
        'Be hungry for success, hungry to make your mark, hungry to be seen and to be heard and to have an effect. And as you move up and become successful, make sure also to be hungry for helping others.',
        'The more knowledge you have, the more you’re free to rely on your instincts.',
        'I knew I was a winner back in the late sixties. I knew I was destined for great things. People will say that kind of thinking is totally immodest. I agree. Modesty is not a word that applies to me in any way – I hope it never will.',
        'Life’s six rules for success. 1. Trust yourself. 2. Break some rules. 3. Don’t be afraid to fail. 4. Ignore the naysayers. 5. Work like hell. 6. Give something back.'
    ]
};

export default quotes;