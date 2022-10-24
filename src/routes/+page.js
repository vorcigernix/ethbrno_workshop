/** @type {import('./$types').PageLoad} */

import snarkdown from 'snarkdown';
import { base } from '$app/paths';

export async function load({ fetch }) {
    const response = await fetch(`${base}/README.md`).then((r) => r.text());
    const responseWMessage = `### this is a generated version  ${response}`;

    const compiledResponse = await snarkdown(responseWMessage);
    return { content: compiledResponse };
}
