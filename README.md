# Diary
*Some sort of online diary anyone can edit without password, I guess.*

![Screenshot of the app](https://raw.githubusercontent.com/sam1902/diary/master/screenshot.png)

This project is just a quick JQuery/PHP/SQLite application that acts as an online diary which 
doesn't required you to remember any password and can be edited from anywhere in the world.

Of course it has to stay secret or be shared with a very limited amount of individuals or it
might be spammed, but that's the game. Anyway, if you want an online diary that works without the hassle of creating
one yourself, there it is.

Also, you cannot modified you post, so it's like writing in a real diary (with ink on paper), anything you say cannot be
erased. You can still edit the database itself but it's a pain really.

## Installation

Just clone this repo using:
```
$ git clone https://github.com/sam1902/diary
```
and host it on your favourite server.
Make sure you have the **SQLite plugin for PHP installed** and have enabled it (for PHP 5.3 and prior)

Finally, **give the correct permissions to the `saves` folder** so that your database can be edited:

```
$ chmod 777 /path/to/diary/saves;
$ chmod 777 /path/to/diary/saves/journal.db
```
Be sure to replace `/path/to/diary` to whatever suits your needs.

## Notes to devs

If the graphic looks doesn't suit you, you can still edit the CSS file. The whole application is really straightforward,
no complicated framework to master, just plain HTML/CSS/JQuery for the front-end and PHP/SQLite for the backend.
The database has only one table, `entry`, and in it two columns: `text` and `timestamp`. `text` is obviously the entry's
text itself and `timestamp` is the GMT timestamp at which the entry was posted. It is displayed on top of every entry so that
you know when you posted it.

This should resist most SQL injections due to the use of PDO prepared statements, and shouldn't fear the XSS injections thanks to
PHP's `htmlentities()` that converts symbols to their HTML equivalent such as `&` ==> `&amp;` so to avoid the good old `<script>alert("haxxor")</script>`

I know I shouldn't advise people to give full permissions to the `saves` folder but I'm unsure of the optimal permission and this works fine anyway.
