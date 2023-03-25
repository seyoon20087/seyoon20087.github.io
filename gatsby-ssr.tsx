import type { GatsbySSR, WrapRootElementNodeArgs } from "gatsby";
import { renderToString } from "react-dom/server";
import {
  EmotionServerCacheContextProvider,
  EmotionServerCacheContext,
  serverCache,
} from "./src/emotion/EmotionCacheContext";
import React, { useContext } from "react";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./src/emotion/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

const EmotionCacheWrapper = ({ children }: { children: React.ReactNode }) => {
  const serverCache = useContext(EmotionServerCacheContext);
  return (
    <CacheProvider value={serverCache ?? createEmotionCache()}>
      {children}
    </CacheProvider>
  );
};

export const replaceRenderer: GatsbySSR["replaceRenderer"] = ({
  replaceBodyHTMLString,
  bodyComponent,
  setHeadComponents,
}) => {
  const { extractCriticalToChunks } = createEmotionServer(serverCache);

  const elem = renderToString(
    <EmotionServerCacheContextProvider>
      <EmotionCacheWrapper>{bodyComponent}</EmotionCacheWrapper>
    </EmotionServerCacheContextProvider>
  );

  const emotionStyles = extractCriticalToChunks(elem);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={[style.key, style.ids.join(" ")].join(" ")}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  setHeadComponents(emotionStyleTags);
  replaceBodyHTMLString(elem);
};
