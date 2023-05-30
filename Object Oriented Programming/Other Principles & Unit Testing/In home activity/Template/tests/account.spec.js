import { Account } from "../src/account.js";

describe('Account', () => {
    
    describe('constructor', () => {
        it('should do all the operations correctly if everything is valid', () => {
            const test = new Account('Hola');
    
            expect(test).toBeInstanceOf(Account);
            expect(test.amount).toBe(0);
            expect(test.name).toBe('Hola');
        });
    })
    
    describe('name', () => {

        it('constructor should throw if name has invalid value', () => {
            expect(() => new Account(null)).toThrow();
            expect(() => new Account(undefined)).toThrow();
            expect(() => new Account('')).toThrow();
        });

        it('constructor should throw if name lenght is less than 3', () => {
            expect(() => new Account('el')).toThrow();
            expect(() => new Account('op')).toThrow();
            expect(() => new Account('si')).toThrow();
        });

    });

    describe('deposit', () => {

        it('should throw if amount of deposit is less or equal to zero', () => {
            const test = new Account('Zdraveite');

            expect(()=> test.deposit(-1)).toThrow();
        });

        it('should add tax if amount of deposit is bigger than 10000', () => {
            const test = new Account('Privet');

            test.deposit(10213);
            const result = test.amount / 0.95;

            expect(() => result === test.amount).toBeTruthy();
            
        });

        it('should do the operation correctly if everything is fine', () => {
            const test = new Account('World');

            test.deposit(1500);

            expect(test.amount).toBe(1500);
        });
    });

    describe('withdraw', () => {

        it('should throw if amount of withdraw is less or equal to zero', () => {
            const test = new Account('Oklahoma');

            expect(()=> test.withdraw(-1)).toThrow();
        });

        it('should throw if amount of withdraw is bigger than the amount', () => {
            const test = new Account('Oklahoma');

            expect(()=> test.withdraw(123)).toThrow();
        });

        it('should do the operation correctly if the values are fine', () => {
            const test = new Account('Hello');

            test.deposit(6512);
            test.withdraw(1512);

            expect(test.amount).toBe(5000);
        });
    });
})