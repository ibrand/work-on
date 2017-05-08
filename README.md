# Work On Script

Context establishing node script for opening up a workspace for a project.

### Params for the config
`path` - The path that the script uses to locate the project folder

`sync` - Any commands that you want to run and then have the program sleep afterwards. I know this is a little hacky, but it works for short processes and is pretty readable.

`links` - Any web links that are used as reference material for the project that should open as part of establishing your project workspace.
_ex:_ Maybe I'm writing code in NodeJS and always want a certain Node tutorial open when I do, I would put that link here.

`async` - Any commands that can be run asynchronously (like opening sublime on a folder for example)

### Other useful info
This line: `sync: ['open -n https://']` exists just to open a window in a default browser. It doesn't matter what url is used which is why I've just stubbed it out as `https://`.

### Wishlist

This script currently doesn't `cd` to the working directory which is a bummer but as far as I can tell `exec` doesn't allow you to do that since it spawns a subshell. It'd be cool to figure out a workaround for that.