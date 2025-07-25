import { List } from "./list";

/** Represents the cotton candy color theme. */
export const CANDY: "CANDY" = "CANDY";

/** Represents the orange creamsicle color theme. */
export const CREAMSICLE: "CREAMSICLE" = "CREAMSICLE";

/** Represents the color theme of the block */
export type Theme = "CANDY" | "CREAMSICLE";


/** Lines oriented from bottom left to top right. */
export const L: "L" = "L";

/** Lines oriented from bottom right to top left. */
export const R: "R" = "R";

/** Represents the lines direction of a block. */
export type Lines = "L" | "R";


/** Waves oriented so crest of waves is in top-left corner. */
export const TL: "TL" = "TL";

/** Waves oriented so crest of waves is in top-right corner. */
export const TR: "TR" = "TR";

/** Waves oriented so crest of waves is in bottom-left corner. */
export const BL: "BL" = "BL";

/** Waves oriented so crest of waves is in bottom-right corner. */
export const BR: "BR" = "BR";

/** Represents the waves direction of a block. */
export type Waves = "TR" | "TL" | "BR" | "BL";

/** A friendship bracelet pattern block */
export type Block =
  {readonly form: "waves", readonly theme: Theme, readonly direction: Waves}
  | {readonly form: "lines", readonly theme: Theme, readonly direction: Lines};


/** A friendship bracelet row */
export type Row = List<Block>;

/**
 * A full friendship bracelet pattern.
 * All Rows within a Pattern MUST be the same length
 */
export type Pattern = List<Row>;
