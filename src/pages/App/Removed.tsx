import { Component } from "solid-js";
import BackButton from "../../components/BackButton";
import Layout from "../../layouts/Layout";
import BackToCatalogButton from "../../components/BackToCatalogButton";
import AppErrorTitle from "../../components/AppErrorTitle";
import AppErrorDescription from "../../components/AppErrorDescription";
import AppErrorSeparator from "../../components/AppErrorSeparator";
import AppErrorDetail from "../../components/AppErrorDetail";

/**
 * @todo Make a layout for errors.
 */
const Removed: Component = () => {
    const previousAppName = window.sessionStorage.getItem("previousAppName");

    return <Layout>
        <div class="flex h-dvh flex-col p-4 md:py-8">
            <div>
                <BackButton />
            </div>
            <div class="grow flex justify-center items-center flex-col">
                <AppErrorTitle>App removed</AppErrorTitle>
                <AppErrorDescription>This app has been removed from the list as it no longer meets our quality criteria.</AppErrorDescription>
                <AppErrorSeparator />
                <AppErrorDetail message={previousAppName} />
                <BackToCatalogButton />
            </div>
        </div>
    </Layout>;
};

export default Removed;
