<script>
	export let segment: string;
</script>

<style>
	ul::after {
		content: '';
		@apply block clear-both;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -1px;
	}
</style>

<nav class="px-4 mb-8 font-light border-b border-yellow-600 border-solid">
	<ul class="p-0 m-0 ">
		<li class="block float-left">
			<a
				class="no-underline py-4 px-2 block {segment === undefined ? 'relative inline-block' : ''}"
				aria-current={segment === undefined ? 'page' : undefined}
				href="."
			>home</a>
		</li>
		<li class="block float-left">
			<a
				class="no-underline py-4 px-2 block {segment === 'about' ? 'relative inline-block' : ''}"
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about"
			>about</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="block float-left">
			<a
				class="no-underline py-4 px-2 block {segment === 'blog' ? 'relative inline-block' : ''}"
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog"
			>blog</a>
		</li>
	</ul>
</nav>
