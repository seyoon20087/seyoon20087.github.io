import { EmotionCache } from "@emotion/react";
import { createContext, type ReactNode } from "react";
import { createEmotionCache } from "./createEmotionCache";

export const serverCache = createEmotionCache();

const Context = createContext<EmotionCache | undefined>(undefined);

export const EmotionServerCacheContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => <Context.Provider value={serverCache}>{children}</Context.Provider>;

export const EmotionServerCacheContext = Context;
