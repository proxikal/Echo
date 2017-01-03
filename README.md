### xTech Labs Website
[https://xtclabs.net](https://xtclabs.net)  

### Echo Official Website:
[https://echo.xtclabs.net](https://echo.xtclabs.net)  

### AutoGo Official Website:
[https://autogo.xtclabs.net](https://autogo.xtclabs.net)  

### Discord Server Manager Website:
[https://webm.xtclabs.net](https://webm.xtclabs.net)  
   
### Echo for Beginners:
[https://www.youtube.com/channel/UC6C6Iq78tZ4Ud8wP4Hqnubw](https://www.youtube.com/channel/UC6C6Iq78tZ4Ud8wP4Hqnubw)  
   
   
## This page is being converted to the new Echo Documentation
*On Dec. 27th 2016*  
  
### We have added so many keys, please give us some time to document them.  
And remember you can view a list of command, keys at [Echo Official Website](https://echo.xtclabs.net/)  
  

# Echo + Pure Regex!
Alright everyone! Something that was widely requested in Echo **1.x** Is here!  
Echo can parse and (for now) lightly manipulate content based off pure Regex!  
  
First we need to introduce you to a new identifier in the trigger.  
`{:}` identifier is used to let echo know your trigger will be **Pure Regex**  
However, you still need to add the `&` trigger before hand. Let's check out the example below:  
```php
.auto &{:}(a{3})={init}
Hey {/user} you said aaa
```
Notice how we keep the Identifier `&` before the `{:}` this is important.  
  
This time we are going to detect some special characters and than have echo replace them.  
```
.auto &{:}[^][.,_'0-9a-zA-Z -]={init}
{%replace|with:TEST}
```
For now the manipulation is basic. But this will change as the system grows!  
But what we're doing is having Echo detect all the special characters  
like `~!@#$%^&*()+` however he ignores a few as well. `_[],.space`  
And than he will post a message replacing each char with `TEST`  
  
If you're newer to regex there are a few websites that can push you along.  
[Regex101.com](https://regex101.com/)  
  
  
# Introducing the new If Statments!
Echo now has the power to use (somewhat) comples if statements!  
Before we start I want to make sure you understand `use |`  
**use |** is a way to define what your if statement is looking for.  
Here's a little example. we're going to use my `Discord ID`

```php
use | 146046383726657536
```
Now you can also define multiple users,roles,channels.  
However **you can't mix defines**. meaning you can't have this  
```php
use | USERID | CHANNELID | Role Name
```
The above example will not work, when you're using an if statement  
You're defining the statement itself with `(isuser)` or `(ischannel)`, `(hasrole)`  
So you need to define the proper IDS with the Statement.  

**HasRole** When you're defining a role don't worry, you don't need the id.  
Instead it's the **Case Sensitive** name. Example below:
```php
use | Admin
```
And you can check as many roles as you need example below:
```php
use | Admin | Owner | Developers
```
So if **Bob** Has `Admin` and **Tom** Does __not__, However **Tom** Has `Developers` role.
Echo will respond with the response. If **Bob** and **Tom** Has neither, echo will not respond.  

### If Statement - Restrict command to User(s)
```php
.auto .test2={init}
use | 146046383726657536
{if(isuser):
    {/user} can use this command!
} (else) {
    {/user} doesn't have access to this command.
}
```
Make sure to __Read above__ to learn how to define multiple users.  
  
### If Statement - Restrict command to Channel(s)
```php
.auto .test={init}
use | 265348251266449409
{if(ischannel):
    This command will work!
} (else) {
    {/user} this command is restricted from this channel.
}
```
  
### If Statement - Restrict command to Role(s)
```php
.auto .test3={init}
use | Admin
{if(hasrole):
    {/user} has the role Admin
} (else) {
    {/user} doesn't have the role Admin
}
```
  
  
# Echo + Virus Total!
> Protect your members!  
  
Do you want a safe place to post links? Not have to worry about malicious activity?  
xTech Labs Introduces `Echo + Virus Total` Initiative.  
We're on a mission, To keep your Discord Information where it belongs. With you and ONLY you!  

### Step 1: Links!
What Echo can do is delete every `unknown` link and than use Virus Total to scan.  
If the link comes back safe, Echo will repost the URL and the original Author.  
Echo in return adds the `safe url` to his cache system.  
However if your link is a short url, it will remain in his cache for 1 week.  
And than the link will be considered `unknown` once again.  
Ok let me show you how to make this system.  
 
```
.auto &http://={init}
{checkurl:
	{/user} Please wait while we inspect your link..
}{whitelist:
	https://yoursite.com,
	https://site2.com
}
```
What we're telling echo to do here is: Check every message that has an `http://` in the Content.  
And than scan the URL using Virus Total!  
  
   
# Did you know?
You can have Echo link a trigger for Events! For example, if someone joins  
or leaves, updates. Channel updates. All of it!
  
[View Echo A.R.S Events](https://github.com/proxikal/Echo/wiki/A.R.S-Events)  

# Are you A Developer?
### Echo can send your guild object, channels, roles & members to any site!
That's right, you can have a full fledged members list on your page.  
Along with roles, channels. You could basically create your own manager.  
And keep it 100% updated using Echos A.R.S System and the **{Events}** Keys.  
  
[View Echo for Devs](https://github.com/proxikal/Echo/wiki/Echo-for-Devs)  

# Multiple A.R.S Profiles & .grabars!
We've made it so you can store multiple A.R.S Profiles  
And than load, save at any time.  
  
[View Echo A.R.S Profiles](https://github.com/proxikal/Echo/wiki/A.R.S-Profiles)  
  
# Auto Response System **101**
  
[View Echo A.R.S Etiquette](https://github.com/proxikal/Echo/wiki/A.R.S-Etiquette)  
  
  
<b>You can use the {params} key in the trigger to catch their text!</b> 
```
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
```
.auto &{:}(\n)={init}
{if:channel==echo-test}
{del}Whoa {/user}.. Not in here
```
First you need to replace `echo-test` with whatever channel you want to prevent multi-line chat.  
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
```
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
  
### Using IF Statements with Echo.
The IF statements are very basic at the moment.  
However there are plans to make it more dynamic.  
Below we are going to use an if sstatement to block  
a command from the **#general** Channel.
```
.auto .boobs={init}
{if:
	channel!=general
}{boobs}
```
Basically what we're doing above is..  
People will be able to use **.boobs** in any channel.  
Except for #general channel.  
  
Alright now let's do the same but for a user.  
Let's make it so No One BUT **Proxy** Can use a command.
```
.auto .boobs={init}
{if:
	user==Proxy
}{boobs}
```
Alright! Now you understand the If statements.  
However, Make sure to keep checking back as this will change.  
  
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
    {title:Random Fucking Jokes}
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
    {title:
        {randlist:
            Here Bitch!,Nom Nom Nom,
            Oh Look at you!,Noob Alert,
            Wank-o-Meter,Take a cold Shower!
            Douche Alert,The King is here!
        }
    }
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
| Make Command  | `.auto &.giphy {params}={init}{giphy}`<br>**(Does not require `{params}` key)**  |
| Use Command  | `.giphy keyword here`  |
  
  
### Build the `.giveme` command in your server.
```
.auto &.giveme {params}={init}
{role:
	{params}
}{req:Owner}
You've assumed the role **{params}**
```
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
  
  
You can grab a channels id by typing `.channelid` in the channel.  
