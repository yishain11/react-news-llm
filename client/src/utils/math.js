export function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Handle empty array case
    const sum = numbers.reduce((total, num) => total + num, 0); // Sum all numbers
    return sum / numbers.length; // Divide sum by number of elements
}