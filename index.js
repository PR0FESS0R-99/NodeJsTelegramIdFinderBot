require("dotenv").config();
const { NodeTeleBotAPI } = require("./src/telegram");
const { userMention } = require("./src/methods");

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