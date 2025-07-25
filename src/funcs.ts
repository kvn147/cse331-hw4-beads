import { List, cons, nil } from "./list";

// Tests for these functions belong in funcs_test.ts
// NOTE: the documentation in this function is somewhat incomplete,
//  (i.e. no header comments or math-def returns), but you should have
//  sufficient clues to determine which cases must be tested


/** @returns [task a math definition solution] */
export const foo = (b: bigint, c: bigint, d: boolean): List<bigint> => {
  if (d) {
    return cons(b, cons(c, cons(b, nil)));
  } else {
    return cons(c, cons(b, cons(c, nil)));
  }
};


/** @returns [task b math definition solution] */
export const move3d = (pt: [bigint, bigint], diag: boolean): [bigint, bigint, bigint] => {
  const [x, y]: [bigint, bigint] = pt;
  if (diag) {
    return [x, y, 1n];
  } else {
    if (x === 0n) {
      return [y, y, 0n];
    } else {
      return [x + 1n, y + 1n, 0n];
    }
  }
};


type Purpose = "worker" | "artist" | "none";
type Robot = { name: string, arms: bigint, purpose: Purpose };

/** @returns [task c math definition solution] */
export const factory = (settings: {name: string, arms: bigint}, chance: bigint): Robot => {
  if (chance === 0n) {
    return { name: settings.name, arms: settings.arms, purpose: "worker" };
  } else if (chance === 1n) {
    return { name: settings.name, arms: settings.arms, purpose: "artist" };
  } else {
    return { name: settings.name, arms: settings.arms, purpose: "none" };
  }
};


type Color = "purple" | "pink" | "green" | "grey";

/** @returns a Color according to some num */
export const a = (num?: bigint): Color => {
  switch (num) {
    case 1n: return "purple";
    case 2n: return "pink";
    case 3n: return "green";
    default: return "grey";
  }
};

/**
 * @param num, must be > 0
 * @returns a pair of Colors, given num
*/
export const b = (num: bigint): [Color, Color] => {
  return [a(num), a(num + 1n)];
};


/**
 * @param num, must be non-negative
 * @returns a string containing color opinions, given num
*/
export const c = (num: bigint): string => {
  if (num < 0n) {
    throw new Error ("given num is negative!");
  }

  // Number() makes it print without the 'n' e.g. '2n' -> '2'
  return `blue is my #${Number(num)} favorite color. grey is my least favorite.`;
};


/**
 * @param num1 an int between 0 and 3
 * @param num2 an int between 3 and 4
 * @returns  num2 - num1 if num1 < num2, 1 + num1 otherwise
 */
export const d = (num1: 0n | 1n | 2n | 3n, num2: 3n | 4n): bigint => {
  if (num1 < num2) {
    return num2 - num1;
  } else {
    return 1n + num1;
  }
}


/**
 * @param arr set of ints to find prod over
 * @returns the product of all elements in arr
*/
export const e = (arr: bigint[]): bigint => {
  if (arr.length === 0) {
    return 1n;
  } else {
    // Recall that slice() returns a sub-array
    return arr[0] * e(arr.slice(1));
  }
};


/**
 * @param num, must be non-negative
 * @returns number of 3s in num
*/
export const f = (num: bigint): bigint => {
  if (num === 0n) {
    return 0n;
  } else if (num % 3n === 0n) { // n > 0 is a multiple of 3
    return f(num - 3n) + 1n;
  } else if (num % 3n === 1n) { // n - 1 is a multiple of 3
    return f(num - 1n);
  } else { // n - 2 is a multiple of 3
    return f(num - 2n);
  }
}