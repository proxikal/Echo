### xTech Labs Website
[https://xtclabs.net](https://xtclabs.net)  

### Echo Official Website:
[https://echo.xtclabs.net](https://echo.xtclabs.net)  

### AutoGo Official Website:
[https://autogo.xtclabs.net](https://autogo.xtclabs.net)  

### Discord Server Manager Website:
[https://webm.xtclabs.net](https://webm.xtclabs.net)  
   
   
## This page is being converted to the new Echo Documentation
*On Dec. 27th 2016*  
  
### We have added so many keys, please give us some time to document them.  
And remember you can view a list of command, keys at [Echo Official Website](https://echo.xtclabs.net/)  
  

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
.auto &.giveme {params}=
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
`.auto &word=The Response here!`  
Want to add a work like `ass` to the word filter? but don't want to catch `mass`?  
Add a space after the word. this will assure it only triggers on the word! Example Below:  
`.auto &ass =The Response here!`  
  
Ok, now let's look at the <b>Response</b> section and all the keys you can use!  
<b>Keys</b> are surrounded by obraces. `{key}` Echo will replace these keys with data!  
Here's tons of examples:  
  You can view the list of A.R.S Keys at [Echo's Website!](https://echo.xtclabs.net)  
  
  
# A.R.S Examples.
You can view the [Public A.R.S Library](https://webm.xtclabs.net} Click Tools->A.R.S.  
  
### USING THE {PARAMS} KEY
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | .auto &.sayhi {params}=Your Message: {params}  |
| Use Command:  | `.sayhi hey guys!`  |
  
  
### SERVER INFO COMMAND
Alright let's make a **"Server Info"** command    
  
in your server type this exactly:  
```php
.auto .server={embed:
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
Now when you type **.server** Echo will display the server information.  
You can set it up to list all the channels, the server prefix. all that stuff!
  
  
### WHOAMI COMMAND
```php
.auto .whoami=
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
pretty neat huh? :)  
  
### Using IF Statements with Echo.
The IF statements are very basic at the moment.  
However there are plans to make it more dynamic.  
Below we are going to use an if sstatement to block  
a command from the **#general** Channel.
```
.auto .boobs=
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
.auto .boobs=
{if:
	user==Proxy
}{boobs}
```
Alright! Now you understand the If statements.  
However, Make sure to keep checking back as this will change.  
  
### WORD FILTER EXAMPLE:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &fuck={del}{pm}{kick}You've been kicked for swearing.`  |
| If Typed  | The message gets deleted and echo will send a pm of the above message.  |
  
  
### GET ALERTS ON TRIGGERS
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &<@YOURIDHERE>={alert:YOURIDHERE}I have alerted Proxy!`  |
| If Typed  | Echo will private message you and let the user know.<br>You can get your id with `.getid @User`  |
  
  
### CUSTOM `.getid` COMMAND:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.grabid {params}={rawid}The user's ID: {params}`  |
| Use Command  | `.grabdid @User`  |
  
  
**{rawid}** is required along with **{params}** to display another users ID.  
  
### Build the `.meme` or `.jokes` command
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .meme={meme}`  |
| Use Command  | `.meme`  |
  
  
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `auto .joke={joke}`  |
| Use Command  | `.joke`  |
  
  
Alright that was fun, Now let's make a Sexy Meme & Jokes Command.
```
.auto .joke=
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
.auto .meme=
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
| Make Command  | `.auto .cats={cats}`  |
| Use Command  | `.cats`  |
  
  
### Build the `.giphy` command in your server.
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.giphy {params}={giphy}`<br>**(Does not require `{params}` key)**  |
| Use Command  | `.giphy keyword here`  |
  
  
### Build the `.giveme` command in your server.
```
.auto &.giveme {params}=
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
| Make Command  | `.auto .ass={ass}`  |
| Use Command  | `.ass`  |
  
  
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto .boobs={boobs}`  |
| Use Command  | `.boobs`  |
  
  
### MAKE AN ANNOUNCE COMMAND:
| Steps  | You Type  |
| :--:  | :--:  |
| Make Command  | `.auto &.announce {params}={redirect:CHANNELID}**ANNOUNCEMENT:** *{params}*`  |
| Use Command  | `.announce What's up!`  |
  
  
You can grab a channels id by typing `.channelid` in the channel.  
