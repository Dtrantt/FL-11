const settings = {

    prizeIndex: 2,
    prizeLess: 2,
    rangeAdd: 4,
    startPrize: 100,
    startRange: 8,
    chanceCount: 3
};

let numUser;
let randomNum;
let range = settings.startRange;
let chance = settings.chanceCount;
let maxPrize = settings.startPrize;
let prizeCurrentGame = 0;
let sumPrize = 0;
let continueGame = true;

let startPlay = confirm('Do you want to play a game?');

if (startPlay) {

    while (continueGame) {
        randomNum = Math.floor(Math.random() * range + 1);
        prizeCurrentGame = maxPrize;

        for (let i = 1; i <= settings.chanceCount; i++) {
            numUser = Number(prompt(
                `
                Choose a roulette pocket number from 0 to ${range}
                Attempts left: ${chance}
                Total prize: ${sumPrize}$
                Possible prize on current attempt: ${prizeCurrentGame}$
                `
            ));

            if (numUser === randomNum) {
                sumPrize += prizeCurrentGame;
                continueGame = confirm(
                    `Congratulation, you won! Your prize is: ${prizeCurrentGame}$. Do you want to continue?`
                );
                break;
            }
            prizeCurrentGame /= settings.prizeLess;
            chance--;
        }

        if (!chance) {
            sumPrize = 0;
            prizeCurrentGame = 0;
            range = settings.startRange;
            maxPrize = settings.startPrize;
        } else {
            range += settings.rangeAdd;
            maxPrize *= settings.prizeIndex;
        }

        if(!continueGame || !chance){
            alert(`Thank you for your participation. Your prize is: ${sumPrize}$`);
            continueGame = confirm('Do you want to play again?');
        }

        chance = settings.chanceCount;
    }

} else {
    alert('You did not become a billionaire, but can.');
}