export default class MoveTurn {

    static YOU = 'you';
    static OPPONENT = 'opponent';


    static togglePlayer = (prevPlayer) => {
        switch(prevPlayer) {
            case this.YOU : {
                return this.OPPONENT;
            }

            case this.OPPONENT : {
                return this.YOU;
            }

            default : {
                throw `unknown player ${prevPlayer}`;
            }

        }

    }

};
