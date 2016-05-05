# Need help?
You can visit our server and ask any questions: https://discord.gg/0pTKzt2BDInBOrxL <Br>
<Br>
# Echo's commands

<pre>
--addmaster, --delmaster, --autorole
--bye, --getid, --rolecolor
--greet, --prefix, --ban
--kick, --give, --giveme
--take, --giphy, --auto
--delauto --viewauto, --wipeauto
--mute, --unmute, --locateip
--cats, --allowlinks, --denylinks
--setpunish, --channelid, --botrole
--mkchan, --invites, --mkinvite
--allowauto
</pre>
  
<pre>
rolecolor: Example: --rolecolor #FF0000 Role Name<br>
bye: Example: --bye {user} has left the server<br>
autorole Example: --autorole Role Name auto assigns role to new members.<br>
autorole (<b>Silent:</b>) --autorole -s Role Name auto assigns a role to a new member silently.<br>
botrole Example: --botrole Role Name auto assigns a role to new bot accounts that join your server.<br>
botrole (<b>Silent:</b>) --botrole -s Role Name auto assigns roles to new bots silently.<br>
greet Example: --greet Welcome {user} if you need any help ask Proxy! you can use {/user} for non-mentions.<br>
give Example: --give @user Role Name<br>
take Example: --take @user Role Name<br>
giveme Example: --giveme Role Name<br>
auto Creates your auto response file. after your ars file is built. you type: --auto trigger=response<br>
allowauto - true or false (true: bot commanders can add\edit your A.R.S)
</pre>

# Auto Response System Keys
> this is basic at the moment. Will be updating the system every day!  
  
Ok first let's look at the trigger section.  
You want to set this to whatever word/sentence you want Echo to respond to.  
<b>You can't use keys in the trigger. Only the response!</b>  
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
```
  
Will add more every day!
  
# Some cool stuff!
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
  
# Some other examples:

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

# Build the `--meme` or `--jokes` command
```php
--auto --meme={meme}
```
  
```php
--auto --joke={joke}
```
  
# Build the `--cats` command in your server.
```php
--auto --cats={cats}
```

# Build the `--giphy` command in your server.
```php
--auto &--giphy {params}={giphy}
```
let's explain the code above a little. as you see the new `{params}` key  
you can add the `{params}` key to catch text. and than you could use the key in the response  
to make echo say their text back. **this is not required for the {giphy} key**  

# Build the `--giveme` command in your server.
```php
--auto &--giveme {params}={role:{params}}{req:Owner}You've assumed the role **{params}**
```
the above code gives you any role you type. requires you to have the role `Owner`  
example of above: `--giveme Staff` will give you the role `Staff`  
