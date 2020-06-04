// Hello world

// 1) What is the Big O for this? 
    // 1 - Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

    // This is a linear Big O. since it is essentially a yes/no check, the function will have to go through the entire length of the array no matter what and return only when completed. 
    const n = 15;
    const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    const arr = [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
    function findPlaymate(arr) {
        let ticks =1;
        let found = false;
        let index
        for (let i=0;i<arr.length;i++) {
            ticks++
            if (arr[i]===1) {
                found = true;
                index = i;
            }
        }
        return {
            result: {
                found,
                index
            },
            ticks: ticks
        }
    }
    console.log(findPlaymate(arr))

    // 2 - Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

    // I believe this is O(log(n)) as you will not have to run through the entire array input. 
    const arr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]

    function findPlaymate(arr) {
      let ticks =1;
      let found = false;
      let index 
      
      for (let i=0;i<arr.length;i++) {
        ticks++
        if (arr[i]===1) {
            found = true;
            index = i;
            return {
              result: {
                  found,
                  index
              },
              ticks: ticks
            }
          }
        if (i ===arr.length-1 && found === false) {
          return {
            result: {
                found: false,
                index: 'none'
            },
            ticks: ticks
          }
        }
      }
  }

    console.log(findPlaymate(arr))

// 2) Even or odd
// What is the Big O of the following algorithm? Explain your answer

    // this is O(1), the function acts on a single value
    function isEven(value) {
        if (value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log(isEven(10))


// 3) Are you here? 
// What is the Big O of the following algorithm? Explain your answer

    // This is an O(n^k), where k=2. It is unusual because there are two inputs being looped once only, but it would have the same big O as one input being looped twice. n is the highest n.
    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

// 4) Doubler
// What is the Big O of the following algorithm? Explain your answer

    // this is O(n), linear. although the value may be getting multiplied by 2, the function output is directly related to the size of the input.
    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }

// 5) Naive search
// What is the Big O of the following algorithm? Explain your answer

    // this is a O(n). this function exits out when conditions are met, so it may not go the entire length of the array, but it is still directly proportionate to the input 
    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }

// 6) Creating pairs
// What is the Big O of the following algorithm? Explain your answer

    // This is O(n^k). it is looping twice through the same array, thus increasing the time by an polynomial factor. k=2
    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }

// 7) compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

    // this function is creating a fibonacci array starting from zero. so input 5 = [0,1,1,2,3,5]. This is a O(2^n). essentially, the input is one number, and the output is an exponential factor of that number. 
    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i === 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }

// 8) An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

    // this is O(log(n)), the input is halved and halved again, making it a log function.
    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }   

// 9) Random Element
// What is the Big O of the following algorithm? Explain your answer
    // this is an O(1), there is one item being manipulated only, and one single output. It does not depend on input size.
    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

// 10) What am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

    // This function confirms odd numbers. I think this is a linear O(n) as it is directly proportional to the input. 
    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }

// 11) Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

// - Derive an algorithm to solve the Tower of Hanoi puzzle.
// - Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

function hanoi(numDisks, a, b, c) {
    // a=start, b=auxilliary, c=endpoint
    let numMoves = 0;
    if (numDisks > 0) {
      numMoves = hanoi(numDisks-1, a, c, b);
      console.log(`Move disk ${numDisks} from ` + a + " to " + c);
      numMoves++;
      numMoves = hanoi(numDisks-1, b, a, c);
    }
    return numMoves
}
console.log(hanoi(4, "A", "B", "C"));
// - If you are given 5 disks, how do the rods look like after 7 recursive calls? - how am I supposed to visualize them??
// - How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks? 7, 15, 31 = (2^n)-1 moves. 
// - What is the runtime of your algorithm? O(2^n), where n is the number of moves. 
