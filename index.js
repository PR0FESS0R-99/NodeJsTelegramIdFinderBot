require("dotenv").config();
const { NodeTeleBotAPI } = require("node-tele-bot-api");
const { userMention } = require("node-tele-bot-api/methods");

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new NodeTeleBotAPI(BOT_TOKEN);

bot.onCommand("start", async (messgae) => {

    const botInfo = await bot.getMe();

    const text = `Hi ${userMention(messgae)} Welcome to @${botInfo.username} \n\n Your Id is <code>${messgae.from.id}</code>`

    bot.sendMessage({
        chat_id: messgae.chat.id,
        text
    });
});

bot.start(() => {
    console.log("Bot started");
});

bot.setWebhookConfig({
    domain: process.env.DOMAIN,
    port: process.env.PORT
});