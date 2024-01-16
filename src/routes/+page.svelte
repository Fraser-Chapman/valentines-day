<script lang="ts">
	import bearsPaintingNails from '$lib/assets/bears-painting-nails.png';
	import { browser } from '$app/environment';

	const buttonWidth: number = 60.72;
	const buttonHeight: number = 42;

	let noButtonText = 'No'

	if (browser) {
		let attempts: number = 0;
		const maxWidth: number = window.innerWidth - buttonWidth;
		const maxHeight: number = window.innerHeight - buttonHeight;

		const noButton = document.getElementById('no-button') as HTMLButtonElement

		noButton.addEventListener('mouseover', () => {
			if (attempts > 2) {
				noButton.style.position = '';
				noButtonText = 'Really? :('
			} else {
				noButton.style.position = 'absolute'
				noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
				noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
				attempts++
			}
		});
	}

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col">
		<h2 class="h2">Will you be my Valentine?</h2>

		<img src="{bearsPaintingNails}" alt="two bears painting each-other's nails">

		<div class="button-container">
			<div>
				<a
					class="btn variant-filled"
					href="/yes"
				>
					Yes
				</a>
			</div>
			<div id="no-button">
				<a
					class="btn variant-filled"
					href="/no"
				>
					{noButtonText}
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
    .button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
