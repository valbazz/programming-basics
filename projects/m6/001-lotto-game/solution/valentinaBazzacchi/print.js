/* 

example:
+--------------------------------+
|            Ticket 1            |
+--------------------------------+
| Wheel: Milano                  |
| 22 55 66 45 34 23 67 34 56 45  |
+--------------------------------+

*/

class Print {

    /** 
     * Gets the string for rapresenting a ticket with a nice ascii art table decoration. 
     * @param {Object} ticket - The object "ticket" (instance of class Ticket).
     * @returns {string} The graphic rapresentation of the ticket.
     */

    static designTicket(ticket) {

        const numStr = ticket.numbers.join(" ");
        const wheelStr = this.capitalizeFirstLetter(ticket.wheel);

        const header = `+--------------------------------+\n|            Ticket ${ticket.id}            |\n+--------------------------------+\n`;
        const wheelRow = `| Wheel: ${wheelStr}${this.calculateSpace(34, 10, wheelStr.length)}|\n`;
        const numRow = `| ${numStr}${this.calculateSpace(34, 3, numStr.length)}|\n`;
        const footer = "+--------------------------------+\n\n";
        return header + wheelRow + numRow + footer;
    }

    /** 
     * Capitalizes the first letter of a string. 
     * @param {string} word - Any lowercase word.
     * @returns {string} The word passed as argument with the first letter capitalized.
     */

    static capitalizeFirstLetter(word) {
        const firstLetter = word.slice(0, 1).toUpperCase(); 
        return firstLetter + word.slice(1); 
    }
    
    /** 
     * Calculates the number of blank characters to add in a line (string) for a nice graphic rapresentation of a ticket.
     * @param {number} totalWidth - The width of the ticket.
     * @param {number} fixedCharsLength - The number of fixed characters in a line (string).
     * @param {number} stringLength - The number of variable characters in a line (depends on the string length for wheel and for numbers).
     * @returns {string} A string of blank characters. 
     */

    static calculateSpace(totalWidth, fixedCharsLength, stringLength) {

        const blankWidth = totalWidth - fixedCharsLength - stringLength;

        let blankStr = "";

        for (let i = 0; i < blankWidth; i++) {

            blankStr += " ";
        }
        return blankStr;
    }
    
    /** 
     * Prints on the console a list of tickets.  
     * @param {Object[]} tickets - An array of tickets generates by the program.
     */

    static printTickets(tickets) {
        tickets.forEach((ticket) => {
            console.log(this.designTicket(ticket));
        })
    }

    /** 
    * Prints on the console the message passed as argument. 
    * @param {string} message - Any text message to print on the console.
    */

    static printMessage(message) {
        return console.log(message);
    }
}

module.exports = Print;