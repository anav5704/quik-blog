import { PropFunction, Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import css from "./modal.css?inline"

interface ModalProps{ 
    title: string,
    close: PropFunction<() => void>
}

export default component$((props: ModalProps) => {
    useStylesScoped$(css)

    return (
        <div class="modal" onClick$={props.close}>
            <h3 class="title">{props.title}</h3>
            <div class="modal-content">
                <Slot name="content" />
                <div>
                    <Slot name="footer" />
                </div>
            </div>
        </div>
    )
})