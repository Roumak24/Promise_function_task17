
const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }
    });
};

// Test cases
divide(10, 2)
    .then(result => console.log("Dividing 10 by 2... \nResult:", result))
    .catch(error => console.log("Dividing 10 by 2... \nError:", error));

divide(10, 0)
    .then(result => console.log("Dividing 10 by 0... \nResult:", result))
    .catch(error => console.log("Dividing 10 by 0... \nError:", error));

divide(20, 4)
    .then(result => console.log("Dividing 20 by 4... \nResult:", result))
    .catch(error => console.log("Dividing 20 by 4... \nError:", error));

divide(15, 3)
    .then(result => console.log("Dividing 15 by 3... \nResult:", result))
    .catch(error => console.log("Dividing 15 by 3... \nError:", error));

divide(7, 2)
    .then(result => console.log("Dividing 7 by 2... \nResult:", result))
    .catch(error => console.log("Dividing 7 by 2... \nError:", error));
