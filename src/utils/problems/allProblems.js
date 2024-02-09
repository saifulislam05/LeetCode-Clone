export const allProblems = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    videoId: "8-k1C6ehKuw",
    totalLikes: 100,
    totalDislikes: 5,
    totalStarred: 50,
    totalComments: 20,
    problemStatement: `<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use the same element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
    examples: [
      {
        inputText: "nums = [2,7,11,15], target = 9",
        outputText: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        inputText: "nums = [3,2,4], target = 6",
        outputText: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        inputText: "nums = [3,3], target = 6",
        outputText: "[0,1]",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10^3</code>
</li> <li class='mt-2'>
<code>-10^9 ≤ nums[i] ≤ 10^9</code>
</li> <li class='mt-2'>
<code>-10^9 ≤ target ≤ 10^9</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
    starterCode: `function twoSum(nums, target) {
  // Write your code here
};`,
    handlerFunction: `(fn) => {
    const arraysAreEqual = (array1, array2) => {
      return (
        array1.length === array2.length &&
        array1.every((element, index) => element === array2[index])
      );
    };
    try {
        const nums = [
            [2, 7, 11, 15],
            [3, 2, 4],
            [3, 3],
        ];
        const targets = [9, 6, 6];
        const answers = [
            [0, 1],
            [1, 2],
            [0, 1],
        ];

        for (let i = 0; i < nums.length; i++) {
            const result = fn(nums[i], targets[i]);
            if (!arraysAreEqual(result?.sort((a, b) => a - b), answers[i].sort((a, b) => a - b))) {
                throw new Error("some test case failed");
            }
        }
        console.log("All test cases passed!");
        return true;
    } catch (error) {
        console.error("twoSum handler function error", error.message);
        // Instead of re-throwing the error, you might want to handle it differently
        // depending on your application's needs.
        return false;
    }
}`,
    starterFunctionName: "function twoSum(",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "",
    totalLikes: 120,
    totalDislikes: 10,
    totalStarred: 40,
    totalComments: 25,
    problemStatement: `<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
    `,
    examples: [
      {
        inputText: "head = [1,2,3,4,5]",
        outputText: "[5,4,3,2,1]",
        img: `example`,
      },
      {
        inputText: "head = [1,2,3]",
        outputText: "[3,2,1]",
      },
      {
        inputText: "head = [1]",
        outputText: "[1]",
      },
    ],
    constraints: `<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
