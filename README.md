# Telegram ID Finder Bot

A simple Telegram ID Finder bot made with `node-tele-bot-api`. This bot helps users quickly find their Telegram user ID by interacting with the bot.

## Features

- Retrieves the Telegram user ID.
- Simple and easy to use.
- Built using the `node-tele-bot-api`.

## Getting Started

Follow the instructions below to set up the Telegram ID Finder bot on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 14.x or later).
- A Telegram Bot Token (You can create a bot using [BotFather](https://core.telegram.org/bots#botfather)).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PR0FESS0R-99/NodeJsTelegramIdFinderBot
   cd NodeJsTelegramIdFinderBot
   ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a .env file in the root of your project and add your bot token:

    ```bash
    BOT_TOKEN=your_telegram_bot_token_here
    ```

4. Start the bot:
    ```bash
    npm start
    ```

### Usage

Once the bot is running, you can start interacting with it through Telegram:

1. Open Telegram and search for your bot (the bot username you created with BotFather).

2. Start the conversation by typing /start.

3. The bot will reply with your Telegram user ID.


### Project Structure

    ```bash
   NodeJsTelegramIdFinderBot/
    │
    ├── index.js          # Main bot logic
    ├── package.json    # Project metadata and dependencies
    └── .env            # Environment variables (keep this secret)
    ```

### Scripts

- `npm start` - Starts the bot.

### Dependencies

- [node-tele-bot-api](https://github.com/PR0FESS0R-99/node-tele-bot-api) - easy to make telegram bot.

### Contributing

Feel free to contribute by submitting a pull request.
