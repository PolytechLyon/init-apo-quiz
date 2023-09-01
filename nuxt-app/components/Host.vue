<template>
    <main>
        <h1>Quiz Initiation APO</h1>
        <section>
            <h2>À quoi sert ce quiz&nbsp;?</h2>
            <p>Les exercices suivants peuvent vous guider dans la décision de suivre ou non les cours Initiation APO.</p>
        </section>
        <header>
            <NuxtLink :href="props.prev">Précédent</NuxtLink>
            <NuxtLink v-if="!props.hideHome" href="/">Contenu</NuxtLink>
            <NuxtLink :href="props.next">Suivant</NuxtLink>
        </header>
        <slot></slot>
    </main>
</template>
<script setup lang="ts">

interface Props {
  next?: string;
  prev?: string;
  hideHome?: boolean;
}

const props = defineProps<Props>();

</script>