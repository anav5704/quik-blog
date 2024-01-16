import { component$ } from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city'
import { blogs } from "../../../../data/db";

export default component$(() => {
     const url = useLocation()

    return (
        <>
            <h1 class="font-bold">{blogs[parseInt(url.params.id) - 1].title}</h1>
            <p>{blogs[parseInt(url.params.id) - 1].content}</p>
        </>
    )
})