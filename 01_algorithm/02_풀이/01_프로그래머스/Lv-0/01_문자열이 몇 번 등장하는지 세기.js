// 문자열이 몇 번 등장하는지 세기
// https://school.programmers.co.kr/learn/courses/30/lessons/181871
// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString ≤ 1000
// 1 ≤ pat ≤ 10

// 입출력 예
// myString	pat	result
// "banana"	"ana"	2
// "aaaa"	"aa"	3

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    // slice할 시작점, 종료점 계산
    const start = i;
    const end = start + pat.length;
    const sliceResult = myString.slice(start, end);

    // slice한 결과와 비교문자열이 동일하다면 count 증가
    if (sliceResult === pat) count++;
  }

  return count;
}

solution("banana", "ana");
solution("aaaa", "aa");
