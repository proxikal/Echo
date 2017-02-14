# Table of References
| Link  | Information  |
| :--:  | :--:  |
| [xTech Labs Website](https://xtclabs.net)  | xTech Labs Official Website  |
| [Echo 2.0 Website](https://echo.xtclabs.net)  | Echo 2.0 Official Website  |
| [Echo Reddit](https://www.reddit.com/r/EchoDiscord/) | Official Echo Subreddit! |
| [AutoGo Website](https://autogo.xtclabs.net)  | AutoGo Official Website  |
| [Discord Server Manager](https://webm.xtclabs.net)   | Manage Echo & Your Server Online!  |
| [Echo Youtube Channel](https://www.youtube.com/channel/UC6C6Iq78tZ4Ud8wP4Hqnubw)   | Youtube Help Videos  |  
| [Echo R.P.G Game](https://discord.gg/dHzx2aa)  | An R.P.G Text based game coded with Echo!  |  
| [A.R.S Builder](https://builder.xtclabs.net/)  | Currently in Beta by: JurrijnP  |
| [Project Frostbyte](https://github.com/proxikal/Frostbyte) | Open Source Lightweight version of Echo anyone can contribute!  |  
  
# Easy Mode!
Is all of this too much? Just want the commands you see below with ease?  
We have a few files with some preset commands! All you have to do is..  
Step 1: Download one of the snippet files you want in [Easy Scripts Folder](https://github.com/proxikal/Echo/tree/master/EasyScripts)  
Step 2: Drag the file(s) you want into a channel Echo has permissions to read messages in.  
If all went well, you will see the new commands listed under the file you uploaded.  
And available for you to use!  
  
# Table of Contents
| Link  | Information  |
| :--:  | :--:  |
| [A.R.S Etiquette](https://github.com/proxikal/Echo/wiki/A.R.S-Etiquette)  | Learn how to properly format your A.R.S!  |
| [Discord Events](https://github.com/proxikal/Echo/wiki/A.R.S-Events)  | Learn how to link Echo to your Discord Events!  |
| [A.R.S Profiles](https://github.com/proxikal/Echo/wiki/A.R.S-Profiles)  | Learn how to have multiple A.R.S DB's  |
| [Echo 4 Devs](https://github.com/proxikal/Echo/wiki/Echo-for-Devs)  | Learn how to send your guild info to your websites!  |
| [Regex Triggers](https://github.com/proxikal/Echo/wiki/Regex-Triggers)  | Learn how to use Pure Regex with Echo!  |
| [Using If Statements](https://github.com/proxikal/Echo/wiki/If-Statements)  | Learn how to use If Statements with Echo.  |
| [Echo + Virus Total](https://github.com/proxikal/Echo/wiki/Echo-plus-VT)  | Learn how Echo can protect your Members.  |
| [A.R.S Profile locking](https://github.com/proxikal/Echo/wiki/Channel-Profiles)  | Learn how to lock A.R.S Profiles to channels.  |
| [A.R.S Error Reporting](https://github.com/proxikal/Echo/wiki/A.R.S-Error-Reporting)  | Learn how to reveal A.R.S Errors  |
| [A.R.S Functions](https://github.com/proxikal/EchoRepository)  | Learn how to simplify your A.R.S With Functions!  |
| [Dynamic Statements](https://github.com/proxikal/Echo/wiki/Dynamic-Statements) | More simple and dynamic statements! |   
  
You can grab a channels id by typing `.channelid` in the channel.  
Or enabling `Developer Mode` in your Discord **User Settings Panel**  
  
# Auto Response System **101**
> Here are some examples to help you along.
  
<b>You can use the {params} key in the trigger to catch their text!</b> 
```php
.auto &.giveme {params}={init}
{role:
   {params}
}{req:Owner}
{notreq:
   {/user} You're not the owner
}
You've assumed the role {params}
```
  
The example above `requires` you to have the role `Owner` and will give you  
whatever role you type (*As long as the role exists*) for example: `.giveme Staff`  
  
  
If you want to use regex you add the <b>&</b> key before the word Example Below:  
`.auto &word={init}The Response here!`    
  
Ok, now let's look at the <b>Response</b> section and all the keys you can use!  
<b>Keys</b> are surrounded by obraces. `{key}` Echo will replace these keys with data!  
Here's tons of examples:  
  You can view the list of A.R.S Keys at [Echo's Website!](https://echo.xtclabs.net)  
  
  
# A.R.S Examples.
You can view the [Public A.R.S Library](https://webm.xtclabs.net} Click Tools->A.R.S.  
  
### USING THE {PARAMS} KEY
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | .auto &.sayhi {params}={init}Your Message: {params}  |
| Use Command:  | `.sayhi hey guys!`  |
  
  
### PREVENT MULTI-LINE MESSAGES WITH REGEX!
```php
.auto &{:}(\n)={init}
use | YOUR-CHANNEL-ID
{if(ischannel):
    {del}Whoa {/user}.. Not in here
} (else) {
    {stop}
}
```
First you need to replace `YOUR-CHANNEL-ID` with whatever channel you want to prevent multi-line chat.  
Basically what this does is. If Echo senses any multi-line (where they hit shift+enter)  
He will remove their message and display a message letting them know.  
**Notice** This doesn't remove long messages in a single line. Only if they hit (shift+enter)  

### EMBEDS
You can also make the A.R.S. print out an entire embed.
An example of an embed containing all its options:
```php
{embed:
	{title:}
	//Insert the title here
	{type:rich}
	//This is always rich as discord does not have any other types
	{author|name:}
	//Insert the author name (={user}) here
	{author|icon:}
	//This can be used to display a little picture next to the author name
	{author|url:}
	{color:}
	//Insert a colour here (HEX-colors only)
	{thumb|url:}
	//Inserts a small picture in the top right of the embed, can be replaced with {usericon} or related
	{desc:}
	//Your entire description goes here, again {user}, {/user} and related can be used
	{footer|icon:}
	//An icon url goes here ({usericon} or related can also be used) This icon will be displayed at the bottom of the embed
	{footer|text:}
	//Text that should go alongside the {footer|icon:} goes here
}
```
  
### SERVER INFO COMMAND
Alright let's make a **"Server Info"** command!
We will be using an embed in this example.
  
in your server type this exactly:  
```php
.auto .server={init}
{embed:
    {title:Information for {guild|name}}
    {type:rich}
    {author|name:{owner|name}}
    {author|icon:{owner|avatar}}
    {author|url:{owner|avatar}}
    {color:
        {randlist:
             #ff0000,#00ff00,#ffffff,#4286f4,
             #f45642,#262525,#e2d626,#87e226,
             #26e2c0,#2633e2,#8126e2
        }
    }
    {thumb|url:{guild|icon}}
    {desc:
───────────────────────
× ID:                     {guild|id}
× Region:             {guild|region}
× OwnerID:        {owner|id}
× Discord Icon:  [Click to view Guild Icon]({guild|icon})
× Members:       {membercount}
× Channels:        {channelcount}
× Roles:               {rolecount}
───────────────────────
    }
    {footer|icon:https://xtclabs.net/img/favicon-new.png}
    {footer|text: Echo 2.0 A.R.S}
}
```
Now when you type `.server` Echo will display the server information.  
You can set it up to list all the channels, roles & the server prefix. all that stuff!  
![Server Example](https://github.com/proxikal/Echo/blob/master/server-example.png)
  
### WHOAMI COMMAND
```php
.auto .whoami={init}
{embed:
    {title:User Information for {guild|name}}
    {type:rich}
    {author|icon:{usericon}}
    {author|name:{/user}}
    {color:
        {randlist:
             #ff0000,#00ff00,#ffffff,#4286f4,
             #f45642,#262525,#e2d626,#87e226,
             #26e2c0,#2633e2,#8126e2
        }
    }
    {thumb|url:{guild|icon}}
    {desc:
Bot Master: *{ismaster}*
Discord Icon: [Click here for Icon]({usericon})
Discord ID: *{rawid}*
Roles: *{listroles}*
    }
    {footer|icon:https://xtclabs.net/img/favicon-new.png}
    {footer|text: Echo 2.0 A.R.S}
}
```
now just type `.whoami`
  
### Embeds with Multiple Fields!
```php
.auto .echo={init}
{embed:
    {type:rich}
        {color:
            {randlist:
                #4286f4,#ff0000,#00ff00,
                ##e8f442,#f49e42,#000000
            }
        }
    {image|url:https://xtclabs.net/img/EchoIcon.jpg}
    {image|width:250}
    {image|height:250}
    {field[0]|name:Echo}
    {field[0]|value:[Echo Official Website](https://echo.xtclabs.net "The Official website for Echo 2.0")}
    {field[0]|inline:true}
    {field[1]|name:Echo Help}
    {field[1]|value:[Echo Documentation](https://github.com/proxikal/Echo "Learn how to use Echo A.R.S Through some Examples.")}
    {field[1]|inline:true}
    {field[2]|name:AutoGo}
    {field[2]|value:[AutoGo Website!](https://autogo.xtclabs.net "AutoGo! A bot like Echo 1.x You run yourself!")}
    {field[2]|inline:true}
    {field[3]|name:Web Manager}
    {field[3]|value:[Discord Server Manager](https://webm.xtclabs.net "Manage Your discord server and Echo from the world wide web!")}
    {field[3]|inline:true}
    {field[4]|name:PHP Webhooks}
    {field[4]|value:[Github Page!](https://github.com/proxikal/discordphp-webhook "Use discord webhooks with ease using DiscordPHP-Webhooks")}
    {field[4]|inline:true}
    {field[5]|name:xTech Labs API}
    {field[5]|value:[View Website](https://api.xtclabs.net/ "xTech Labs offers free API endpoints like memes, jokes etc..")}
    {field[5]|inline:true}
    {footer|text:Requested by: {/user}.}
    {footer|icon:{usericon}}
}
```
now just type `.echo` 
You are allowed 10 fields. `field[0]` through `field[9]`  
  
### Adding Random responses and colors
> For now we've added a lazy way to use multiple `{randlist}` keys.  
However it's only limited to two `{randlist}` and `{randlist2}`  
this will change to allow for multiple randlists, here is an example  
```php
.auto .gift={init}
{embed:
    {title:Something Something Darkside..}
    {type:rich}
    {author|name:{/user}}
    {author|icon:{usericon}}
    {author|url:{usericon}}
    {color:
        {randlist:
             #ff0000,#00ff00,#ffffff,#4286f4,
             #f45642,#262525,#e2d626,#87e226,
             #26e2c0,#2633e2,#8126e2
        }
    }
    {thumb|url:{guild|icon}}
    {desc:
        {randlist2:
            This should be a response,
            Along with this!,
            and now some more,
            Two Step, One Jump!,
            Live long!
        }
    }
    {footer|icon:https://xtclabs.net/img/favicon-new.png}
    {footer|text: Echo 2.0 A.R.S}
}
```
Now when you type `.gift` you will get random responses.  
the more responses, the better!

## IF STATEMENTS
If statements are used to determine wether or not a requirement is met and they are a very powerful tool for all coders, Echo has an IF statement system as well! There are multiple types, lets sum them up shall we?
### General use
An if statement must contain three things, an "if-parameter", an "if-success-case" and an "if-fail-case". The if-parameter defines what will be checked, this depends on what type of if statement is being used. the if-success-case is basically a simple output that will be executed when the if statement succeeds, if it fails, the if-fail-case will be executed instead. You can use the {stop} key to make it do nothing.
An example:
```php
.auto .test={init}
use | IF-PARAMETER-HERE
{if(IF-TYPE-HERE):
    Success!
} (else) {
    Fail!
}
```
NOTE: If you want to use multiple if-parameters you must divide all parameters with ` | `
Example: use | param1 | param2 | param3
  
### If type: Channel
When using this type of if statement, the success case will be executed only when the statement is executed from one of the set channel ID's (You can obtain the channel id by typing: `.channelid` ). The type is named `ischannel`
An example:
```php
.auto .test={init}
use | YOUR-CHANNEL-ID-HERE | OPTIONAL-EXTRA-CHANNEL-ID-HERE
{if(ischannel):
    The command was executed in one of the set channels
} (else) {
    The command was not executed in one of the set channels
}
```
### If type: User
To use this you need to set one or multiple user ID's (obtained via right-clicking the user, then selecting "Copy ID"), the success case is executed when the user is one of the set users, otherwise the fail case is executed. Its name: `isuser`
An example:
```php
.auto .test={init}
use | USER-ID-HERE | OPTIONAL-EXTRA-USER-ID-HERE
{if(isuser):
    You are one of the set users
} (else) {
    You are not one of the set users
}
```
### If type: Role
The success case is executed if the user has one of the roles that match the set roles, to set roles you must use role names. This is casesensitive. The name: `hasrole`
An example:
```php
.auto .test={init}
use | ROLE-NAME-HERE | OPTIONAL-EXTRA-ROLE-NAME-HERE
{if(hasrole):
    You have one of the set roles!
} (else) {
    You don't have one of the set roles!
}
```
## Note:
There are a few more if types, you can find those [here](https://github.com/proxikal/Echo/wiki/If-Statements)

## Echo's A.R.S Is not a good way to filter out words.
There is a Rate Limiter Governing the A.R.S, So when someone spams `fuck` echo takes time to catch up.  
So Only use the below example if you really need to. Otherwise just use Echo's `WordFilter` command  
### WORD FILTER EXAMPLE:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &fuck={init}{del}{pm}{kick}You've been kicked for swearing.`  |
| If Typed  | The message gets deleted and echo will send a pm of the above message.  |
  
  
### GET ALERTS ON TRIGGERS
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &<@YOURIDHERE>={init}{alert:YOURIDHERE}I have alerted Proxy!`  |
| If Typed  | Echo will private message you and let the user know.<br>You can get your id with `.getid @User`  |
  
  
### CUSTOM `.getid` COMMAND:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.grabid {params}={init}{rawid}The user's ID: {params}`  |
| Use Command  | `.grabdid @User`  |
  
  
**{rawid}** is required along with **{params}** to display another users ID.  
  
### Build the `.meme` or `.jokes` command
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .meme={init}{meme}`  |
| Use Command  | `.meme`  |
  
  
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `auto .joke={init}{joke}`  |
| Use Command  | `.joke`  |
  
  
Alright that was fun, Now let's make a Sexy Meme & Jokes Command.
```
.auto .joke={init}
{embed:
    {title:Random Jokes}
    {url:https://api.xtclabs.net}
    {type:rich}
    {desc:
        {joke}
    }
    {color:
       {randlist:
          #4286f4,#ff0000,
          #00ff00,##e8f442,
          #f49e42,#000000
       }
    }
    {footer|text:
        Requested: {/user}
    }{footer|icon:
    {usericon}
    }
}
```

And now the Memes:
```
.auto .meme={init}
{embed:
    {title:Random Memes!}
    {url:https://api.xtclabs.net}
    {type:rich}
    {color:
        {randlist2:
            #ff0000,#00ff00,#ffffff,#4286f4,
            #f45642,#262525,#e2d626,#87e226,
            #26e2c0,#2633e2,#8126e2
        }
    }
    {image|url:
        {meme}
    }
    {image|width:250}
    {image|height:250}
    {footer|text:Requested: {/user}}
    {footer|icon:
        {usericon}
    }
}
```
As you can see i've added my personal jokes and memes command.  
These rules have extra features, like random colors and random titles!  
You can remove or configure anything you please.  


### Build the `.cats` command in your server.
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .cats={init}{cats}`  |
| Use Command  | `.cats`  |
  
  
### Build the `.giphy` command in your server.
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.giphy {params}={init}{giphy}`  |
| Use Command  | `.giphy keyword here`  |
**({giphy} Does not require `{params}` key in the response like most keys.)**  
Just make sure you've placed the `{params}` key in the trigger as shown above!  
  
  
### Build the `.giveme` command in your server.
```
.auto &.giveme {params}={init}
{role:
	{params}
}{req:Owner}
You've assumed the role **{params}**
```
**Important**: Make sure you add a `req` or `exc` key when dealing with the above.  
You `DO NOT` want everyone to have have access to this command.  
  
| Steps  | You Type  |
| :--:  | :--:  |
| Use Command  | `.giveme Role Name` |
  
  
### Build the `.boobs` and `.ass` commands
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .ass={init}{ass}`  |
| Use Command  | `.ass`  |
  
  
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .boobs={init}{boobs}`  |
| Use Command  | `.boobs`  |
  
  
### MAKE AN ANNOUNCE COMMAND:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.announce {params}={init}{redirect:CHANNELID}**ANNOUNCEMENT:** *{params}*`  |
| Use Command  | `.announce What's up!`  |
   
