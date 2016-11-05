# AutoGo HAS A WEBSITE!!
Github will no longer be updated since we have a website.  
[AutoGo's Website Click Here!](https://xtclabs.net)  
  
# Need help?
Our server was accidentally deleted. the new invite link is below.  
You can visit our server and ask any questions: https://discord.gg/CMtW45h 
  
**__Issues:__** Make sure to give Echo the full permissions still having issues?  
Go into your server settings > Roles and Drag Echo [BETA] to the top. this fixes most problems.  
Also be sure he has Manage Roles permissions.  
  
  **If the emoji is not at the beginning of your message and has a space  
  Replace with an underscore `:baby girl:` would be `:baby_girl:`**
   
  
## Index
[Word Filter Examples](https://github.com/proxikal/Echo/blob/master/README.md#some-other-examples)  
[Meme and Joke Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---meme-or---jokes-command)  
[Cats Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---cats-command-in-your-server)  
[Giphy Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---giphy-command-in-your-server)  
[Giveme Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---giveme-command-in-your-server)  
  
  
# Auto Response System Keys
> <b>You no longer need to initiate by typing</b> `--auto`  
you can just start adding keys!  
  
Ok first let's look at the trigger section.  
You want to set this to whatever word/sentence you want Echo to respond to.  
  
  
<b>NEW: You can use the {params} key in the trigger to catch their text!</b> 
`--auto &--giveme {params}={role:{params}}{req:Owner}You've assumed the role {params}`
  
The example above `requires` you to have the role `Owner` and will give you  
whatever role you type (*As long as the role exists*) for example: `giveme Staff`  
  
  
If you want to use regex you add the <b>&</b> key before the word Example Below:  
`--auto &word=The Response here!`  
Want to add a work like `ass` to the word filter? but don't want to catch `mass`?  
Add a space after the word. this will assure it only triggers on the word! Example Below:  
`--auto &ass =The Response here!`  
  
Ok, now let's look at the <b>Response</b> section and all the keys you can use!  
<b>Keys</b> are surrounded by obraces. `{key}` Echo will replace these keys with data!  
Here's a list:  
  
Check out the New **Auto Response Builder** [Click Here!](http://echobot.tk/)  
  
| Command  | Usage  | Information  |
| :---: | :---: | :---: |
| {pm}  | {pm}  | Echo will private message the response.  |
| {user}  | {user}  | Echo will mention the user.  |
| {/user}  | {/user}  | Echo will say the user's name  |
| {del}  | {del}  | Echo will delete the user's message.  |
| {kick}  | {kick}  | Echo will kick Non-Commanders  |
| {ban}  | {ban}  | Echo will ban Non-Commanders  |
| {role}  | {role:Role Name}  | Gives a user a specific role.  |
| {alert}  | {alert:YOURID}  | Alerts you if someone triggers reponse<Br>You can also do multiple alerts<Br>{alert:YourID,AnotherID}  |
| {exc}  | {exc:Role Name}  | Excludes a role from your trigger.!<br>You can exclude multiple roles!<br>{exc:Role name,Role Name}  |
| {chan}  | {chan}  | Returns the current channel.  |
| {pref}  | {pref}  | Displays echo's current prefix.  |
| {greet}  | {greet}  | Displays echo's current greeting.  |
| {bye}  | {bye}  | Displays echo's current bye message.  |
| {ismaster}  | {ismaster}  | Displays if the user is master or not `True` or `False`  |
| {listroles}  | {listroles}  | Displays all the users roles.  |
| {allroles}  | {allroles}  | Displays all roles in server.  |
| {joined}  | {joined}  | Shows the date and time a user has joined.  |
| {channels}  | {channels}  | Shows all channels in the server.  |
| {meme}  | {meme}  | Shows random memes.  |
| {joke}  | {joke}  | Shows random jokes.  |
| {params}  | {params}  | if you have this key in your trigger and response<br>you can catch their text!<br>`--auto &--announce {params}=**ANNOUNCEMENT:**{params}`  |
| {req}  | {req:Role Name}  | Requires a user to have a role. you can also require multiple roles like `{exc}`  |
| {ass}  | {ass}  | Shows random ass.  |
| {boobs}  | {boobs}  | Shows random boobs.  |
| {warn}  | {warn:5}  | Adds a warning point to a user.<Br>be default `--setpunish` is set to `kick`  |
| {msg}  | {msg:Text Here}  | The warning message before he kicks\bans. Only works if`{warn}` key is found.  |
| {getid}  | {getid}  | Grabs the users id.
| {redirect}  | {redirect:CHANNELID}  | Redirects users text to a specific channel.  |
  
  
  
Will update constantly!
  
### USING THE {PARAMS} KEY
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | --auto &--sayhi {params}=Your Message: {params}  |
| Use Command:  | `--sayhi hey guys!`  |
  
  
### SERVER INFO COMMAND
Alright let's make a **"Server Info"** command  
the purpose is to keep you updated on what your greet\bye or prefix is.  
  
in your server type this exactly:  
```php
--auto .server=
SERVER INFO
--------------
prefix: {pref}
greet: {greet}
bye: {bye}
roles: {allroles}
channels: {channels}
--------------
```
Now when you type **.server** Echo will display your prefix, greet and bye message also the curent channel.  
  
  
### WHOAMI COMMAND
```php
--auto &whoami=
you: {/user}
commander: {ismaster}
channel: {chan}
roles: {listroles}
```
pretty neat huh? :)  
  
### WORD FILTER EXAMPLE:
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &fuck={del}{pm}{kick}You've been kicked for swearing.`  |
| If Typed  | The message gets deleted and echo will send a pm of the above message.  |
  
  
### GET ALERTS ON TRIGGERS
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &<@YOURIDHERE>={alert:YOURIDHERE}I have alerted Proxy!`  |
| If Typed  | Echo will private message you and let the user know.<br>You can get your id with `--getid @User`  |
  
  
### CUSTOM `--getid` COMMAND:
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &--grabid {params}={rawid}The user's ID: {params}`  |
| Use Command  | `--grabdid @User`  |
  
  
**{rawid}** is required along with **{params}** to display another users ID.  
  
### Build the `--meme` or `--jokes` command
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto --meme={meme}`  |
| Use Command  | `--meme`  |
  
  
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `auto --joke={joke}`  |
| Use Command  | `--joke`  |
  
  
### Build the `--cats` command in your server.
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto --cats={cats}`  |
| Use Command  | `--cats`  |
  
  
### Build the `--giphy` command in your server.
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &--giphy {params}={giphy}`<br>**(Does not require `{params}` key)**  |
| Use Command  | `--giphy keyword here`  |
  
  
### Build the `--giveme` command in your server.
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &--giveme {params}={role:{params}}{req:Owner}You've assumed the role **{params}**`  |
| Use Command  | `--giveme Role Name` the **{req}** key is requiring the user to have the role `Owner` to use!  |
  
  
### Build the `--boobs` and `--ass` commands
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto --ass={ass}`  |
| Use Command  | `--ass`  |
  
  
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto --boobs={boobs}`  |
| Use Command  | `--boobs`  |
  
  
### Set Warning for kick\ban [ARS]
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &fuck={del}{warn:2}{msg:You have been warned!}{kick}I have kicked {user} for swearing.`  |
| If Typed  | the above code will delete the user's message. Warn twice with "**You have been warned**"<br>and than kick the user if their warns exceed or equal to 2.  |
  
  
**Change the {kick} key to {ban}** if you want Echo to ban users.  
  
### MAKE AN ANNOUNCE COMMAND:
| Steps  | You Type  |
| :---:  | :---:  |
| Make Command  | `--auto &--announce {params}={redirect:CHANNELID}**ANNOUNCEMENT:** *{params}*`  |
| Use Command  | `--announce What's up!`  |
  
  
You can grab a channels id by typing `--channelid` in the channel.  
   
### League of Legends Emojis
```php
:score: :told you: :baby please: :yummy:
:gotcha: :no more: :hell yeah: :deal with it:
:love you: :ffs: :haha: :too hot:
:why: :sleep zzz: :oh my god:
:ouch: :cmon guys: :sleepy time:
:yeah ok: :hey ladies: :vengeance:
:happy birthday: :seriously: :peekaboo:
:omfg: :solotop: :jungle: :toplane:
:save a life:
More coming soon.
```
  **If the emoji is not at the beginning of your message and has a space  
  Replace with an underscore `_` so `:baby girl:` would be `:baby_girl:`**
  
### Twitch Emojis
```php
:seemsgood: :biblethump: :kappa: :frankerz:
:elegigiggle: :minglee: :feelsgoodman: :feelsbadman:
:pogchamp: :swiftrage: :rip: :gaben: :wutface:
```
check out [The Emoji Guide](https://github.com/proxikal/Echo/blob/master/README.md#emojis-guide) For the full list (In Progress)  
