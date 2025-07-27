import { Block, Pattern, Theme } from './pattern';
import { cons, nil } from './list';


/**
 * Returns a pattern with the "slopes" design
 * @param rows of design to create, must be >= 0
 * @param theme of design to create
 * @returns an slopes design as defined by:
 *
 *  TODO: copy your "slopes" math definition from 3b) here!
 *  slopes(0, T) = nil
 *  slopes(n, T) = cons(cons({form = "lines", theme = T, direction = R}, 
 *  cons({form = "lines", theme = T, direction = R}, nil)), slopes(n-1, T))
 */
export const slopes = (rows: bigint, theme: Theme): Pattern => {
  // TODO
  if (rows == 0n) {
    return nil;
  }
  const b: Block  = {form: "lines", theme: theme, direction: "R"};
  return cons(cons(b, cons(b, nil)), slopes(rows-1n, theme));
}

/**
 * Returns a pattern with the "diamonds" design
 * @param rows of design to create, must be >= 0 and a multiple of 2
 * @param theme of design to create
 * @returns an diamonds design as defined by:
 *
 *  TODO: copy your "diamonds" math definition from 3b) here!
 *  diamonds(0, T) = nil
 *  diamonds(n, T) = cons(cons({form = "lines", theme = T, direction = R}, 
 *  cons({form = "lines", theme = T, direction = L}, nil)), cons(cons({form = "lines", 
 *  theme = T, direction = L}, cons({form = "lines", theme = T, direction = R}, nil)), diamonds(n-2, T)))
 */
export const diamonds = (rows: bigint, theme: Theme): Pattern => {
  // TODO
  if (rows == 0n) {
    return nil;
  }
  const b1: Block = { form: "lines", theme: theme, direction: "R" };
  const b2: Block = { form: "lines", theme: theme, direction: "L" };
  const b3: Block = { form: "lines", theme: theme, direction: "L" };
  const b4: Block = { form: "lines", theme: theme, direction: "R" };

  const row1 = cons(b1, cons(b2, nil));
  const row2 = cons(b3, cons(b4, nil));
  
  return cons(row1, cons(row2, diamonds(rows - 2n, theme)));
}

/**
 * Returns a pattern with the "hearts" design
 * @param rows of design to create, must be >= 0 and a multiple of 2
 * @param theme of design to create
 * @returns an hearts design as defined by:
 *
 *  TODO: copy your "hearts" math definition from 3b) here!
 * hearts(0, T) = nil
 * hearts(n, T) = cons(cons({form = "waves", theme = T, direction = TL},
 * cons({form = "waves", theme = T, direction = TR}, nil)),
 * cons(cons({form = "lines", theme = T, direction = R},
 * cons({form = "lines", theme = T, direction = L}, nil)), hearts(n-2, T)))
 */
export const hearts = (rows: bigint, theme: Theme): Pattern => { 
  // TODO
  if (rows == 0n) {
    return nil;
  }
  const b1: Block = {form: "waves", theme: theme, direction: "TL"};
  const b2: Block = {form: "waves", theme: theme, direction: "TR"};
  const b3: Block = {form: "lines", theme: theme, direction: "R"};
  const b4: Block = {form: "lines", theme: theme, direction: "L"};

  const row1 = cons(b1, cons(b2, nil));
  const row2 = cons(b3, cons(b4, nil));

  return cons(row1, cons(row2, hearts(rows-2n, theme)));
}

/**
 * Returns a pattern with the "infinities" design
 * @param rows of design to create, must be >= 0 and a multiple of 2
 * @param theme of design to create
 * @returns an infinities design as defined by:
 *
 *  TODO: copy your "infinities" math definition from 3b) here!
 * infinities(0, T) = nil
 * infinities(n, T) = cons(cons({form = "waves", theme = T, direction = TL},
 * cons({form = "waves", theme = T, direction = TR}, nil)),
 * cons(cons({form = "waves", theme = T, direction = BL},
 * cons({form = "waves", theme = T, direction = BR}, nil)), infinities(n-2, T)))
 */
export const infinities = (rows: bigint, theme: Theme): Pattern => {
  // TODO
  if (rows == 0n) {
    return nil;
  }
  const b1: Block = {form: "waves", theme: theme, direction: "TL"};
  const b2: Block = {form: "waves", theme: theme, direction: "TR"};
  const b3: Block = {form: "waves", theme: theme, direction: "BL"};
  const b4: Block = {form: "waves", theme: theme, direction: "BR"};

  const row1 = cons(b1, cons(b2, nil));
  const row2 = cons(b3, cons(b4, nil));

  return cons(row1, cons(row2, infinities(rows-2n, theme)));

}