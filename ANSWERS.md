- [ ] Why would you use class component over function components (removing hooks from the question)?
before hooks were introduced they only way you could manage state was through class components.

- [ ] Name three lifecycle methods and their purposes.
componentDidMount() - allows the use of setState(), mounts the component when called.

componentDidUpdate() - compares prevProps or prevState to the current state/props and updates accordingly.

componentWillUnmount() - common cleanup for eventListeners, unmounts the component when called.

- [ ] What is the purpose of a custom hook?
always starts with "use", they're a mechanism that allows us to reuse stateful logic in powerful ways.

- [ ] Why is it important to test our apps?

vital for testing for bugs early in the application, saves time and money further down the line of development.