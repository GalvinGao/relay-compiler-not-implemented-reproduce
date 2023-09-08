import { graphql, useLazyLoadQuery } from "react-relay";
import "./App.css";

function App() {
  const data = useLazyLoadQuery(
    graphql`
      query AppQuery {
        hello
      }
    `,
    {}
  );

  return <div>Hello {data.hello}!</div>;
}

export default App;
