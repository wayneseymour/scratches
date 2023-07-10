type Fruit = "apple" | "banana" | "orange";
type NewType = {
  [F in Fruit]: {
    name: F;
  };
};
/**
 * {
 *   apple: { name: "apple" };
 *   banana: { name: "banana" };
 *   orange: { name: "orange" };
 * }
 */
