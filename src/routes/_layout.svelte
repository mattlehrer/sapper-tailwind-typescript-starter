<script>
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<Nav {segment} />

<main class="border-box mt-0 mx-auto max-w-4xl relative bg-white p-8">
	<slot />
</main>
