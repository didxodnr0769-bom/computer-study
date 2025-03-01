// 문제 설명
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9
// 입출력 예
// i	j	k	result
// 1	13	1	6
// 10	50	5	5
// 3	10	2	0

function solution(i, j, k) {
  // 시작점부터 끝수까지의 크기의 배열을 만든다
  const arr = new Array(j - i + 1)
    // 시작점으로 채운다
    .fill(i)
    // 배열의 index만큼 더해준다
    .map((item, idx) => item + idx)
    // 배열을 모두 이은 문자열로 만든다
    .join("");
  // 전체 문자열에서 타겟(k) 문자를 공백으로 변경하여
  // 전체 문자열의 길이와 비교한다면 몇개가 있었는지 비교 가능
  return arr.length - arr.replaceAll(`${k}`, "").length;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
