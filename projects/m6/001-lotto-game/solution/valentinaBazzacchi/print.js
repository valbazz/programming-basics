const Extraction = require("./extraction");
/* 

Ticket example:
+-------+------------------------+
| LOTTO |        Ticket 1        |
+-------+------------------------+
| Played numbers:                |   
| 22 55 66 45 34 23 67 34 56 45  |
| Milano                         |
|                                |   
| CINQUINA                       |
+--------------------------------+

Extraction Table example:
+--------------------------------+
| Lotto extraction today         |
| Wednesday September 14, 2022   |
+--------------------------------+
| Bari        73  77  87  81  83 |
| Cagliari    47   6  33  34  59 |
| Firenze     40  75  12  68  29 |
| Genova      25  43  15  48  61 |
| Milano      23  88  90   8  80 |
| Napoli      58  69  50  48  65 |
| Palermo     44  16  69  46  66 |
| Roma        38  35   1  56  15 |
| Torino      38  69  63  60  55 |
| Venezia     61   8  54  26  79 |
+--------------------------------+

*/

class Print {

    // --------------------- METHODS TO PRINT A STRING ---------------------

    /** 
    * Prints on the console the message passed as argument. 
    * @param {string} message - Any text message to print on the console.
    */

      static printMessage(message) {
        return console.log(message);
    }

    
    // --------------------- METHODS TO PRINT THE TICKETS ---------------------
    
    /** 
     * Gets the string for rapresenting a ticket with a nice ascii art table decoration. 
     * @param {Object} ticket - The object "ticket" (instance of class Ticket).
     * @returns {string} The graphic rapresentation of the ticket.
     */

    static designTicket(ticket) {

        const numStr = ticket.numbers.join(" ");
        const wheelStr = this.capitalizeFirstLetter(ticket.wheel);
       
        const header = `+-------+------------------------+\n| LOTTO |        Ticket ${ticket.id}        |\n+-------+------------------------+\n`;
        const numTitle = `| Played numbers:                |\n`
        const numRow = `| ${numStr}${this.calculateSpace(34, 3, numStr.length)}|\n`;
        const wheelRow = `| ${wheelStr}${this.calculateSpace(34, 3, wheelStr.length)}|\n`;
        const blankRow = `|${this.calculateSpace(34, 2, 0)}|\n`;
        const betRow = `| ${ticket.bet.toUpperCase()}${this.calculateSpace(34, 3, ticket.bet.length)}|\n`;
        const footer = "+--------------------------------+\n\n";
        return header + numTitle + numRow + wheelRow + blankRow + betRow + footer;
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

    
    // --------------------- METHODS TO PRINT THE EXTRACTION TABLE ---------------------

    /** 
     * Gets the string for rapresenting the extraction table.
     * @param {Object} extraction - Extraction.getExtractions() -> The object that maps the numbers drawn on each city. 
     * @returns {string} The graphic rapresentation of the extraction table.
     */
    
    static designExtraction(extraction) {
        
        const dateStr = Extraction.getExtractionDate();
        
        const header1 = `+--------------------------------+\n| Lotto extraction today         |\n`;
        const header2 = `| ${dateStr}${this.calculateSpace(34, 3, dateStr.length)}|\n+--------------------------------+\n`;
        const wheelsRows = this.getExtractionWheelsRows(extraction);
        const footer = "+--------------------------------+";
        return header1 + header2 + wheelsRows + footer;
    }

    /** 
     * Gets the string of the wheels/numbers section of the extraction table. 
     * @param {Object} extraction - Extraction.getExtractions() -> The object that maps the numbers drawn on each city. 
     * @returns {string} The list of all the wheels and their extracted numbers.
     */
    
    static getExtractionWheelsRows(extraction) {
        
        let rows = "";
        
        for(let city in extraction) {
            
            rows += "| ";
            rows += `${this.capitalizeFirstLetter(city)}`;
            rows += `${this.calculateSpace(34, 24, city.length)}`;
            rows += `${this.getNumStr(extraction[city])}`;
            rows += " |\n";
        }
        
        return rows;
    }

    /** 
     * Gets the string of the extracted numbers on a single wheel with the correct spacing.
     * @param {number[]} numbers - extraction[key] - The array of numbers that is the value of the extraction obj.  
     * @returns {string} A string with the list of numbers drawn on a single wheel.
     */
    
    static getNumStr(numbers) {
        
        let numbersStr = "";
        
        numbers.forEach((num) => {
            
            const numToStr = num.toString();    
            numbersStr += numToStr.length === 1 ? `   ${numToStr}` : `  ${numToStr}`;
        })  
        
        return numbersStr;
    }

    
    // -------------------------- UTILS --------------------------
    
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

}

module.exports = Print;