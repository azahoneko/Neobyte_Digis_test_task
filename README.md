This application is test app
A lot will be different in a real application.
1. Use react-router instead of mutating location programmatically
2. Break into components and make a separate page for results
3. Make debounce on every keystroke so that there are no unnecessary requests to the backend
4. For backend requests use thunk/sagas. Store the result in redux. The store should be normalized for best performance. Use redux-toolkit as well due to selects and Immer
5. If the backend supports, then it is better to use GraphQL. Then there is no need for redux, thunk, etc... The data will be automatically normalized