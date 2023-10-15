import react from 'react';

function Sample1() {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  console.log(params.get('this'));

  return <><div>welcome to the new Hello World... SAMPLE 1</div><p>Query Params: this={params.get('this')}</p></>;
}

export default Sample1;
