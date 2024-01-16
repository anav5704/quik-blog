import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import css from "./modal.css?inline"

export default component$(() => {
    useStylesScoped$(css)

    return (
        <div class="modal">
            <div class="modal-content">
                <Slot name="content" />
                <div>
                    <Slot name="footer" />
                </div>
            </div>
        </div>
    )
})