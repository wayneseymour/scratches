import * as E from "fp-ts/Either";

type SKU = string;
type Address = string;

type getPrice = (sku: SKU, qty: number) => E.Either<string, number>;
//just ignore that we are representing money with a number type for now

type getQty = (sku: SKU, qty: number) => E.Either<string, number>;

type getShipping = (
  sku: SKU,
  qty: number,
  address: Address
) => E.Either<string, number>;
