# Polynomial Function Evaluator

A simple HTML and vanilla JavaScript app that parses a polynomial expression in `x` and computes its value for a given `x` without using `eval()`.

## How to Run & Use
1. Open `index.html` in any web browser.
2. Enter your polynomial expression in **Enter the equation** (no spaces, no `=0`).
3. Enter a number in **Enter value of x**.
4. Click **Obtain value** to see the result.
5. Use **Refresh equation** or **Refresh x** before running a new calculation.

## Supported Input Format
- **Constants:** `5`, `-12.5`
- **Linear terms:** `x`, `-x`, `4x`
- **Powers:** `x^2`, `-3x^4`, `2.5x^3`
- **Combined expression:** `2x^3-4x^2+x-7`

## Example
- **Equation:** `2x^2-3x+5`
- **Value of x:** `3`
- **Output:** `Function value: 14`

## Known Limitations
- Avoid spaces (e.g., use `2x+3`, not `2x + 3`) and negative exponents (e.g., `x^-2`).
- Click **Refresh equation** or **Refresh x** between evaluations so previous values don't stay in the calculation arrays.