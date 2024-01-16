import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "../components/starter/counter/counter";
import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";
import Starter from "../components/starter/next-steps/next-steps";
import Modal from "~/components/modal/modal";

export default component$(() => {

    return (
        <div>
            <Modal title="QWIK">
                <div q:slot="content">
                    Main content
                </div>
                <div q:slot="footer">
                    Footer
                </div>
            </Modal>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
