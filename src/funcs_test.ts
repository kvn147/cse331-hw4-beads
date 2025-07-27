import * as assert from 'assert';
import { foo, move3d, factory, a, b, c, d, e, f } from './funcs';
import { cons, nil } from './list';

// TODO (Task 7):
// - Write tests according to our class requirements for each funcs.ts function
//   --> Write exactly the minimum required number of cases
// - Include comments describing which requirements each test fulfills


describe('funcs', function() {

  it('foo', function() {
    // Branch coverage: Tests both d=true and d=false branches
    // Statement coverage: All statements are executed and returns are reached
    assert.deepStrictEqual(foo(1n, 2n, true), cons(1n, cons(2n, cons(1n, nil))));
    assert.deepStrictEqual(foo(3n, 4n, false), cons(4n, cons(3n, cons(4n, nil))));
  });

  // TODO: create more it() test instances as needed

  
  it('move3d', function() {
    // Branch coverage: Tests diag=true, diag=false and x=0, diag=false and x>0
    // Statement coverage: All statements are executed and returns are reached
    assert.deepStrictEqual(move3d([0n, 0n], false), [0n, 0n, 0n]);
    assert.deepStrictEqual(move3d([1n, 2n], true), [1n, 2n, 1n]);
    assert.deepStrictEqual(move3d([2n, 3n], false), [3n, 4n, 0n]);
  });

  
  it('factory: chance=0, chance=1, chance=2', function() {
    // Branch coverage: Tests chance=0, chance=1, and chance>=2 branches
    // Statement coverage: All statements are executed and returns are reached
    assert.deepStrictEqual(factory({name: "WorkerBot", arms: 4n}, 0n), { name: "WorkerBot", arms: 4n, purpose: "worker" });
    assert.deepStrictEqual(factory({name: "ArtistBot", arms: 6n}, 1n), { name: "ArtistBot", arms: 6n, purpose: "artist" });
    assert.deepStrictEqual(factory({name: "DefaultBot", arms: 2n}, 2n), { name: "DefaultBot", arms: 2n, purpose: "none" });
  });

  it('a: 1n, 2n, 3n, default', function() {
    // Branch coverage: Tests all switch cases 1n, 2n, 3n, and default
    // Statement coverage: All statements are executed and returns are reached
    assert.strictEqual(a(1n), "purple");
    assert.strictEqual(a(2n), "pink");
    assert.strictEqual(a(3n), "green");
    assert.strictEqual(a(), "grey");
  });

  it('b: single inputs', function() {
    // Branch coverage: Tests at least 2 cases
    // Statement coverage: All statements are executed and returns are reached
    assert.deepStrictEqual(b(1n), ['purple', 'pink']);
    assert.deepStrictEqual(b(2n), ['pink', 'green']);
  });

  it('c: non-negative, and negative input', function() {
    // Branch coverage: Tests non-negative input and negative input
    // Statement coverage: All statements are executed and returns are reached
    assert.throws(() => c(-1n), Error, "c: input must be non-negative");
    assert.strictEqual(c(5n), "blue is my #5 favorite color. grey is my least favorite.");
  });

  it('d: 8 input pairs', function() {
    // Branch coverage: Tests all combinations of inputs for d
    // Statement coverage: All statements are executed and returns are reached
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
    // Statement coverage: All statements are executed and returns are reached
    // Recursion coverage: Tests base case, single recursion, and multiple recursions
    assert.deepStrictEqual(e([]), 1n);
    assert.deepStrictEqual(e([7n]), 7n);
    assert.deepStrictEqual(e([1n, 2n, 3n]), 6n);
  });

  it('f: base case, mod 1, mod 2, mod 0, deep recursion', function() {
    // Branch coverage: Tests base case, mod 1, mod 2, mod 0, and deep recursion
    // Statement coverage: All statements are executed and returns are reached
    // Recursion coverage: Tests base case, single recursion, and multiple recursions
    assert.strictEqual(f(0n), 0n);
    assert.strictEqual(f(1n), 0n);
    assert.strictEqual(f(2n), 0n);
    assert.strictEqual(f(3n), 1n);
    assert.strictEqual(f(9n), 3n);
  });
});
