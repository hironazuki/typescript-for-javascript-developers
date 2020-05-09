export {};

const error = (message: string): never => {
  throw new Error(message);
};

try {
  let result = error('errorMessage');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');
