class Ticket {
    
    /**
     * A function that constructs Ticket instances.
     * @property {number} id - The progressive number of the ticket.
     * @param {string} wheel - The wheel choosen by user.
     * @param {number[]} numbers - A list of numbers played by the user.
     * @param {string} bet - The bet choosen by the user.
     */
    
    constructor(wheel, numbers, bet) {
        
        this.id = 0;
        this.wheel = wheel;
        this.numbers = numbers;
        this.bet = bet;  
    } 
}

module.exports = Ticket;