# Promise_function_task17
# JavaScript Division Using Promises

## 📌 Objective
The objective of this project is to create a JavaScript function that performs division using Promises. It handles division by zero by rejecting the Promise with an appropriate error message.

## 🛠️ Technologies Used
- JavaScript
- Promises
- Arrow Functions
- `.then()` and `.catch()` methods

## ✨ Features
- Takes two numbers as input.
- Performs division of the first number by the second number.
- Uses a Promise to handle the result.
- Resolves the Promise when division is successful.
- Rejects the Promise if the divisor is zero.
- Handles errors using `.catch()`.
- Demonstrates five test cases.

## 📂 Project Structure

```text
JavaScript-Promise-Division/
├── index.js
└── README.md
```

## 💻 Code Explanation

### 1. Arrow Function
The `divide` function is declared using an arrow function:

```javascript
const divide = (a, b) => {
```

### 2. Promise
A Promise is created using `new Promise()`. It uses:
- `resolve()` to return the division result.
- `reject()` to return an error message when the divisor is zero.

### 3. Error Handling
The `.then()` method handles successful results, while `.catch()` handles errors.

## 🧪 Test Cases

| First Number | Second Number | Expected Result |
|---:|---:|---|
| 10 | 2 | 5 |
| 10 | 0 | Division by zero error |
| 20 | 4 | 5 |
| 15 | 3 | 5 |
| 7 | 2 | 3.5 |

## ▶️ How to Run

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Save the JavaScript code in a file named `index.js`.
3. Open a terminal in the project folder.
4. Run the following command:

```bash
node index.js
```

5. Check the terminal for the results of the five test cases.

## 📖 Conclusion
This project demonstrates how JavaScript Promises can handle asynchronous operations and errors. It also demonstrates the use of arrow functions, `resolve()`, `reject()`, `.then()`, and `.catch()`.

---

**Assignment:** JavaScript Division Using Promises  
**Language:** JavaScript
