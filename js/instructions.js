// Instruction texts
var INSTR_CONTINUE = '<p class="fixed-position-below small">' + 'Press right arrow to continue' + '</p>';
var INSTR_CONTINUE_OR_BACK = '<p class="fixed-position-below small">' + 'Press right arrow to continue, or left arrow to go back' + '</p>';

var INSTR_WAIT = 'Waiting for the other players to get ready...';

var INSTR_WEB = [
                    '<p>' + 'Welcome to our social gaming website!' + '</p><p>' +
                    'This website is currently being tested at college campuses nationwide.' + '</p>',
                    '<p>' + 'You are participating in a study that examines how various factors, like the amount of reward that’s at stake, ' +
                    'impact players\' enjoyment of online games.' + '</p>',
                    '<p>' + 'You\'ll be playing a series of simple games with other people on this website.' + '</p>',
                    '<p>' + 'The players you\'ll be partnered with today are members of our website who regularly use the site and its ' +
                    'associated social network.' + '</p>',
                    '<p>' + 'Players can choose their "Top 5" friends in their social network, whose pictures are displayed alongside their ' +
                    'own profile picture, like this:' + '</p>' +
                    '<img src="img/player_example_1.png" class="player-example">',
                    '<p>' + 'Due to most users’ privacy settings, new users like you can only see those friends\' faces if you\'ve ' +
                    'interacted with them before on the site. Players\' friends who you haven\'t encountered before will look like this:' +
                    '</p>' +
                    '<img src="img/unknown_friend.png" style="margin: 20px;">',
                    '<p>' + 'Therefore, when you haven\'t encountered any of your partner\'s friends before, you\'ll see something like this:' +
                    '</p>' +
                    '<img src="img/player_example_2.png" class="player-example">'
                ];

var INSTR_ASSIGN_ROLE = 'Please wait while we assign your role...';

var INSTR_GAME = [
                    '<p>' + 'Today you’ll be playing 3 blocks of games. Each block will last 5-10 minutes.' + '</p>',
                    '<p>' + 'In Block 1, you’ve been assigned to play the <b>Investment Game</b> with other players.<br/><br/>' + 
                    'In each round of the Investment Game, you’ll be partenered one person, and start with a sum of money. ' +
                    'You\'ll have the opportunity to invest your money by giving a portion of that to your partner -- you can choose ' +
                    'any amount from $0 to $' + MAX_MONEY + '. ' +
                    'Any amount of money you choose to invest will then be <b>tripled</b> and delivered to your partner.<br/>' +
                    'Your partner can then choose how much of the tripled sum to keep, and how much of it to give back to you.<br/><br/>' +
                    'If you choose not to invest anything, you’ll keep all of the money that you started with that round.' + '</p>',
                    '<p>' + 'To give you a sense of how to play the Investment Game, we’ll go through a couple of "practice rounds" now.' +
                    '</p>'
                ];

var INSTR_BLOCK_1 = '<p>' + 'Great, now we\'re ready to begin!<br/>If you understand these instructions, press space to start the first ' +
                    'block of games.' + '</p>';

var INSTR_FIND_PARTNER = 'Please wait while we look for your partners...';

var INSTR_BLOCK_2 = [
                    '<p>' + 'You have now completed Block 1!' + '</p>',
                    '<p>' + 'In Block 2, you’ll be playing the Investment Game again.' + '</p>',
                    '<p>' + 'In this block, you’ll be playing with a new set of partners. You might encounter your previous partners ' +
                    'later on today, but in Block 2, you’ll be playing with all new people.' + '</p>',
                    '<p>' + 'If one of your new partners is a friend with someone you’ve played with before, you’ll be able to see that ' +
                    'person’s face instead of a question mark.' + '</p>',
                    '<p>' + 'Press right arrow to start the second block of games.' + '</p>'
                ];

var INSTR_BLOCK_3 = [
                    '<p>' + 'You have now completed Block 2!' + '</p>',
                    '<p>' + 'We really want to hear about your enjoyment of the games you played today. To ensure that your session ' +
                    'today doesn’t run overtime, we’re now going to move on to the post-game feedback session rather than having you ' +
                    'complete Block 3.' + '</p>'
                ];

// Add continue instr
INSTR_WEB[0] += INSTR_CONTINUE;
for (var i = 1; i < INSTR_WEB.length; ++i) {
    INSTR_WEB[i] += INSTR_CONTINUE_OR_BACK;
}
INSTR_GAME[0] += INSTR_CONTINUE;
for (var i = 1; i < INSTR_GAME.length; ++i) {
    INSTR_GAME[i] += INSTR_CONTINUE_OR_BACK;
}
INSTR_BLOCK_2[0] += INSTR_CONTINUE;
for (var i = 1; i < INSTR_GAME.length - 1; ++i) {
    INSTR_GAME[i] += INSTR_CONTINUE_OR_BACK;
}
INSTR_BLOCK_3[0] += INSTR_CONTINUE;
INSTR_BLOCK_3[1] += INSTR_CONTINUE_OR_BACK;

// jsPsych trials
var beginningInstructions = [
    {
        type: 'instructions',
        pages: INSTR_WEB
    },
    {
        type: 'timed-instr',
        text: INSTR_ASSIGN_ROLE,
        time_min: 2000,
        time_max: 4000
    },
    {
        type: 'instructions',
        pages: INSTR_GAME
    }
];

var waitScreen = {
    type: 'timed-instr',
    text: INSTR_WAIT,
    time_min: 2000,
    time_max: 4000
};

var block1Instructions = [
    {
        type: 'instructions',
        pages: [INSTR_BLOCK_1],
        key_forward: 'space'
    },
    {
        type: 'timed-instr',
        text: INSTR_FIND_PARTNER,
        time_min: 2000,
        time_max: 4000
    },
    {
        type: 'ready'
    }
];

var block2Instructions = [
    {
        type: 'instructions',
        pages: INSTR_BLOCK_2
    },
    {
        type: 'timed-instr',
        text: INSTR_FIND_PARTNER,
        time_min: 2000,
        time_max: 4000
    },
    {
        type: 'ready'
    }
];

var block3Instructions = [
    {
        type: 'instructions',
        pages: INSTR_BLOCK_3
    }
];
