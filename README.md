# cmd-password-generator
## Command line Program to create random passwords and store it in a protected .txt file.

##### Video demo
[Link to video](https://www.linkedin.com/posts/zeapherine-islary-a8055a174_developers-javascriptdevelopers-javascript-activity-6818977306950856704-rYsT)

### Installation


0. Clone the project.
0. Run `npm i`
0. `npm link`  -  ( makes the program global command )
0. `npm unlink`  - (it remove the program )

##### options

Usage: `passgen [options] `

type `passgen` to generate random password.

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


