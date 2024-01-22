npm-build:
	npm run build
commit-static-files:
	git add ./docs && git commit -m "New release"
git-push:
	git push

deploy: npm-build commit-static-files git-push
