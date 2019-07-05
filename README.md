# BukaBounty
BukaBounty is Bukalapak Bug Bounty Program. Bukalapak will reward security researchers who submit valid vulnerability. It currently lives on this page https://bukalapak.github.io/bukabounty/.

## Dependencies
- [`yarn`](https://yarnpkg.com/en/)

## Develop
```sh
yarn develop
```

Then view it in http://localhost:8000/.

## Add/Edit Researchers, Scopes, Points
Edit files in `src/data/<data>.js` and push it to the branch `master`. Then deploy to GitHub page using method below.

## Deploy
```sh
yarn deploy
```
