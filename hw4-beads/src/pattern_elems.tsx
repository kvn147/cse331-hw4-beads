import React from 'react';
import WavesCandy from './img/waves-cottoncandy.png';
import WavesCreamsicle from './img/waves-orangecreamsicle.png';
import LinesCandy from './img/lines-cottoncandy.png';
import LinesCreamsicle from './img/lines-orangecreamsicle.png';
import './app.css';
import { Block, Row, Pattern, Theme, CANDY} from './pattern';
import { slopes, diamonds, hearts, infinities } from './designs';
import { concat, cons, nil, len } from './list';

/**
 * Creates friendship bracelet pattern as specified by params
 * @param design of new pattern: "slopes," "diamonds," "hearts," or "infinities"
 * @param theme colors for new pattern
 * @param rows number of rows of new pattern, must be multiple of 2 for all
 *        besides "slopes" which can have any number of rows
 * @returns new pattern with specified color and number of rows
 */
export const generatePattern = (design: string, theme: Theme, rows: bigint): Pattern => {
  switch(design) {
    case "slopes": return slopes(rows, theme);
    case "diamonds": return diamonds(rows, theme);
    case "hearts": return hearts(rows, theme);
    case "infinities": return infinities(rows, theme);
    default: return nil;
  }
}

/**
 * Sews pattern1 and pattern2 together by appending each row of pattern2
 * to the corresponding row of pattern1
 *
 * @param pattern1 left half of new pattern
 * @param pattern2 right half of new pattern
 * @returns new pattern consisting of pattern1 and pattern2
 */
export const sew = (pattern1: Pattern, pattern2: Pattern): Pattern => {
  if (pattern1.kind === "nil") {
    if (pattern2.kind === "nil") {
      return nil;
    } else {
      throw new Error("bad pattern1 argument: pattern2 has rows but pattern1 has none");
    }
  } else {
    if (pattern2.kind === "nil") {
      throw new Error("bad pattern2 argument: pattern1 has rows but pattern2 has none");
    } else {
      return cons(concat(pattern1.hd, pattern2.hd), sew(pattern1.tl, pattern2.tl));
    }
  }
}

// Returns an element that draws the given square.
const BlockElem = (props: {block: Block}): JSX.Element => {
  if (props.block.form === "waves") {
    const cls = `block rotate-waves-${props.block.direction}`.toLowerCase();
    if (props.block.theme === CANDY) {
      return <img alt={"square of pink, blue and purple curved lines" +
        ` with curve pointing in ${props.block.direction} direction`} src={WavesCandy} className={cls}/>;
    } else { // CREAMSICLE
      return <img alt={"square of orange and yellow curved lines" +
        ` with curve pointing in ${props.block.direction} direction`} src={WavesCreamsicle} className={cls}/>;
    }
  } else { // lines
    const cls = `block rotate-lines-${props.block.direction}`.toLowerCase();
    if (props.block.theme === CANDY) {
      return <img alt={"square of pink, blue, and purple straight diagonal lines" +
        ` starting in bottom-${props.block.direction} corner`} src={LinesCandy} className={cls}/>;
    } else { // CREAMSICLE
      return <img alt={"square of orange and yellow straight diagonal lines" +
        ` starting in bottom-${props.block.direction} corner`} src={LinesCreamsicle} className={cls}/>;
    }
  }
};

// Returns a list of block elements for each square in the given row.
const getBlocks = (row: Row, key: number): JSX.Element[] => {
  if (row.kind === "nil") {
    return [];
  } else {
    return [<BlockElem key={key} block={row.hd}/>]
      .concat(getBlocks(row.tl, key + 1));
  }
};

// Returns a list of DIV elements, one for each row in the given pattern.
// Throws an exception if any row has a different length than expected.
const getRows = (pattern: Pattern, expLen: bigint, key: number): JSX.Element[] => {
  if (pattern.kind === "nil") {
    return [];
  } else {
    const rowLen = len(pattern.hd);
    if (rowLen !== expLen) {
      throw new Error(
        `bad Pattern argument: rows have different lengths: ${rowLen} vs ${expLen}`);
    } else {
      const row = getBlocks(pattern.hd, 0);
      return [<ol key={key} className="row">{row}</ol>].concat(
        getRows(pattern.tl, expLen, key + 1));
    }
  }
};

/** Returns an element that draws the given pattern. */
export const PatternElem = (props: {pattern: Pattern}): JSX.Element => {
  if (props.pattern.kind === "nil") {
    throw new Error("bad Pattern argument: cannot have 0 rows");
  } else {
    const exp_len = len(props.pattern.hd);
    const rows = getRows(props.pattern, exp_len, 0);
    return <ol>{rows}</ol>;
  }
};