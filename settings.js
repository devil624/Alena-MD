//═══════════════════════════════════════════════════════// // ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ // ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ // ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ // ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ //════════════════════════════//
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['918111869080']
global.premium = ['971522076887']
global.ownernomer = '918111869080'
global.ownername = 'SHAFU'
global.botname = 'Alena-MD'
global.footer = '©your Footer.'
global.ig = 'https://github.com/Afx-Abu'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/Afx-Abu/Alena-MD'
global.myweb = 'https://youtube.com/channel/'
global.packname = 'Alena-MD'
global.author = 'ABU'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙸𝚂 𝙾𝙽𝙻𝚈 𝙵𝚁𝙾𝙼 𝙰𝙳𝙼𝙸𝙽!',
    botAdmin: '𝙰𝙳𝙼𝙸𝙽 𝙶𝙸𝚅𝙴 𝙵𝙴𝚂𝚃 𝚃𝙷𝙴𝙽 𝚆𝙾𝚁𝙲𝙺 𝙲𝙾𝙼𝙼𝙰𝙽𝙳!',
    owner: '𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙸𝚂 𝙾𝙽𝙻𝚈 𝙵𝚁𝙾𝙼 𝙾𝚆𝙽𝙴𝚁!',
    group: '𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙸𝚂 𝙾𝙽𝙻𝚈 𝙵𝙾𝚁 𝙶𝚁𝙾𝚄𝙿!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('alena.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'img url'
global.packname = process.env.PACKNAME ||'ᴀʟᴇɴᴀ-ᴍᴅ'
global.myweb = process.env.INSTA_LINK ||'https://instagram.com/'
global.author = process.env.AUTHOR ||'ʏᴏᴜʀ ɴᴀᴍᴇ'
global.name = 'ALENA MULTI-DEVICE'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| 'ᴀʟᴇɴᴀ ᴍᴅ'
global.owner_name = process.env.OWNER_NAME || 'your Name'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

