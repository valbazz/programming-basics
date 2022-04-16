const Bet = require("./bet");

class Win {

    static winningTickets = [];

    /** 
     * Checks if a ticket is a winner according to the numbers drawn and the played bet.
     * @param {Object} ticket - A single ticket generate as instance of the class Ticket.  
     * @param {Object} extraction - The object that maps all the numbers drawn on each wheel.
     * @returns {boolean} Returns true if the played bet has been reached or false.
     */

    static checkWinningTicket(ticket, extraction) {

        const betValue = Bet.types[ticket.bet];
        let winningNumAmount;

        if (ticket.wheel !== "tutte") {
            
            winningNumAmount = this.calcEqualNum(ticket.numbers, extraction[ticket.wheel]);
        
        } else {
            
            const allDrawnNum = Object.values(extraction).flat();
            winningNumAmount = this.calcEqualNum(ticket.numbers, allDrawnNum);
        }

        return winningNumAmount >= betValue;
    }

    /** 
     * Checks how many equal numbers there are between two lists of numbers.
     * @param {number[]} ticketNum - ticket.numbers - The non-repeated numbers of a ticket played on a wheel. 
     * @param {number[]} drawnNum - The numbers drawn on the played wheel included "tutte" (with possible repetitions).
     * @returns {number} Returns the amount of winning numbers on the played wheel.
     */
    
     static calcEqualNum(ticketNum, drawnNum) {
        const totalNum = ticketNum.length + new Set(drawnNum).size;
        const mergedNum = [...ticketNum, ...drawnNum];
        return totalNum - new Set(mergedNum).size;
    }

    /** 
     * Checks if a ticket is a winner according to the numbers drawn and the played bet.
     * @param {Object[]} tickets - The list of all the played tickets. 
     * @param {Object} extraction - The object that maps all the numbers drawn on each wheel.
     * @returns {Object[]} Returns a list with all the winning tickets. It will be empty if no ticket is winning.
     */
    
    static getWinningTickets(tickets, extraction) {

        tickets.forEach((ticket) => {
            if(this.checkWinningTicket(ticket, extraction)) {
                this.winningTickets.push(ticket);
            }
        })
        
        return this.winningTickets; 
    }
}

module.exports = Win;