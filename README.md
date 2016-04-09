#Need help?
You can visit our server and ask any questions: https://discord.gg/0pTKzt2BDInBOrxL
<Br>
#Echo's commands
<i>
--addmaster, --delmaster, --autorole
--byemsg, --getid, --rolecolor
--greet, --setprefix, --youtube
--ban, --kick, --give
--giveme, --take, --t
--giphy, --sticker, --flush
--coinflip, --8ball, --rolemonitor
--auto, --mute, --unmute
</i><Br>
You can get help on any command by typing <b>--help cmdname</b><br>

`--rolecolor`: Example: `--rolecolor #FF0000 Role Name`<br>
`--byemsg`: Example: `--byemsg {user} has left the server`<br>
`--autorole` Example: `--autorole Role Name` auto assigns role to new members.<br>
`--greet` Example: `--greet Welcome {user} if you need any help ask Proxy!` you can use {/user} for non-mentions.<br>
`--give` Example: `--give @user Role Name`<br>
`--take` Example: `--take @user Role Name`<br>
`--giveme` Example: `--giveme Role Name`<br>
`--rolemonitor` Description: Alerts you when a role has been edited in your server.<br>
`--auto` Description: Toggles `ON\OFF` Echo's Auto Response System.<br>
`--t` Example: `--t en-fr Hello how are you?` translates text from one language to another.<br>
<br>
to add a new auto response type: `start::`<br>
to delete an auto response type `delete::trigger word here`<br>
to list all your responses type `list::`<br>
to wipe your Auto Response Database type `wipe::`<br>

# Echo Documentation
Echo was originally named `Paradox` until he was completelly re-written for the new API.<br>
<Br>
A key is text surrounded by obraces. <b>{key}</b><br>
This usually get's replaced with data. or a function. read below<br>
# Greeting system
<b>Accepted Key's</b>
<ul>
  <li>{user}</li>
  <li>{/user}</li>
</ul>
<br>
Example 1: `--greet Welcome {user}` will mention the user.<br>
Example 2: `--greet Welcome {/user}` will just say the users name.<br>
<br>
# Auto Response System
The command is only for `Server Owners` no one else has access to add triggers.<br>
You need to type `--auto` to initiate the auto response for the first time!<br>
In the future you can toggle Auto Response On\Off by typing `--auto`<br>
<B>to add a new trigger type `start::`<br>
to delete a trigger type `delete::the trigger word`<br>
to list all triggers\responses type `list::`<br>
</b>
<br>
<b>Accepted Response Key's</b>
<ul>
  <li>{mock}</li>
  <li>{greet}</li>
  <li>{user}</li>
  <li>{/user}</li>
  <li>{kick}</li>
  <li>{pm}</li>
  <li>{pm=USERID}</li>
  <li>{pm=USERID,USERID,USERID}</li>
  <li>{pref}</li>
  <li>{rand1}</li>
  <li>{meme1}</li>
  <li>{date1}</li>
  <li>{date2}</li>
  <li>{time}</li>
  <li>{del}</li>
</ul>

<b>{mock}</b>:<br>
Echo will repeat whatever the user said.<br>
<br>
<b>{greet}</b>:<br>
Echo will replace this key with your current greet message.<br>
<br>
<b>{user}</b>:<br>
if you use {user} it will mention the user in the response. <i>example @Username</i><br>
<br>
<b>{/user}</b>:<br>
If you use {/user} it will just say their name. Without the mention. <i>example Username</i><br>
<br>
<b>{kick}</b>:
If you add {kick} into the response it will kick anyone who said your trigger!<br>
this can be used for a word filter. we will explain more below.<br>
<br>
<b>{pm}</b>:<br>
<b>This key needs to be at the beginning of the response!</b> if you add {pm} at the beginning of the response. it will message the user the response instead of in server.<br>
<br>
<b>{pm=USERID}</b>:<br>
<b>This key needs to be at the beginning of the response!</b> You can have Echo private message up to three people to "Alert" you when someone says the trigger word.<br>
To do multiple ID's you use <b>{pm=USERID,USERID,USERID}</b><i>You can get someones id by typing</i> `--getid @user`<br>
<br>
<b>{pref}</b>:<br>
Echo will replace this key with his prefix in your server.<br>
<br>
<b>{rand1}</b>:<br>
Echo will say a random joke in your response.<Br>
<br>
<b>{meme1}</b>:<br>
Echo will post a random meme in your response.<br>
<br>
<b>{date1}</b>:<br>
Displays Echo's current date like `March 10, 2001, 5:16 pm`<br>
<br>
<b>{date2}</b>:<br>
Displays Echo's current date like `03.10.01`<br>
<br>
<b>{time}</b>:<br>
Displays Echo's current time like `5:16 pm`<Br>
<br>
<b>{del}</b>:(<b>Currently Buggy</b>}<br>
This will delete the user's message when it triggers your response. (<b>Perfect for Word Filter</b>)<br>
<br>

<b>Accepted Trigger Key's</b>
<ul>
  <li>{find=word}</li>
  <li>Any text</li>
</ul>
<br>
<b>{find=word}</b>:<br>
This will search for the word in a user's text. and than show his response.<br>
<Br>
You can type anything for his trigger. Let's teach you how to make custom @Echo commands.<br>
<br>
For echo's trigger type: @Echo what's your prefix?<Br>
for his response type: My prefix in your server is `{pref}`<br>
You have just made a custom @Echo command! You can make custom commands with any prefix.<br>
<br>
<b><font color="red">WARNING: If you add a trigger that's the same as one of his commands. it could cause your server data to get erased. and he won't respond. IF echo doesn't respond in your server. Private message him `--help` and he will walk your through
fixing your server database.</font></b>
<Br>
# Word filtering and Link filtering.
You can use Echo's auto response system for word filtering or anti-link system.<br>
From there you can decide to add {kick} in the response or not. but here's some images to show you<br>
<br>
<img src="https://github.com/proxikal/Echo/blob/master/word_filter_howto.PNG"><br>
<img src="https://github.com/proxikal/Echo/blob/master/word_filter_kick_howto.PNG"><br>
<img src="https://github.com/proxikal/Echo/blob/master/antilink_howto.PNG"><br>
<img src="https://github.com/proxikal/Echo/blob/master/antilink2_howto.PNG"><br>
# Delete an Auto Response.
<img src="https://github.com/proxikal/Echo/blob/master/delete_example.PNG">
# Word filter with Remove offending word.
<img src="https://github.com/proxikal/Echo/blob/master/word_filter_del_howto.PNG"><br>
<br>
<br>
# How to make a `--joke` or `--meme`.
First type `start::`<br>
Now for a trigger type `--joke` or `--meme` whatever you want to add.<br>
Now in his response type `{rand1}` for joke. and `{meme1}` for a random meme!<br>
<br>
Now you have made the joke or meme command. enjoy!
