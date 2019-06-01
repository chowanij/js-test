export const algorithmsExercise = {
    /*
     1. should return n-th number of fibonacci sequence

     F(0) = 0
     F(1) = 1
     F(n) = F(n-1) + F(n-2)
     */

    fibonacci: function (n) {
        let previous_first = 0, previous_second = 1, next = 1;

        if (n === 0) return 0;
        if (n === 1) return 1;

        for (let i = 2; i <= n; i++) {
            next = previous_first + previous_second;
            previous_first = previous_second;
            previous_second = next;
        }

        return next;
    },

    /*
     2. Sieve of Eratosthenes
        Given a number n, print all primes smaller than or equal to n.
        Let calculations starts from 0

        n = 10
        Output : 2 3 5 7
     */

    eratosthenesSieve: function (n) {
        if (n < 2) return [];

        const array = [], upperLimit = Math.sqrt(n), output = [];

        for (let i = 0; i < n; i++) {
            array.push(true);
        }

        for (let i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (let j = i * i; j < n; j += i) {
                    array[j] = false;
                }
            }
        }

        for (let i = 2; i < n; i++) {
            if (array[i]) {
                output.push(i);
            }
        }

        return output;
    },
};