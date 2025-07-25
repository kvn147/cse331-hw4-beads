import * as assert from 'assert';
import { R, L, TR, TL, BR, BL, Block, CREAMSICLE, CANDY, Row} from './pattern';
import { cons, nil } from './list';
import { bflip, rflip, pflip } from './pattern_ops';


describe('pipe_ops', function() {
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

  it('bflip', function() {
    assert.deepStrictEqual(bflip(r_candy), l_candy);
    assert.deepStrictEqual(bflip(r_creamsicle), l_creamsicle);
    assert.deepStrictEqual(bflip(l_candy), r_candy);
    assert.deepStrictEqual(bflip(l_creamsicle), r_creamsicle);

    assert.deepStrictEqual(bflip(tr_candy), br_candy);
    assert.deepStrictEqual(bflip(tr_creamsicle), br_creamsicle);
    assert.deepStrictEqual(bflip(tl_candy), bl_candy);
    assert.deepStrictEqual(bflip(tl_creamsicle), bl_creamsicle);
    assert.deepStrictEqual(bflip(br_candy), tr_candy);
    assert.deepStrictEqual(bflip(br_creamsicle), tr_creamsicle);
    assert.deepStrictEqual(bflip(bl_candy), tl_candy);
    assert.deepStrictEqual(bflip(bl_creamsicle), tl_creamsicle);
  });

  it('rflip', function() {
    assert.deepStrictEqual(rflip(nil), nil);
    assert.deepStrictEqual(rflip(cons(bl_candy, nil)), cons(tl_candy, nil));
    assert.deepStrictEqual(rflip(cons(tr_candy, cons(bl_creamsicle, nil))),
        cons(br_candy, cons(tl_creamsicle, nil)));
  });

  it('pflip', function() {
    const row1: Row = cons(br_candy, cons(tr_candy, nil))
    const row2: Row = cons(r_candy, cons(l_candy, nil));
    const row3: Row = cons(l_candy, cons(r_candy, nil));
    const row4: Row = cons(tr_candy, cons(br_candy, nil));

    assert.deepStrictEqual(pflip(nil), nil);
    assert.deepStrictEqual(pflip(cons(cons(tl_candy, nil), nil)),
        cons(cons(bl_candy, nil), nil));
    assert.deepStrictEqual(pflip(cons(row1, cons(row2, nil))),
        cons(row3, cons(row4, nil))
    );
  });
});
