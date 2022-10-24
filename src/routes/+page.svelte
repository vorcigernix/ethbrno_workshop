<script>
	import snarkdown from 'snarkdown';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	export let data;
	onMount(async () => {
		const result = await fetch(`${base}/README.md`).then((r) => r.text());
		if (result) data.content = await snarkdown(result);
	});
</script>

<h1>US Constitution and Freedom</h1>

<div>
	{@html data.content}
</div>
