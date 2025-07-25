import * as assert from 'assert';
import { R, L, TR, TL, BR, BL, Block, Row, CREAMSICLE, CANDY} from './pattern';
import { slopes, diamonds, hearts, infinities } from './designs';
import { cons, nil } from './list';

// NOTE: ordinarily we would include comments describing the coverage on these
// test cases. Since you are writing your own code the descriptions may not
// match, so they have been omitted.

describe('designs', function() {
  const r_candy: Block = {form: "lines", theme: CANDY, direction: R};
  const r_creamsicle: Block = {form: "lines", theme: CREAMSICLE, direction: R};

  const l_candy: Block = {form: "lines", theme: CANDY, direction: L};
  const l_creamsicle: Block = {form: "lines", theme: CREAMSICLE, direction: L};

  const tl_candy: Block = {form: "waves", theme: CANDY, direction: TL};
  const tl_creamsicle: Block = {form: "waves", theme: CREAMSICLE, direction: TL};

  const tr_candy: Block = {form: "waves", theme: CANDY, direction: TR};
  const tr_creamsicle: Block = {form: "waves", theme: CREAMSICLE, direction: TR};

  const bl_candy: Block = {form: "waves", theme: CANDY, direction: BL};
  const bl_creamsicle: Block = {form: "waves", theme: CREAMSICLE, direction: BL};

  const br_candy: Block = {form: "waves", theme: CANDY, direction: BR};
  const br_creamsicle: Block = {form: "waves", theme: CREAMSICLE, direction: BR};

  // tests for slopes pattern
  it('slopes', function() {
    const row1: Row = cons(r_candy, cons(r_candy, nil));
    const row2: Row = cons(r_creamsicle, cons(r_creamsicle, nil));

    assert.deepStrictEqual(slopes(0n, CANDY), nil);
    assert.deepStrictEqual(slopes(1n, CREAMSICLE), cons(row2, nil));
    assert.deepStrictEqual(slopes(3n, CANDY), cons(row1, cons(row1, cons(row1, nil))));
  });

  // tests for diamonds pattern
  it('diamonds', function() {
    const row1: Row = cons(r_candy, cons(l_candy, nil));
    const row2: Row = cons(l_candy, cons(r_candy, nil));
    const row3: Row = cons(r_creamsicle, cons(l_creamsicle, nil));
    const row4: Row = cons(l_creamsicle, cons(r_creamsicle, nil));

    assert.deepStrictEqual(diamonds(0n, CREAMSICLE), nil);
    assert.deepStrictEqual(diamonds(2n, CANDY), cons(row1, cons(row2, nil)));
    assert.deepStrictEqual(diamonds(4n, CREAMSICLE), cons(row3, cons(row4, cons(row3,
      cons(row4, nil)))));
  });

  // tests for hearts pattern
  it('hearts', function() {
    const row1: Row = cons(tl_candy, cons(tr_candy, nil));
    const row2: Row = cons(r_candy, cons(l_candy, nil));
    const row3: Row = cons(tl_creamsicle, cons(tr_creamsicle, nil));
    const row4: Row = cons(r_creamsicle, cons(l_creamsicle, nil));

    assert.deepStrictEqual(hearts(0n, CANDY), nil);
    assert.deepStrictEqual(hearts(2n, CREAMSICLE), cons(row3, cons(row4, nil)));
    assert.deepStrictEqual(hearts(6n, CANDY),
        cons(row1, cons(row2, cons(row1, cons(row2, cons(row1, cons(row2, nil)))))));
  });

   // tests for infinities pattern
  it('infinities', function() {
    const row1: Row = cons(tl_candy, cons(tr_candy, nil));
    const row2: Row = cons(bl_candy, cons(br_candy, nil));
    const row3: Row = cons(tl_creamsicle, cons(tr_creamsicle, nil));
    const row4: Row = cons(bl_creamsicle, cons(br_creamsicle, nil));

    assert.deepStrictEqual(infinities(0n, CREAMSICLE), nil);
    assert.deepStrictEqual(infinities(2n, CANDY), cons(row1, cons(row2, nil)));
    assert.deepStrictEqual(infinities(8n, CREAMSICLE),
        cons(row3, cons(row4, cons(row3, cons(row4,
        cons(row3, cons(row4, cons(row3, cons(row4, nil)))))))));
  });

});