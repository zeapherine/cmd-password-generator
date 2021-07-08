# cmd-password-generator
## Command line Program too create random passwords


### Installation


0. Clone the project.
0. Run npm i
0. npm link  -  ( makes the program global command )
0. npm unlink - ( remove the program )

##### options

Usage: passgen [options]


```
Simple Password Generator

Options:
  -V, --version                 output the version number
  -l, --length <number>         length of password (default: "8")
  -s, --save                    save password to passwords.txt
  -pwdf, --password-for <type>  Password for? , REQUIRED
  -nn, --no-numbers             remove numbers
  -ns, --no-symbols             remove symbols
  -h, --help                    display help for command


```