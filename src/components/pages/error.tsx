import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    return <p>{error.statusText}</p>;
  } else {
    return <p>oops!</p>;
  }
};

export default Error;
