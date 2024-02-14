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
