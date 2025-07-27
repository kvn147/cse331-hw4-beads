import { Block, Row, Pattern } from "./pattern";
import { cons, nil, concat } from "./list";


/**
 * Returns the same block but flipped vertically.
 * @param b block to flip
 * @returns the flipped version of b as defined by:
 *
 *  TODO: copy your bflip math definition from 4a) here!
 * bflip({form = "lines", theme = T, direction = L}) = {form = "lines", theme = T, direction = R}
 * bflip({form = "lines", theme = T, direction = R}) = {form = "lines", theme = T, direction = L}
 * bflip({form = "waves", theme = T, direction = TL}) = {form = "waves", theme = T, direction = BL}
 * bflip({form = "waves", theme = T, direction = TR}) = {form = "waves", theme = T, direction = BR}
 * bflip({form = "waves", theme = T, direction = BR}) = {form = "waves", theme = T, direction = TR}
 * bflip({form = "waves", theme = T, direction = BL}) = {form = "waves", theme = T, direction = TL}
 *
 */
export const bflip = (b: Block): Block => {
  // TODO
  if (b.form === "waves") {
    switch(b.direction) {
      case "TL": return { form: "waves", theme: b.theme, direction: "BL" };
      case "TR": return { form: "waves", theme: b.theme, direction: "BR" };
      case "BL": return { form: "waves", theme: b.theme, direction: "TL" };
      case "BR": return { form: "waves", theme: b.theme, direction: "TR" };
    }
  } else {
    switch(b.direction) {
      case "L": return { form: "lines", theme: b.theme, direction: "R" };
      case "R": return { form: "lines", theme: b.theme, direction: "L" };
    } 
  }
};

/**
 * Returns the same row but flipped vertically.
 * @param r row to flip
 * @returns the flipped version of r as defined by:
 *
 *  TODO: copy your rflip math definition from 4c) here!
 * rflip(nil) := nil
 * rflip(cons(x,xs)) := cons(bflip(x), rflip(xs))
 * 
 */
export const rflip = (r: Row): Row => {
  // TODO
  if (r.kind === "nil") {
    return r;
  }
  return cons(bflip(r.hd), rflip(r.tl));
};

/**
 * Returns the same pattern but flipped vertically.
 * @param p pattern to flip
 * @returns the flipped version of p as defined by:
 *
 *  TODO: copy your pflip math definition from 3c) here!
 * pflip(nil) := nil
 * pflip(cons(u,us)) := concat(pflip(us), cons(rflip(u), nil))
 * 
 */
export const pflip = (p: Pattern): Pattern => {
  // TODO
  if (p.kind === "nil") {
    return p;
  }
  return concat(pflip(p.tl), cons(rflip(p.hd), nil));
};