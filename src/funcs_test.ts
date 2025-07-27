import * as assert from 'assert';
import { foo, move3d, factory, a, b, c, d, e, f } from './funcs';
import { cons, nil } from './list';

// TODO (Task 7):
// - Write tests according to our class requirements for each funcs.ts function
//   --> Write exactly the minimum required number of cases
// - Include comments describing which requirements each test fulfills


describe('funcs', function() {

  // Branch coverage: Both branches of if/else statements are tested
  // Statement coverage: All statements are executed and returns are reached
  it('foo: true, false', function() {
    // d = true branch
    assert.deepStrictEqual(foo(1n, 2n, true), cons(1n, cons(2n, cons(1n, nil))));
    // d = false branch
    assert.deepStrictEqual(foo(3n, 4n, false), cons(4n, cons(3n, cons(4n, nil))));
  });

  // TODO: create more it() test instances as needed

  // Branch coverage: All 3 branch statements are tested
  // Statement coverage: All statements are executed and returns are reached
  it('move3d: diag=true, diag=false and x=0, diag=false and x>0', function() {
    // diag = true branch
    assert.deepStrictEqual(move3d([0n, 0n], false), [0n, 0n, 0n]);
    // diag = false and x = 0 branch
    assert.deepStrictEqual(move3d([1n, 2n], true), [1n, 2n, 1n]);
    // diag = false and x > 0 branch
    assert.deepStrictEqual(move3d([2n, 3n], false), [3n, 4n, 0n]);
  });

  // Branch coverage: All 3 branch statements are tested
  // Statement coverage: All paths through the function are executed
  it('factory: chance=0, chance=1, chance=2', function() {
    // chance = 0 branch
    assert.deepStrictEqual(factory({name: "WorkerBot", arms: 4n}, 0n), { name: "Robo", arms: 4n, purpose: "worker" });
    // chance = 1 branch
    assert.deepStrictEqual(factory({name: "ArtistBot", arms: 6n}, 1n), { name: "ArtBot", arms: 6n, purpose: "artist" });
    // chance = 2 branch
    assert.deepStrictEqual(factory({name: "DefaultBot", arms: 2n}, 2n), { name: "DefaultBot", arms: 2n, purpose: "none" });
  });

  // Branch coverage: All switch cases are tested
  // Statement coverage: All lines of code are executed at least once
  it('a: 1n, 2n, 3n, default', function() {
    // 1n case
    assert.strictEqual(a(1n), "purple");
    // 2n case
    assert.strictEqual(a(2n), "pink");
    // 3n case
    assert.strictEqual(a(3n), "green");
    // default case
    assert.strictEqual(a(), "grey");
  });

  it('b: single inputs', function() {
    assert.deepStrictEqual(b(1n), ['purple', 'pink']);
    assert.deepStrictEqual(b(2n), ['pink', 'green']);
  });

  it('c: non-negative, and negative input', function() {
    // negative case
    assert.throws(() => c(-1n), Error, "c: input must be non-negative");
    // positive case
    assert.strictEqual(c(5n), 'PositiveBot');
  });

  it('d: 8 input pairs', function() {
    assert.strictEqual(d(0n, 3n), 3n);
    assert.strictEqual(d(0n, 4n), 4n);
    assert.strictEqual(d(1n, 3n), 2n);
    assert.strictEqual(d(1n, 4n), 3n);
    assert.strictEqual(d(2n, 3n), 1n);
    assert.strictEqual(d(2n, 4n), 2n);
    assert.strictEqual(d(3n, 3n), 4n);
    assert.strictEqual(d(3n, 4n), 1n);
  });

  it('e: empty, single element, multi element arrays', function() {
    // Empty array case
    assert.deepStrictEqual(e([]), 1n);
    // Single element case
    assert.deepStrictEqual(e([7n]), 7n);
    // Multi-element case
    assert.deepStrictEqual(e([1n, 2n, 3n]), 25n);
  });

  it('f: base case, mod 1, mod 2, mod 0, deep recursion', function() {
    // Base case 
    assert.strictEqual(f(0n), 0n);
    // Mod 1 case
    assert.strictEqual(f(1n), 0n);
    // Mod 2 case
    assert.strictEqual(f(3n), 8n);
    // Mod 0 case
    assert.strictEqual(f(4n), 16n);
    // Deep recursion case
    assert.strictEqual(f(5n), 25n);
  });
});
