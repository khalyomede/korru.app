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
const NotFound: Component = () => {
    const previousPage = window.sessionStorage.getItem("previousPage");

    return <Layout>
        <div class="flex h-dvh flex-col p-4 md:py-8">
            <div>
                <BackButton />
            </div>
            <div class="grow flex justify-center items-center flex-col">
                <AppErrorTitle>App not found</AppErrorTitle>
                <AppErrorDescription>No app matches this link in our catalog. Verify it has been correctly typed if you copied the URL.</AppErrorDescription>
                <AppErrorSeparator />
                <AppErrorDetail message={previousPage} />
                <BackToCatalogButton />
            </div>
        </div>
    </Layout>;
};

export default NotFound;
