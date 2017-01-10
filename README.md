# Table of References
| Link  | Information  |
| :--:  | :--:  |
| [xTech Labs Website](https://xtclabs.net)  | xTech Labs Official Website  |
| [Echo 2.0 Website Website](https://echo.xtclabs.net)  | Echo 2.0 Official Website  |
| [AutoGo Website](https://autogo.xtclabs.net)  | AutoGo Official Website  |
| [Discord Server Manager](https://webm.xtclabs.net)   | Closed Beta (Will be back soon!)  |
| [Echo Youtube Channel](https://www.youtube.com/channel/UC6C6Iq78tZ4Ud8wP4Hqnubw)   | Youtube Help Videos  |  
  
  
### We have added so many keys, please give us some time to document them.  
And remember you can view a list of command, keys at [Echo Official Website](https://echo.xtclabs.net/)  
  

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
Want to add a work like `ass` to the word filter? but don't want to catch `mass`?  
Add a space after the word. this will assure it only triggers on the word! Example Below:  
`.auto &ass ={init}The Response here!`  
  
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
  
  
### SERVER INFO COMMAND
Alright let's make a **"Server Info"** command    
  
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
  
### Restricting Boobs & Ass command to channel(s)
```php
.auto .boobs={init}
use | YOUR-CHANNEL-ID
{if(ischannel):
    {boobs}
} (else) {
    {stop}
}
```
Basically what we're doing above is..  
People will be able to use **.boobs** in any channel.  
you choose. You need to replace `YOUR-CHANNEL-ID` with the channel  
you want to allow the boobs command in. You can also add multiple channels.  
`use | CHANNELID | CHANNELID`  
  
Alright now let's do the same but for `{ass}` key! 
```php
.auto .ass={init}
use | YOUR-CHANNEL-ID
{if(ischannel):
    {ass}
} (else) {
    {stop}
}
```
  
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
   
