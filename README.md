__*GfK Front End Code Challenge*__

__*Scenario*__

You have been recently hired as a senior developer on a startup that is trying to build a web application using GitHub's search API. There are concerns over the quality of the existing codebase; moreover, your architect has decided that the application should use [GitHub's GraphQL API](https://developer.github.com/v4/) instead of its REST API in future.

*Please submit your solution once you deem it production ready.*

Your first ticket is as follows: 

__User Story__

*As a:* User 

*I want:* to be able to search GitHub by user name and display a list of matches.

*So that:* I can find my friends.


__User Story__

*As a:* User 

*I want:* to see a user's avatar.

*So that:* I can recognise my friends.


__User Story__

*As a:* User 

*I want:* to see information about a user's activity.

*So that:* I can understand their commit history.

## Notes:

### Github GraphQL API / Personal Access Tokens

In order to use the Github api v4 you will need a github personal access token. Please refer to the docs [here.]('https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

This token should be placed in a `.env` file in the format as shown in the `.env.example`

The Personal Access token is injected in at runtime by webpack using the `new Dotenv()` plugin.

### Unit tests

Run unit tests using `npm run test` or `npm run test-coverage` for a test coverage report.

Documentation for react testing library can be found [here.](https://testing-library.com/docs/react-testing-library/intro)

I have chosen to use react testing library as i think it's a nice way to test react components with react hooks, and is slightly easier to use than Enzyme. 

There are some warnings when running the tests, but i believe these may be fixed in react 16.9. [Github issue.](https://github.com/facebook/react/issues/14769#issuecomment-490125342)

### User Story requirements
I was a bit unsure regarding the third user story. In a workplace environment I would have asked for more information as to what was exactly required. In the absence of this I have opted to link to the users activity on github rather than try and display their activity on the page on a per repo basis. Hopefully that is ok :).

### Storybook
I changed the theme to light as the dark theme is not a true representation of the App I have made.

### CSS
I have kept the styles quite basic, but functional. There is nothing too fancy here, hopefully that is ok. 

### Lint / Stylelint rules
I enabled console logs for debugging, with a warning. This can be detected in a pre-commit hook or on CI to prevent leaking into develop / master branches.

I kept the other lint rules the same, but I would definitely feel like there should a discussion regarding some of them in order to keep code quality high and developers sane.
