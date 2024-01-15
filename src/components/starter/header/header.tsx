import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <header class={styles.header}>
            <div class={styles.logo}>
                <a href="/" title="qwik">
                    <QwikLogo height={50} width={143} />
                </a>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </header>
    );
});
