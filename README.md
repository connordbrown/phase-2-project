# EmojiFinder

EmojiFinder is a front-end application for looking up and/or uploading your favorite emojis!

## Operation

Use the API simulator [json-server](https://www.npmjs.com/package/json-server) to run the application's back-end:

```bash
json-server --watch db.json
```
Then, in a separate terminal, run the React app in the browser:
```bash
npm start
```

## Usage

1. Home: 
    - When the page loads, the user will see the Home page. It features a nav bar, followed by an emoji search and emoji category filter, followed by a list of emoji cards. Emoji cards can be filtered by category using the Filter By Category dropdown above the list. Users can search for specific emojis using the Search bar. The user can scroll through the emoji cards and select one by clicking on it. The page will display the clicked emoji, as well as its name, category, group, and HTML code. This new page will have a unique endpoint in its URL.

2. About: 
    - When the user clicks on the About button on the nav bar, the page will display a description of the application.

3. Add Emoji: 
    - When the user clicks on the Add Emoji button in the nav bar, the page will display a form for adding new emojis. Input a name, a category featured in the dropdown in Home, a group name, and a valid HTML code, then click Create New Emoji to post a new emoji to the backend and render it on the Home page. Click the Home button in the nav bar to return to Home.

<br>
<img src="https://github.com/connordbrown/phase-2-project/blob/main/phase-2-project.gif?raw=true" width="800" height="584"/>
<br>

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Authors and Acknowledgement

The original application was designed and built by Connor D. Brown in 2023.

This application uses modified data from the [EmojiHub API](https://github.com/cheatsnake/emojihub). The original API was created by cheatsnake.  