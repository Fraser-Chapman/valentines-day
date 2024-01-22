<script lang="ts">
	import bearsHugging from '$lib/assets/bears-hugging.png';

	let soundsGood: boolean = false;

	function soundsGoodClicked(): void {
		soundsGood = true;
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col">
		<h2 class="h2">Yippee!</h2>

		<img src="{bearsHugging}" alt="A bear blowing a kiss">

		{#if soundsGood}
			<div>
				<h3 class="h3">Agenda:</h3>
				<ul>
					<li>
						- 14:30 Mini Golf @ Urban Playground
					</li>
					<li>
						- 17:30 Maki & Ramen
					</li>
					<li>
						- Finish @ CloudWater Brewery
					</li>
				</ul>
			</div>
		{:else }
			<button class="btn variant-filled" on:click="{soundsGoodClicked}">Show me the plan!</button>
		{/if}

	</div>
</div>

<style lang="postcss">

</style>
