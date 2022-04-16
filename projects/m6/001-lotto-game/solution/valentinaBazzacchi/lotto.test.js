const Bet = require("./bet");
const Wheel = require("./wheel");
const Numbers = require("./numbers");
const Print = require("./print");
const Ticket = require("./ticket");
const Extraction = require("./extraction");
const Win = require("./win");
const Lotto = require("./index");

// ---------------   CLASS BET TESTS --------------- //

// test getInput(input) static method
test('Expected "Bet.getInput" method to return the string passed as argument if it is icluded within the keys of the obj "types"', () => {
    const bet = Bet.getInput("ambo");
    expect(bet).toBe("ambo");
})

test('Expected "Bet.getInput" method to return undefined if the string passed as argument is not icluded within the keys of the obj "types"', () => {
    const bet = Bet.getInput(2);
    expect(bet).toBe(undefined);
})

// test betAgainstNum(bet, numbers) static method
test('Expected "betAgainstNum" method to return true if the list length is greater than or equal to the bet value', () => {
    expect(Bet.betAgaistNum("ambo", [33, 42, 15])).toBe(true);
})

// test betAgainstNum(bet, numbers) static method
test('Expected "betAgainstNum" method to return undefined if the list length is less than the bet value', () => {
    expect(Bet.betAgaistNum("quaterna", [33])).toBe(undefined);
})

// test checkInput(input, list) static method
test('Expected "Bet.checkInput" method to return true if the value passed as first argument is a key of the "types" object', () => {
    expect(Bet.checkInput("terno", Object.keys(Bet.types))).toBe(true);
})

test('Expected "Bet.checkInput" method to return false if the value passed as first argument is not a key of the "types" object', () => {
    expect(Bet.checkInput(5, Object.keys(Bet.types))).toBe(false);
})

// --------------- CLASS WHEEL TESTS --------------- //

// test getInput(input) static method
test('Expected "Wheel.getInput" method to return the string passed as argument if it is icluded in the array "cities"', () => {
    const wheel = Wheel.getInput("roma");
    expect(wheel).toBe("roma");
})

test('Expected "Wheel.getInput" method to return undefined if the string passed as argument is not icluded in the array "cities"', () => {
    const wheel = Wheel.getInput("livorno");
    expect(wheel).toBe(undefined);
})

// test checkInput(input, list) static method
test('Expected "Wheel.checkInput" method to return true if a value included in the array is passed', () => {
    expect(Wheel.checkInput("milano", Wheel.cities)).toBe(true);
})

test('Expected "checkInput" method to return false if a value not included in the array is passed', () => {
    expect(Wheel.checkInput("livorno", Wheel.cities)).toBe(false);
})

// --------------- CLASS NUMBERS TESTS --------------- //

// test getInput(input) static method
test('Expected "Numbers.getInput" method to return the number passed as argument if it is an integer in the range 1-10', () => {
    const amount = Numbers.getInput(3);
    expect(amount).toBe(3);
})

test('Expected "Numbers.getInput" method to return undefined if an integer out of range is passed as argument', () => {
    const amount = Numbers.getInput(13);
    expect(amount).toBe(undefined);
})

test('Expected "Numbers.getInput" method to return undefined if a float is passed as argument', () => {
    const amount = Numbers.getInput(2.3);
    expect(amount).toBe(undefined);
})

test('Expected "Numbers.getInput" method to return undefined if a string is passed as argument', () => {
    const amount = Numbers.getInput("hello");
    expect(amount).toBe(undefined);
})

// test generateRandomNum(amount) static method
test('Expected "generateRandomNum" method to return an array', () => {
    const numbersList = Numbers.generateRandomNum(5);
    expect(Array.isArray(numbersList)).toBe(true);
})

test('Expected "generateRandomNum" method to return an array of the length passed as argument.', () => {
    const numbersList = Numbers.generateRandomNum(8);
    expect(numbersList.length).toBe(8);
})

// test checkNumber(num) static method
test('Expected "checkNumber" method to return true if an integer between 1 and 10 is passed as argument', () => {
    expect(Numbers.checkNumber(3)).toBe(true);
})

test('Expected "checkNumber" method to return false if a float is passed as argument', () => {
    expect(Numbers.checkNumber(2.4)).toBe(false);
})

test('Expected "checkNumber" method to return false if a string is passed as argument', () => {
    expect(Numbers.checkNumber("10")).toBe(false);
})

test('Expected "checkNumber" method to return false if an integer out of range is passed as argument', () => {
    expect(Numbers.checkNumber(12)).toBe(false);
})

// --------------- CLASS TICKET TEST --------------- //

// test ticket1 is an istance of Ticket classes
test('Expected ticket1 object to be an instance of the Ticket class.', () => {
    const ticket1 = new Ticket("Milano", [1, 2, 3, 4], "ambo");
    expect(ticket1 instanceof Ticket).toBe(true);
})

