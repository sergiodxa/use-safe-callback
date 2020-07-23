# useSafeCallback

Wrap a function to ensure you never call it if a component is unmounted, useful to avoid cases where an async code could finish after a component has unmounted and it tries to update a state.

## Usage

Install it

```sh
$ yarn add use-mounted-callback
```

Import it

```ts
import useSafeCallback from "use-safe-callback"
```

Wrap your unsafe callback

```ts
const [state, unsafeDispatch] = React.useReducer(reducer, initialState);
const safeDispatch = useSafeCallback(unsafeDispatch);
```

Use it as your unsafe callback

```ts
safeDispatch({ type: "MY_ACTION" })
```

Your unsafe callback will not run if the component is unmounted, preventing you to trying to update the state.

## Author

- [Sergio Xalambrí](https://sergiodxa.com) - [Able](https://able.co)

Based on a similar Hook by [Tanner Linsley](https://twitter.com/tannerlinsley).

## License

The MIT License.
