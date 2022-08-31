import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type Layout from "../src/Layout";

export type NextPageWithLayout = NextPage & {
    layout?: typeof Layout
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
