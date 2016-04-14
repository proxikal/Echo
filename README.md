#Need help?
You can visit our server and ask any questions: https://discord.gg/0pTKzt2BDInBOrxL <Br>
You can try to fix him yourself. but make sure you're typing an existing command just type `--help` in the server.<br>
Still not responding? <b>Use this as a last resort. Echo backs your database up every 2 hours <u>on the hour</u></b><br>
Private message `--help` to echo and he will walk you through grabbing your last working configuration.<br>
<Br>
#Echo's commands
<i><b>
<pre>
--addmaster, --delmaster, --autorole
--byemsg, --getid, --rolecolor
--greet, --setprefix, --youtube
--ban, --kick, --give
--giveme, --take, --t
--giphy, --sticker, --flush
--coinflip, --8ball, --rolemonitor
--auto, --mute, --unmute
--roletime, --spell, --locateip
--cats
</pre></b></i>
<br>
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
`--roletime` Example: `--roletime 1d Role Name` gives a user the role after a given time.<br>
`--spell` Example: `--spell obfuscrated` Spell checks a word and possibly a sentence<br>
`--cats` Example: `--cats` displays random cat photos or animations.<br>

<b>Hidden Command:</b> Watch Free movies and TV. (You have to build it yourself)</u> <a href="https://github.com/proxikal/Echo/blob/master/hiddencmd_watch_movies.PNG">Learn how Here!</a>

<pre>
5m, 10m, 15m, 20m, 25m, 30m, 35m, 40m, 45m, 50m, 55m
1h, 2h, 3h, 4h, 5h, 6h, 7h, 8h, 9h, 10h, 11h, 12h, 13h, 14h, 15h, 16h, 17h
18h, 19h, 20h, 21h, 22h, 23h, 1d, 2d, 3d, 4d, 5d, 6d, 7d, 8d, 9d, 10d, 11d, 12d, 13d
14d, 15d, 16d, 17d, 18d, 19d, 20d, 21d, 22d, 23d, 24d, 25d, 26d, 27d, 28d, 29d, 30d
</pre>
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
  <li>{exc=USERID} Or {exc=USERID,role name,USERID,another role}</li>
  <li>{mock}</li>
  <li>{mock2}</li>
  <li>{greet}</li>
  <li>{user}</li>
  <li>{/user}</li>
  <li>{kick}</li>
  <li>{pm}</li>
  <li>{pm=USERID}</li>
  <li>{pref}</li>
  <li>{rand1}</li>
  <li>{meme1}</li>
  <li>{date1}</li>
  <li>{date2}</li>
  <li>{time}</li>
  <li>{del} <i>(THIS WORKS AGAIN)</i></li>
  <li>{cmd=} <i>More details: <a href="https://github.com/proxikal/Echo/blob/master/README.md#remake-echos-commands-with-custom-triggers">Click Here</a></i></li>
</ul>

<b>{exc=USERID}</b>: (Image example: <a href="https://github.com/proxikal/Echo#excluding-people-from-a-trigger">Click Here</a>)<Br>
Excludes user(s) from the auto response. Example 1: `{exc=USERID}` or `{exc=USERID,USERID,USERID}`<br>
Also you can block roles alongside users! `{exc=Role Name}` or alongside users `{exc=USERID,role name, role name}`<br>
Echo can get a user's id by typing `--getid @User`<br>
<br>
<b>{mock}</b>:<br>
Echo will repeat whatever the user said.<br>
<br>
<b>{mock2}</b>:<br>
Echo will repeat the user's text in reverse<br>
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
<b>{cmd=}</b>:<br>
This allows Echo to use his commands in a custom trigger.<br>
Examples: `{cmd=addmaster}`, `{cmd=help}`, `{cmd=setprefix}`<br>
This will let you rename Echo's command. more info <a href="https://github.com/proxikal/Echo/blob/master/README.md#remake-echos-commands-with-custom-triggers">Here!</a>
<br><br>
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
# Excluding people from a trigger.
<img src="https://github.com/proxikal/Echo/blob/master/autoresp_exclude_howto.PNG"><br>
# Remake echo's commands with custom triggers!
<img src="https://github.com/proxikal/Echo/blob/master/customcmds_addmaster_howto.PNG"><br>
<br>
<br>
# How to make a `--joke` or `--meme`.
First type `start::`<br>
Now for a trigger type `--joke` or `--meme` whatever you want to add.<br>
Now in his response type `{rand1}` for joke. and `{meme1}` for a random meme!<br>
<br>
Now you have made the joke or meme command. enjoy!
