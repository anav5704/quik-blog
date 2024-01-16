import { component$, useStyles$ } from "@builder.io/qwik"
import Styles from "./about.css?inline"

export default component$(() => {
    useStyles$(Styles)

    return (
        <>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident similique officia quae, ducimus nisi quos commodi? Possimus rem quibusdam voluptas veniam dolores dicta molestias cumque harum eaque exercitationem veritatis vitae unde, tempore quam iure facere nobis porro numquam eos quae voluptates praesentium distinctio odio dolor. Quas sit consectetur harum!</p>
        </>
    )
})