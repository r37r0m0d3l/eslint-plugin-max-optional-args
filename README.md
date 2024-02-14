### eslint-plugin-max-optional-args 🔢

ESLint plugin to enforce a maximum number of optional arguments.

```sh
$ npm i eslint-plugin-max-optional-args --save-dev
```

## Configuration

After installation, make the plugin available to your `eslint`:

```json
{
  "plugins": ["max-optional-args"],
  "rules": {
    "max-optional-args/max-optional-args": [
      "error",
      { "max": 3 }
    ]
  }
}
```

The rule `max-optional-args` enforces a maximum number of optional arguments in a function declaration.

Rule options:

- `max` (number) - The maximum number of optional arguments allowed. Default is `3`.

## Essential Reading

When dealing with methods that have a lot of optional arguments, it can become difficult to keep track of all the possible combinations of arguments.

Especially when the method is used in multiple places, it can be hard to understand what the method does and what the arguments are.

Not mentioning that arguments order can be swapped by different developers, making the code even harder to understand.

One way to deal with this is to use an options object.

This object can contain all of the optional arguments for the method.

This way, the method signature is always the same and options object can be defined as interface or type, making it easier to understand what the method does and what the arguments are.

And of course, it's easier to re-use this argument object in multiple places.

```typescript
function printCustomer(name: string, age?: number, city?: string) {
  // ...
}
```

```typescript
printCustomer("John Doe");
printCustomer("John Doe", 30);
printCustomer("John Doe", 30, "California");
```

As you can see, this can become quite verbose.

May `30` is balance 💰 on the account, not age 🕙.

And what if we want to add more optional arguments?

We would have to change the method signature and all the places where the method is used.

Even more it's not clear what the arguments are.

❓ What we miss here???

```typescript
printCustomer("John Doe", undefined, "California");
```

🤔 Is `Dakota` city or last name? We can't be sure.

```typescript
printCustomer("Jill", 30, "Dakota");
```

🩹 Suggested solution for this is to use an `options` object.

```typescript
interface PrintCustomerOptionsInterface {
  age?: number;
  city?: string;
}
```

✊ Now we even don't need read optional arguments from the method signature.

Not precious time wasting with our eyes to find out what optional arguments are if don't have to.

```typescript
function printCustomer(name: string, options?: PrintCustomerOptionsInterface) {
  // ...
}
```

🤯 Now we can use the method like this.
This is enlightenment 🌠 what we doing with every optional argument.

```typescript
printCustomer("John Doe");
printCustomer("John Doe", { age: 30 });
printCustomer("John Doe", { age: 30, city: "California" });
```

This is much more concise and easier to read.

Result may have a little bit more code, but it's much more readable and maintainable.

 - Improved readability: The code is more readable because all of the optional arguments are grouped together in one place.

 - Easier to maintain: It is easier to add or remove optional arguments in the future because you only need to change the options interface.

 - Type safety: TypeScript can check the types of the properties in the options object, which can help to prevent errors.

Further reading:

- [Introduce Parameter Object at refactoring.guru](https://refactoring.guru/introduce-parameter-object)
