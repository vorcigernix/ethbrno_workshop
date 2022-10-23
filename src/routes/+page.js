/** @type {import('./$types').PageLoad} */

import snarkdown from 'snarkdown';
import { base } from '$app/paths';

export async function load({ fetch }) {
    const response = await fetch(`${base}/README.md`).then((r) => r.text());

    const compiledResponse = await snarkdown(response);
    return { content: compiledResponse };
}
