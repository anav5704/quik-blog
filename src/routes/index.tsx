import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import Counter from "../components/starter/counter/counter";
import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";
import Starter from "../components/starter/next-steps/next-steps";
import Modal from "~/components/modal/modal";
import { blogs } from "../../data/db"

export default component$(() => {
    const isOpen = useSignal(false)

    const close = $(() => {
        isOpen.value = false
    })

    return (
        <div>
            {blogs.map((blog) => (
                <div>
                    <Link href={`/blogs/${blog.id}`}>
                        {blog.title}
                    </Link>
                </div>
            ))}
            {/* <button onClick$={() => isOpen.value = true}>Open Modal</button>
            {isOpen.value && (<Modal close={close} title="QWIK">
                <div q:slot="content">
                    Main content
                </div>
                <div q:slot="footer">
                    Footer
                </div>
            </Modal>)} */}
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
