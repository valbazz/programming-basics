class Extraction {

    static extractions = {};

     /**
     * Gets a list of 5 unique random numbers (represents the extraction on a single wheel).
     * @returns {number[]} An array of 5 random numbers from 1 to 90 (inclusive). 
     */
    
    static getSingleExtraction() {
        
        const numDrawn = [];

        while (numDrawn.length < 5) {

            const randomNumber = Math.floor(Math.random() * 90) + 1;

            if (!numDrawn.includes(randomNumber)) {
                numDrawn.push(randomNumber);
            }
        }
        return numDrawn;
    }

    /** 
     * Gets the extraction of 5 unique random numbers on each wheel ("tutte" excluded).
     * @param {string[]} wheels - The list of wheels (from Wheel.cities).
     * @returns {Object} Returns an object that maps the numbers drawn (values: number[]) on each city (keys: string). 
     */
    
    static getExtractions(wheels) {

        const cities = wheels.filter(wheel => wheel !== "tutte");
        cities.forEach(city => this.extractions[city] = this.getSingleExtraction());
        return this.extractions;
    }

    /** 
     * Gets a string that represents the date of the draw (the day the program is run).
     * @returns {string} Returns a string gets through the methods of the Date object.
     */
    
    static getExtractionDate() {

        const now = new Date();
        const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"] [now.getDay()];
        const day = now.getDate();
        const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"] [now.getMonth()];
        const year = now.getFullYear();
        return `${dayOfWeek} ${month} ${day}, ${year}`;
    }
}

module.exports = Extraction;