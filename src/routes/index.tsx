import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-5xl font-bold">PIBATTLE</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "PIBATTLE",
  meta: [
    {
      name: "description",
      content: "A game that click pi(3.141592...)",
    },
  ],
};
