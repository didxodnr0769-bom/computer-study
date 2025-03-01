// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// n	result
// 3628800	10
// 7	3

function solution(n) {
  let counter = 1;
  let reducer = 1;
  while (true) {
    reducer *= counter;
    if (reducer > n) break;
    counter++;
  }

  return counter - 1;
}

const result1 = solution(3628800); // 10
const result2 = solution(7); // 3
console.log("result1", result1);
console.log("result2", result2);
