import type { GatsbySSR } from "gatsby";
import ReactDOMServer from "react-dom/server.browser";
import React from "react";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./src/emotion/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

const { renderToReadableStream } = ReactDOMServer;

function decodeText(input: Uint8Array | undefined, textDecoder: TextDecoder) {
  return textDecoder.decode(input, { stream: true });
}

async function streamToString(
  stream: ReadableStream<Uint8Array>
): Promise<string> {
  const reader = stream.getReader();
  const textDecoder = new TextDecoder();

  let bufferedString = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      return bufferedString;
    }

    bufferedString += decodeText(value, textDecoder);
  }
}

async function renderToStringReadable(element: React.ReactElement) {
  const renderStream = await renderToReadableStream(element);
  await renderStream.allReady;
  return streamToString(renderStream);
}

export const replaceRenderer: GatsbySSR["replaceRenderer"] = ({
  replaceBodyHTMLString,
  bodyComponent,
  setHeadComponents,
}) => {
  const serverCache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(serverCache);

  renderToStringReadable(
    <CacheProvider value={serverCache}>{bodyComponent}</CacheProvider>
  ).then((resString) => {
    const emotionStyles = extractCriticalToChunks(resString);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={[style.key, style.ids.join(" ")].join(" ")}
        key={style.key}
        // nosemgrep:typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    setHeadComponents(emotionStyleTags);
    replaceBodyHTMLString(resString);
  });
};
