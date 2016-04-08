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
  <li>{user}</li>
  <li>{/user}</li>
  <li>{kick}</li>
  <li>{pm}</li>
  <li>{pm=USERID}</li>
  <li>{pm=USERID,USERID,USERID}</li>
  <li>{pref}</li>
  <li>{rand1}</li>
  <li>{meme1}</li>
</ul>

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
if you add {pm} at the beginning of the response. it will message the user the response instead of in server.<br>
<br>
<b>{pm=USERID}</b>:<br>
You can have Echo private message up to three people to "Alert" you when someone says the trigger word.<br>
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
<img src="https://github.com/proxikal/Echo/blob/master/word_filter_kick_howto.PNG">
<br>
<br>
# How to make a `--joke` or `--meme`.
First type `start::`<br>
Now for a trigger type `--joke` or `--meme` whatever you want to add.<br>
Now in his response type `{rand1}` for joke. and `{meme1}` for a random meme!<br>
<br>
Now you have made the joke or meme command. enjoy!
