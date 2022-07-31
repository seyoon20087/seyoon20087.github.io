import React from "react";

const Context = React.createContext(false);

function BrowserContextProvider(props: { children: React.ReactNode }) {
  const [isBrowser, setIsBrowser] = React.useState(false);
  React.useEffect(() => {
    setIsBrowser(true);
  });
  return (
    <Context.Provider value={isBrowser}>{props.children}</Context.Provider>
  );
}

export default BrowserContextProvider;
export { Context as BrowserContext };
