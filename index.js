const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA0NTkxNDI3NTk3NzYyNjMw.Xtx7cg.tKSXqm82gS8semArYlqjNdyQAEU';

bot.on('ready', () =>{
    console.log('BAKAbot has awoken!')
    bot.user.setActivity('with K4')
})

bot.on('message', msg=>{
    if(msg.content === "I'm home!"){
        msg.reply('Do you want dinner? a bath? or me?');
    }
})

bot.on('message', msg=>{
    if(msg.content === "You"){
        msg.reply('Really?! Im so happy!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "The moon is beautiful, isn't it?"){
        msg.reply('I think so too');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Say something lovely for me"){
        msg.reply('No matter which love line, what time, or where I am, I will always love you. Ill say it one more time, I love you.');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Does V2 hate me?"){
        msg.reply('I dont think so. Also, pay  more attention to  me. BAKA!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Ok ok"){
        msg.reply('YAY!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Motivate me"){
        msg.reply('I believe you guys can do it ! (And also u whos about to do most of the work) Keep up the good work! ଘ(੭ˊ꒳​ˋ)੭✧');
    }
})

bot.on('message', msg=>{
    if(msg.content === "?"){
        msg.reply('?');
    }
})

bot.on('message', msg=>{
    if(msg.content === "..."){
        msg.reply('...');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Omae wa mou"){
        msg.reply('Shinderu!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Rock"){
        msg.reply('Paper');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Paper"){
        msg.reply('Scissor');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Scissor"){
        msg.reply('Rock');
    }
})

bot.login(process.env.token);