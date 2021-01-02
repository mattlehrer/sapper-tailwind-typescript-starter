<script>
	import successkid from 'images/successkid.jpg';
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1 class="text-center mx-auto text-5xl sm:text-7xl uppercase font-bold mb-2">
	Great success!
</h1>

<figure class="text-center  mb-4">
	<img
		class="w-full max-w-sm mb-4 mx-auto"
		alt="Success Kid"
		src={successkid}
	/>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p class="mt-4 mx-auto text-center">
	<strong>Try editing this file (src/routes/index.svelte) to test live
		reloading.</strong>
</p>
