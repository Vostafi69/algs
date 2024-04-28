import { quickSort } from ".";

interface ITestCase {
  in: number[];
  expected: number[];
}

const MIN = -5000;
const MAX = 5000;

describe("Тестирование результата работы алгоритма  quick-sort", () => {
  const array = [
    ...new Array(10000)
      .fill(0)
      .map(() => Math.floor(Math.random() * (MAX - MIN) + MIN)),
  ];

  const sortedArray = array.slice().sort((a, b) => a - b);

  const TEST_CASES: ITestCase[] = [
    {
      in: [5, 1, 2, 6, 3, 4, 4],
      expected: [1, 2, 3, 4, 4, 5, 6],
    },
    {
      in: [1],
      expected: [1],
    },
    {
      in: [],
      expected: [],
    },
    {
      in: [25, 87, -53, 11, 77, 92, -1, 52, 17, -20, 54, 0],
      expected: [-53, -20, -1, 0, 11, 17, 25, 52, 54, 77, 87, 92],
    },
    {
      in: array,
      expected: sortedArray,
    },
  ];
  TEST_CASES.forEach((test) => {
    it(`При [${test.in.slice(0, 5)}${
      test.in.length > 5 ? ", ..." : ""
    }] возвращает [${test.expected.slice(0, 5)}${
      test.in.length > 5 ? ", ..." : ""
    }]`, () => {
      expect(quickSort(test.in)).toEqual<number[]>(test.expected);
    });
  });
});
