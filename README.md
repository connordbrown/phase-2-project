# EmojiFinder

EmojiFinder is a front-end application for looking up and adding your favorite emojis!

## Operation

Use the API simulator [json-server](https://www.npmjs.com/package/json-server) to run the application's back-end.

```bash
json-server --watch db.json
```
Then, in a separate terminal, run the React app in the browser:
```bash
npm start
```

## Usage

Home

    When the page loads, the user will see the Home page. It features a nav bar, followed by an emoji search and emoji category filter, followed by a list of emoji cards. Emoji cards can be filtered by category using the Filter By Category dropdown above the list. Users can search for specific emojis using the Search bar. The user can scroll through the emoji cards and select one by clicking on it. The page will display the clicked emoji, as well as its name, category, group, and HTML code.

About
    When the user clicks on the About button on the nav bar, the page will display a description of the application.

Add Emoji
    When the user clicks on the Add Emoji button in the nav bar, the page will display a form for adding new emojis. Input a name, a category featured in the dropdown in Home, a group name, as well as a valid HTML code, then click Create New Emoji to post a new emoji to the backend and render it to the Home page.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Authors and Acknowledgement

The original application was designed and built by Connor D. Brown in 2023.

This application uses modified data from the [EmojiHub API](https://github.com/cheatsnake/emojihub). The original API was created by cheatsnake.  