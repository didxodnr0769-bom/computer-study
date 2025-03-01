// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
// 입출력 예
// array	n	result
// [3, 10, 28]	20	28
// [10, 11, 12]	13	12

function solution(array, n) {
  const newArr = [...array, n];
  const sort = newArr.sort((a, b) => a - b);

  const nIndex = sort.indexOf(n);
  // 주어진 수가 마지막에 있는 경우 이전 값
  if (nIndex + 1 === newArr.length) return newArr[nIndex - 1];
  // 주어진 수가 첫번째에 있는 경우 두번째 값
  else if (nIndex === 0) {
    return newArr[1];
  }
  // 중간에 있는 경우
  else {
    const smallNumber = newArr[nIndex - 1];
    const small = n - smallNumber;
    const bigNumber = newArr[nIndex + 1];
    const big = bigNumber - n;
    // 가장 가까운수가 2개인데 가까운 정도가 같을 때
    if (small === big) {
      return smallNumber;
    } else {
      return small < big ? smallNumber : bigNumber;
    }
  }
}

// console.log("result1 : ", solution([3, 10, 28], 20)); // 28
// console.log("result2 : ", solution([10, 11, 12], 13)); // 12
// console.log("result2 : ", solution([10, 11, 13], 12)); // 11
// console.log("result2 : ", solution([10, 11, 12, 13], 12)); // 12
console.log("result2 : ", solution([10], -3)); // 12