test('Expected the property "wheel" of the ticket2 is the same passed as argument.', () => {
    const ticket2 = new Ticket("Roma", [12, 32, 73, 44], "terno");
    expect(ticket2.wheel).toBe("Roma");
})

// test ticket class "id" property
test('Expected the id property to be correctly assigned to a ticket instance', () => {
    const ticket4 = new Ticket("Firenze", [13, 56, 98], "ambo");
    ticket4.id = 4;
    expect(ticket4.id).toBe(4);
})

// --------------- CLASS PRINT TEST --------------- //

// test calculateSpace(totalWidth, fixedCharsLength, stringLength) method
test('Expected the "calculateSpace" method return a string whose length is equal to the difference between the first parameter minus the second and the third parameters', () => {
    const ticket3 = new Ticket("Napoli", [13, 56, 98, 75], "terno");
    const blankString = Print.calculateSpace(34, 10, ticket3.wheel.length);
    expect(blankString.length).toBe(18);
})

// test capitalizeFirstLetter(string) static method 
test('Expected "capitalizeFirstLetter" method to return a string with the first letter capitalized if I pass a lowercase string as argument', () => {
    expect(Print.capitalizeFirstLetter("hello")).toBe("Hello");
})

test('Expected the "calculateSpace" method return a string whose length is equal to the difference between the first parameter minus the second and the third parameters', () => {
    const ticket3 = new Ticket("Napoli", [13, 56, 98, 75], "terno");
    const numStr = ticket3.numbers.join(" ");
    const blankString = Print.calculateSpace(34, 10, numStr.length);
    expect(blankString.length).toBe(13);
})

// --------------- CLASS LOTTO TEST --------------- //

// test getInput(input) static method
test('Expected "Lotto.getInput" method to return the number passed as argument if it is an integer in the range 0-5', () => {
    const amount = Lotto.getInput(5);
    expect(amount).toBe(5);
})

// test getInput(input) static method
test('Expected "Lotto.getInput" method to return the number passed as argument if it is an integer in the range 0-5', () => {
    const amount = Lotto.getInput(0);
    expect(amount).toBe(0);
})

// test getInput(input) static method
test('Expected "Lotto.getInput" method to return undefined if an integer out of range is passed as argument', () => {
    const amount = Lotto.getInput(12);
    expect(amount).toBe(undefined);
})

// test getInput(input) static method
test('Expected "Lotto.getInput" method to return undefined if a float is passed as argument', () => {
    const amount = Lotto.getInput(2.3);
    expect(amount).toBe(undefined);
})

// test getInput(input) static method
test('Expected "Lotto.getInput" method to return undefined if a string is passed as argument', () => {
    const amount = Lotto.getInput("hello");
    expect(amount).toBe(undefined);
})

// --------------- CLASS EXTRACTION TEST --------------- //

// test getSingleExtraction() static method
test('Expected "getSingleExtraction" method to return an array', () => {
    const numDrawn = Extraction.getSingleExtraction();
    expect(Array.isArray(numDrawn)).toBe(true);
})

test('Expected "getSingleExtraction" method to return five unique numbers', () => {
    const numDrawn = Extraction.getSingleExtraction();
    const uniqueNum = new Set(numDrawn);
    expect(uniqueNum.size).toBe(5);
})

// ------------------ CLASS WIN TEST ------------------ //

