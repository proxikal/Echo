# Need help?
You can visit our server and ask any questions: https://discord.gg/0pTKzt2BDInBOrxL <Br>
**__ISSUES:__** Make sure to give Echo the full permissions still having issues?  
Go into your server settings > Roles and Drag Echo [BETA] to the top. this fixes most problems.  
Also be sure he has Manage Roles permissions.
  **If the emoji is not at the beginning of your message and has a space  
  Replace with an underscore `:baby girl:` would be `:baby_girl:`**
  
## Want to donate?
We could always use any support to help keep our server up.  
right now we're running a small server. so all help is appreciated! <a href="https://www.paypal.me/EchoBot/5" target="_new">Donate to Echo Today!</a>  
  
## Index
[Word Filter Examples](https://github.com/proxikal/Echo/blob/master/README.md#some-other-examples)  
[Meme and Joke Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---meme-or---jokes-command)  
[Cats Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---cats-command-in-your-server)  
[Giphy Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---giphy-command-in-your-server)  
[Giveme Command](https://github.com/proxikal/Echo/blob/master/README.md#build-the---giveme-command-in-your-server)  
[NSFW Commands](https://github.com/proxikal/Echo/blob/master/README.md#build-the-nsfw-commands)  
[Kick\Ban Warning](https://github.com/proxikal/Echo/blob/master/README.md#set-warning-for-kickban)  
[Emoji Guide](https://github.com/proxikal/Echo/blob/master/README.md#emojis-guide)  
  
  
  
### Echo's commands
| Command  | Info  | Usage  | Permissions  |
| :---: | :---: | :---: | :---: |
| help  | Displays a list of Echo's commands.  | --help  | Everyone  |
| addmaster  | Gives someone access to all mod commands!  | --addmaster @User  | Commanders  |
| greet  | Says the message when someone joins<br>Use `{pm}` to pm the greet. [more]  | --greet Message  | Commanders  |
| bye  | Says the message when someone leaves  | --bye Message  | Commanders  |
| denylinks  | Turns the AntiLinks system on.  | --denylinks  | Commanders  |
| allowlinks  | Turns the AntiLinks system off  | --allowlinks  | Commanders  |
| prefix  | Changes Echo's prefix from --  | --setprefix +  | Commanders  |
| autorole  | Auto roles someone when they join.<br>For silent add `-s` before role name.  | --autorole Role Name  | Commanders  |
| invites  | Grabs a list of invites for the channel.  | --invites  | Everyone?  |
| kick  | Kicks non-commanders from the server.  | --kick @User  |  Commanders  |
| ban  | Bans non-commanders from the servers.  | --ban @User  | Commanders  |
| giveme  | You need to build this in the A.R.S [more]  | {role:Role Name}  | Custom  |
| setpunish  | Set's the punishment for AntiLink and --warn  | --setpunish kick\ban\warn  | Commanders  |
| meme  | You need to build this in the A.R.S [more]  | {meme}  | Custom  |
| joke  | You need to build this in the A.R.S [more]  | {joke}  | Custom  |
| give  | Gives someone a role.  | --give @User Role Name  | Commanders  |
| take  | Takes a role away from someone.  | --take @User Role Name  | Commanders  |
| mute  | Mutes a user in your channel.  | --mute @User  | Commanders  |
| unmute  | Unmutes a user in your channel.  | --unmute @User  | Commanders  |
| rolecolor  | Changes role color from hex.  | --rolecolor #000000 Role Name  | Commanders  |
| giphy  | You need to build this in the A.R.S [more]  | {giphy}  | Custom  |
| cats  | You need to build this in the A.R.S [more]  | {cats}  | Custom  |
| auto  | Adds a trigger to your A.R.S Database.  | --auto Hello=Hey {user}!  | Commanders  |
| delauto  | Deletes an A.R.S Trigger.  | --delauto triggername  | Commanders  |
| viewauto  | Views your A.R.S Files in chat.  | --viewauto  | Commanders  |
| wipeauto  | Wipes your A.R.S File completely.  | --wipeauto  | Commanders  |
| botrole  | Auto role bots when they join.<br>for silent add `-s` before the role name.  | --botrole Role Name  | Commanders  |
| mkchan  | Creates a new channel in your server. Text or Voice.  | --mkchan chan-name text  | Commanders  |
| locateip  | Geo Location for an IP Address or Domain.  | --locateip IP or .com  | Everyone  |
| channelid  | Grabs the current channels ID.  | --channelid  | Everyone  |
| getid  | Grabs a user's ID.  | --getid @User  | Everyone  |
| nsfw  | Enables the nudity commands in current channel.<br>You have to do this for every channel.  | --nsfw true  | Commanders  |
| grabars  | Echo will send your A.R.S File to your pm via file attachment.  | --grabars  | Commanders  |
| putars  | Imports A.R.S from local to Echo! needs a direct link to your json file!  | --putars directlink  | Commanders  |
| addrole  | Creates a new role in your server.  | --addrole Role Name  | Commanders  |
| delrole  | Deletes the role from your server.  | --delrole Role Name  | Commanders  |
| setwarning  | Set's the max amounts of warns before kick\ban<br>works off of `--setpunish`  | --setwarning 3  | Commanders  |
| warn  | Adds a warning point to a user. (will kick\ban non-commanders).  | --warn @User  | Commanders  |
| listwarns  | Lists everyone who has a warning. or nothing if empty!  | --listwarns  | Commanders  |
| delwarn  | Deletes the users warnings.  | --delwarn @User  | Commanders  |
| teemo  | Creates a custom teemo banner from your text.  | --temo Text=Text{br}Text  | Everyone  |
| vayne  | Creates a custom vayne banner from your text.  | --vayne Text=Text{br}Text  | Everyone
| ekko  | Creates a custom Ekko banner from your text.  | --ekko Text=Text{br}Text  | Everyone  |
| zed  | Creates a custom Zed banner from your text.  | --zed Text=Text{br}Text  | Everyone  |
| cute  | Displays cute Cats \ Dogs \ Babies and more.  | --cute  | Everyone  |
| cars  | Displays random cars!  | --cars  | Everyone  |
| trucks  | Displays random trucks!  | --trucks  | Everyone  |
| sky  | Displays random sky images!  | --sky  | Everyone  |
| space  | Displays random space images!  | --space  | Everyone  |
| lesbian  | Displays random NSFW Images!  | --lesbain  | Everyone  |
| twink  | Displays random NSFW Images!  | --twink  | Everyone  |
| upskirt  | Displays random NSFW Images!  | --upskirts  | Everyone  |
| fatgirls  | Displays random NSFW Images!  | --fatgirls  | Everyone  |
| celebs  | Displays random NSFW Images!  | --celebs  | Everyone  |
  
  
# Auto Response System Keys
> <b>You no longer need to initiate by typing</b> `--auto`  
you can just start adding keys!  
  
Ok first let's look at the trigger section.  
You want to set this to whatever word/sentence you want Echo to respond to.  
  
  
<b>NEW: You can use the {params} key in the trigger to catch their text!</b>  
`--auto &giveme {params}={role:{params}}{req:Owner}You've assumed the role {params}`  
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
```php
{pm}                // Private messages the response instead of in the server.
{user}              // Mentions the users name.
{/user}             // Just says the users name (without mention)
{del}               // deletes the users message.
{kick}              // Kicks the user. (Won't kick bot commanders or the owner)
{ban}               // Bans the user. (Won't ban bot commanders or the owner)
{role:Role Name}    // Gives the user a specific role.
{exc:Role Name}     // Excludes One or more roles from a trigger. {exc:Role1,Role2,Role3}
{alert:YOURID}      // Alerts one or more people via pm. to get id: --getid @User
{chan}              // Says the current channel name.
{pref}              // Says Echo's current prefix.
{greet}             // Says your current greet message if set.
{bye}               // Says your current bye message if set.
{ismaster}          // True or False if the user is a Bot Commander.
{listroles}         // lists the users roles.
{allroles}          // lists all roles in your server.
{joined}            // shows the date and time when someone joined your server.
{channels}          // lists all channels in your server.
{meme}              // shows a random meme.
{joke}              // shows a random joke.
{params}            // catches the users text. REQUIRES: {params} key in the trigger as well!
{req:Role Name}     // Requires the user to have the role to use the trigger.
{ass}               // shows random images of asses.
{boobs}             // shows random images of boobs.
{warn:number}       // warns x amount of times before kicking\banning: only works with {ban} or {kick}
{msg:warn msg}      // only works with {warn} key: The warning message before Echo kicks\Bans.
{getid}             // grabs the users ID.
```
  
Will update constantly!
  
### Some cool stuff!
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
  
  
Let's make a **whoami?** command  
```php
--auto &whoami=
you: {/user}
commander: {ismaster}
channel: {chan}
roles: {listroles}
```
pretty neat huh? :)  
  
### Some other examples:

Let's filter the word `fuck` and have Echo delete the msg, pm the user and than kick them.  
We're going to exclude 3 roles `Staff` `Owner` and `Bots` for this example  
```php
--auto &fuck={del}{pm}{kick}You've been kicked for swearing.{exc:Staff,Owner,Bots}
```
  
Let's have Echo PM you everytime someone uses your trigger.  
in this example we'll use @Proxy as the trigger.  
```php
--auto &<@146046383726657536>={alert:146046383726657536}I have alerted proxy that you need help.
```
You can either get your id with `--getid @User` or you can add the @Proxy first, and than add the & symbol after.  
  
Some people want to make their own `--getid` command or just collect someones Raw ID  
```php
--auto &grabid {params}={rawid}The user's ID: {params}
```
**{rawid}** is required along with **{params}** to display another users ID.  
  
### Build the `--meme` or `--jokes` command
```php
--auto --meme={meme}
```
  
```php
--auto --joke={joke}
```
  
### Build the `--cats` command in your server.
```php
--auto --cats={cats}
```

### Build the `--giphy` command in your server.
```php
--auto &--giphy {params}={giphy}
```
let's explain the code above a little. as you see the new `{params}` key  
you can add the `{params}` key to catch text. and than you could use the key in the response  
to make echo say their text back. **this is not required for the {giphy} key**  

### Build the `--giveme` command in your server.
```php
--auto &--giveme {params}={role:{params}}{req:Owner}You've assumed the role **{params}**
```
the above code gives you any role you type. requires you to have the role `Owner`  
example of above: `--giveme Staff` will give you the role `Staff`  

### Build the NSFW commands
```php
--auto --ass={ass}
```
  
```php
--auto --boobs={boobs}
```
  
### Set Warning for kick\ban [ARS]
```php
--auto &fuck={del}{warn:2}{msg:You have been warned!}{kick}I have kicked {user} for swearing.
```
the above code will delete the user's message. Warn twice with "**You have been warned**"  
and than kick the user if their warns exceed or equal to 2.  
You can change the **{kick}** key to the **{ban}** key if you want.
  
### Emojis Guide
<img src="https://raw.githubusercontent.com/proxikal/Echo/master/emojis1.png">  
<img src="https://raw.githubusercontent.com/proxikal/Echo/master/emojis2.png">  
<img src="https://raw.githubusercontent.com/proxikal/Echo/master/emojis3.png">  
<img src="https://raw.githubusercontent.com/proxikal/Echo/master/emojis4.png">
More updated daily!

### Set Warning for kick\ban [COMMAND]
```php
--setwarning 3
```
and than we do
```php
--setpunish kick
```
alright. Now we can warn people.
```php
--warn @User
```
  
### Both Warning systems work off the same DB.
  
  
### Admin\Staff Emojis
```php
:ripakiara: :ripdoorstop: :ripedible:
:ripproxy: :ripkenson:
```
   
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
  
### Submit your own emoji!
Join our server [Click Here!](https://discord.gg/0pTKzt2BDInBOrxL) Private Message Proxy  
the emoji has to be `transparent` `.png` extension only. and `100x100` pixels in size.  
These images will be seen by everyone. So no NSFW content, nothing vulgar.  
Pm me the name you want. No ascii characters.  
acceptable names: `:yournamehere:` or `:your name here:`, `:your-name-here:`, `:your_name_here:`  
**__HINT:__** make sure discord doesn't have an emoji with your name. or i'll shift the naming.  
  