<li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>`,
    starterCode: `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // Write your code here
};`,
    handlerFunction: `(fn) => {
  function createLinkedList(values) {
    class LinkedList {
      constructor(value) {
        this.value = value;
        this.next = null;
      }

      reverse() {
        let current = this;
        let prev = null;
        while (current !== null) {
          const next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        return prev;
      }
    }
    const head = new LinkedList(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      const node = new LinkedList(values[i]);
      current.next = node;
      current = node;
    }
    return head;
  }

  function getListValues(head) {
    const values = [];
    let current = head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  try {
    const tests = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
    const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
    for (let i = 0; i < tests.length; i++) {
      const list = createLinkedList(tests[i]);
      const result = fn(list);
      assert.deepEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error) {
    console.log("Error from reverseLinkedListHandler: ", error);
    throw new Error(error);
  }
}`,
    starterFunctionName: "function reverseLinkedList(",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "",
    totalLikes: 80,
    totalDislikes: 2,
    totalStarred: 30,
    totalComments: 10,
    problemStatement: `<p class='mt-3'>
    You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>
    and each element in the array represents your maximum jump length at that position.
  </p>
    <p class='mt-3'>
    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
    </p>
  `,
    examples: [
      {
        inputText: `nums = [2,3,1,1,4]`,
        outputText: `true`,
        explanation:
          "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
      },
      {
        inputText: `nums = [3,2,1,0,4]`,
        outputText: `false`,
        explanation:
          "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
      },
    ],
    constraints: `<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>
    <li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>`,
    starterCode: `function canJump(nums) {
  // Write your code here
};`,
    starterFunctionName: "function canJump(",
    handlerFunction: `(fn) => {
  try {
    const tests = [
      [2, 3, 1, 1, 4],
      [3, 2, 1, 0, 4],
      [2, 0, 0],
      [2, 5, 0, 0],
    ];
    const answers = [true, false, true, true];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.equal(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("Error from jumpGameHandler: ", error);
    throw new Error(error);
  }
}`,
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: "xty7fr-k0TU",
    totalLikes: 150,
    totalDislikes: 3,
    totalStarred: 70,
    totalComments: 40,
    problemStatement: `<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li>
    <li class="mt-3">Every close bracket has a corresponding open bracket of the same type. </li>
    </ul>`,
    examples: [
      {
        inputText: 's = "()"',
        outputText: "true",
      },
      {
        inputText: 's = "()[]{}"',
        outputText: "true",
      },
      {
        inputText: 's = "(]"',
        outputText: "false",
      },
      {
        inputText: 's = "([)]"',
        outputText: "false",
      },
    ],
    constraints: `<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>
<li class='mt-2 '><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`,
    starterCode: `function validParentheses(s) {
  // Write your code here
};`,
    starterFunctionName: "function validParentheses(",
    handlerFunction: `(fn) => {
  try {
    const tests = ["()", "()[]{}", "(]", "([)]", "{[]}"];
    const answers = [true, true, false, false, true];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      if (result !== answers[i]) {
        throw new Error(
          "Test case i failed: Expected answers[i]}, got result"
        );
      }
    }
    console.log("All test cases passed!");
    return true;
  } catch (error) {
    console.error("Error from validParenthesesHandler: ", error.message);
    // Adjust error handling as needed for your application
    return false;
  }
}`,
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    order: 5,
    videoId: "ZfFl4torNg4",
    totalLikes: 90,
    totalDislikes: 4,
    totalStarred: 60,
    totalComments: 30,
    problemStatement: `
  <p class='mt-3'>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>
    <li class="mt-3">Integers in each row are sorted from left to right.</li>
    <li class="mt-3">The first integer of each row is greater than the last integer of the previous row.</li>
  <p class='mt-3'>Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.</p>
  `,
    examples: [
      {
        inputText: `matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 3`,
        outputText: `true`,
        img: `example1.src`,
      },
      {
        inputText: `matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 13`,
        outputText: `false`,
        img: `example2.src`,
      },
      {
        inputText: `matrix = [[1]], target = 1`,
        outputText: `true`,
      },
    ],
    constraints: `
  <li class='mt-2'><code>m == matrix.length</code></li>
  <li class='mt-2'><code>n == matrix[i].length</code></li>
  <li class='mt-2'><code>1 <= m, n <= 100</code></li>
  <li class='mt-2'><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>
  `,
    starterCode: `// Do not edit function name
function searchMatrix(matrix, target) {
  // Write your code here
};`,
    handlerFunction: `(fn) => {
  try {
    const tests = [
      {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 3,
      },
      {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 13,
      },
    ];
    const answers = [true, false];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].matrix, tests[i].target);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("Error from search2DMatrixHandler: ", error);
    throw new Error(error);
  }
}`,
    starterFunctionName: "function searchMatrix",
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    videoId: "",
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: "4qYTqOiRMoM",
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "",
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "",
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Hash Table",
    order: 11,
    videoId: "",
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    order: 12,
    videoId: "",
  },
  {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "Math",
    order: 13,
    videoId: "",
  },
  {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "String",
    order: 14,
    videoId: "",
  },
  {
    id: "zigzag-conversion",
    title: "ZigZag Conversion",
    difficulty: "Medium",
    category: "String",
    order: 15,
    videoId: "",
  },
  {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    category: "String",
    order: 16,
    videoId: "",
  },
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array",
    order: 17,
    videoId: "",
  },
  {
    id: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "Backtracking",
    order: 18,
    videoId: "",
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List",
    order: 19,
    videoId: "",
  },
  {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Hash Table",
    order: 20,
    videoId: "",
  },
];