// test checkWinningTicket() static method on a "city" wheel 
test('Expected the "checkWinningTicket" method return true if by checking the numbers drawn on the played wheel the bet has been reached', () => {
    const ticket = new Ticket("napoli", [13, 56, 98, 75], "terno");
    const extraction = {milano: [2, 15, 17, 42, 33], roma: [23, 54, 77, 3, 19], napoli: [56, 98, 75, 23, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(true);
})

test('Expected that the "checkWinningTicket" method returns false if the numbers played were drawn on another wheel', () => {
    const ticket = new Ticket("napoli", [13, 56, 98, 75], "terno");
    const extraction = {milano: [13, 66, 98, 75, 22], roma: [23, 54, 77, 3, 19], napoli: [55, 88, 72, 2, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(false);
})

test('Expected the "checkWinningTicket" method return false if by checking the numbers drawn on the played wheel the bet has not been reached', () => {
    const ticket = new Ticket("napoli", [13, 56, 98, 75], "quaterna");
    const extraction = {milano: [2, 15, 17, 42, 33], roma: [23, 54, 77, 3, 19], napoli: [56, 98, 75, 2, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(false);
})

// test checkWinningTicket() static method on the wheel "tutte"
test('Expected the "checkWinningTicket" method return true if by checking all the numbers drawn the bet has been reached (when the wheel played is "tutte")', () => {
    const ticket = new Ticket("tutte", [13, 56, 98, 75], "terno");
    const extraction = {milano: [2, 15, 17, 13, 33], roma: [13, 54, 77, 3, 98], napoli: [12, 52, 75, 2, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(true);
})

test('Expected the "checkWinningTicket" method return false if by checking all the numbers drawn the bet has not been reached (when the wheel played is "tutte")', () => {
    const ticket = new Ticket("tutte", [13, 56, 98, 75], "terno");
    const extraction = {milano: [2, 15, 56, 43, 33], roma: [13, 46, 77, 3, 19], napoli: [12, 52, 65, 2, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(false);
})

test('Expected the "checkWinningTicket" method return false when the same drawn number is repeated on different wheels but the bet has not been reached', () => {
    const ticket = new Ticket("tutte", [13, 56, 98, 75], "ambo");
    const extraction = {milano: [2, 25, 17, 13, 33], roma: [13, 54, 77, 3, 19], napoli: [13, 52, 77, 2, 64]};
    expect(Win.checkWinningTicket(ticket, extraction)).toBe(false);
})

// test calcEqualNum() static method
test('Expected the "calcEqualNum" method return the correct quantity of equal numbers between two lists of numbers', () => {
    const ticketNum = [1, 2, 3, 4];
    const drawnNum = [1, 2, 3, 4, 5];
    expect(Win.calcEqualNum(ticketNum, drawnNum)).toBe(4);
})

test('Expected that the "calcEqualNum" method returns zero if between two lists of numbers there aren\'t equal numbers', () => {
    const ticketNum = [1, 2, 3, 4];
    const drawnNum = [5, 6, 7, 8, 9];
    expect(Win.calcEqualNum(ticketNum, drawnNum)).toBe(0);
})

test('Expected the "calcEqualNum" method return the correct quantity of equal numbers if repeated numbers are passed as second argument', () => {
    const ticketNum = [1, 2, 3, 4];
    const drawnNum = [1, 1, 3, 4, 4, 5];
    expect(Win.calcEqualNum(ticketNum, drawnNum)).toBe(3);
})

// test getWinningTickets() static method
test('Expected the "getWinningTickets" method return a list of 1 winning tickets', () => {
    const tickets = [{wheel: "napoli", numbers: [13, 56, 98, 75], bet: "quaterna"}, {wheel: "roma", numbers: [54, 46, 16], bet: "ambo"}];
    const extraction = {napoli : [13, 56, 98, 75, 5], roma: [55, 46, 17, 3, 89]};
    const winningTickets = Win.getWinningTickets(tickets, extraction);
    expect(winningTickets.length).toBe(1);
})

test('Expected the "getWinningTickets" method return an empty list of winning tickets', () => {
    Win.winningTickets = [];
    const tickets = [{wheel: "napoli", numbers: [13, 56, 98, 75], bet: "quaterna"}, {wheel: "roma", numbers: [54, 46, 16], bet: "ambo"}];
    const extraction = {napoli: [14, 56, 98, 75, 5], roma: [54, 48, 17, 3, 89]};
    const winningTickets = Win.getWinningTickets(tickets, extraction);
    expect(winningTickets.length).toBe(0);
})

test('Expected the "getWinningTickets" method return a list with the ticket played on the wheel "tutte"', () => {
    const tickets = [{wheel: "napoli", numbers: [13, 56, 98, 75], bet: "quaterna"}, {wheel: "tutte", numbers: [54, 46, 16], bet: "ambo"}];
    const extraction = {napoli: [16, 56, 98, 75, 5], roma: [54, 48, 17, 3, 89]};
    const winningTickets = Win.getWinningTickets(tickets, extraction);
    expect(winningTickets[0].wheel).toBe("tutte");
})

test('Expected the "getWinningTickets" method return a list with the ticket played on the wheel "napoli"', () => {
    Win.winningTickets = [];
    const tickets = [{wheel: "napoli", numbers: [13, 56, 98, 75], bet: "terno"}, {wheel: "roma", numbers: [54, 46, 16], bet: "ambo"}];
    const extraction = {napoli: [13, 56, 98, 72, 5], roma: [54, 48, 17, 3, 89]};
    const winningTickets = Win.getWinningTickets(tickets, extraction);
    expect(winningTickets[0].wheel).toBe("napoli");
})

test('Expected the "getWinningTickets" method return an empty list of winning tickets', () => {
    Win.winningTickets = [];
    const tickets = [{wheel: "napoli", numbers: [13, 56, 98, 75], bet: "quaterna"}, {wheel: "tutte", numbers: [54, 46, 16], bet: "ambo"}];
    const extraction = {napoli: [14, 54, 98, 75, 5], roma: [54, 48, 17, 3, 89]};
    const winningTickets = Win.getWinningTickets(tickets, extraction);
    expect(winningTickets.length).toBe(0);
})

