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

Based on a [similar Hook](https://github.com/tannerlinsley/react-query/blob/2c49b5d29ccd9204bd7e30b23efd08224b0f7560/src/react/utils.js#L45-L57) by [Tanner Linsley](https://twitter.com/tannerlinsley).

## License

The MIT License.
