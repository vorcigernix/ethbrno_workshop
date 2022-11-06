<script>
	import snarkdown from 'snarkdown';
	import { onMount } from 'svelte';
	import { browser, dev, prerendering } from '$app/environment';
	export let data;
	onMount(async () => {
		if (!browser) return;
		const result = await fetch(
			`https://raw.githubusercontent.com/vorcigernix/ethbrno_workshop/swr-markdown/static/README.md`
		).then((r) => r.text());
		if (result) data.content = await snarkdown(result);
	});
</script>

<h1>US Constitution and Freedom</h1>

<div>
	{@html data.content}
</div>
