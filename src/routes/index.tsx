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
        <div class="grid grid-cols-3 gap-5" >
            {blogs.map((blog) => (
                <div key={blog.id} class="bg-zinc-800 col-span-1 rounded-xl p-3">
                    <Link href={`/blogs/${blog.id}`}>
                        <p class="text-xl font-semibold">{blog.title}</p>
                        <br />
                        <p class="line-clamp-2">{blog.content}</p>
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
