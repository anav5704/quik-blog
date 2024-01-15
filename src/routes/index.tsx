import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "../components/starter/counter/counter";
import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";
import Starter from "../components/starter/next-steps/next-steps";

export default component$(() => {
    const name = useSignal("")
    const blogs = useStore([
        {
            name: "Blog 1",
            author: "Anav"
        },
        {
            name: "Blog 2",
            author: "Anav"
        }
    ])

    return (
        <div>
            {name.value}
            <button onClick$={() => name.value = "Anav"} >First Name</button>
            <button onClick$={() => name.value = "Chand"}>Surname</button>
            <article>
                {blogs.map(blog => blog.name)}
            </article>
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
