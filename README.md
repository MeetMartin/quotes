# 10 Easy Steps To Abandon Redux For Remarkable React Hooks

Live Website: [Quotes Website](https://quotes.meet-martin.com/)

Medium Post: [10 Easy Steps To Abandon Redux For Remarkable React Hooks](https://betterprogramming.pub/10-easy-steps-to-abandon-redux-for-the-remarkable-react-hooks-124916fc634d)

YouTube Video: [React Hook Global State Management](https://www.youtube.com/watch?v=lw7IumbVH_A)

## React Frontend

To run the React frontend only:
```
$ npm install
$ npm run dev
```

## Netlify

The project is directly deployable to Netlify regardless of whether you choose requestQuote or getQuoteFromNetlify.

To try the Netlify functions version, first replace function requestQuote with getQuoteFromNetlify in /src/store/hooks/QuoteHook.js.

Then run the Netlify functions emulation:
```
$npm run functions
```
Both the frontend and functions need to be running at the same time.

## How To Create Pull Request

1. First fork this repository to create your own version of it (There is a button for it in the GitHub UI).
2. Make the changes that you want into the new repository.
3. Commit and push these changes into your repository (preferably using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)).
4. Create a Pull Request into the original repository providing information about your changes (There is a button for it again in the GitHub UI).
5. Wait for the original author of the repository to review your changes and reach back.

If you have any questions, please open an issue in the original repository on GitHub.
