<script>
	import bearsPaintingNails from '$lib/assets/bears-painting-nails.png';
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
			<div>
				<a
					class="btn variant-filled"
					href="/no"
				>
					No
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
