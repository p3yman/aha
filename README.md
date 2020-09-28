# 💡 Aha!

`aha` is a simple CLI tool to save your awesome aha moments right where you live!

## Installation
You can install it globaly from npm:
```shell
$ npm install --global aha-moment
```
Now it's available using `aha` command.

## Usage
You have a small CRUD actions with this tool.

---

### Add
Using add you can create new aha moment in the local database.

You can use this quick create way:
```shell
$ aha add "What a great idea!"
```

Or you can just run `aha add` and create a new aha moment by answering some questions. Just enter a title and select a status and you are good to go.

![Screen Shot 2020-09-28 at 17 04 39](https://user-images.githubusercontent.com/2673262/94443120-7a6f0c00-01ad-11eb-8acb-068e1a967249.png)

### List
To see a list of saved moments, use `aha list` command.
![Screen Shot 2020-09-28 at 17 17 48](https://user-images.githubusercontent.com/2673262/94444023-8b6c4d00-01ae-11eb-8d3a-606e9b288442.png)

### Remove
To remove an aha moment, use `aha remove` command.

You can do it in a quick way:
```bash
$ aha remove 24
```

Which `24` is the moment's ID.

Or you can just run `aha remove` and choose from available moments.

![Screen Shot 2020-09-28 at 17 23 10](https://user-images.githubusercontent.com/2673262/94444719-4a286d00-01af-11eb-9196-6335e2e08acf.png)

In both ways, you should confirm the delete action. Default is no.


## TODO
- [x] list
- [x] add
- [x] show
- [ ] export
- [ ] import
- [x] remove
- [x] clear
- [ ] edit
- [ ] add-note
- [ ] remove-note
- [ ] clear-notes
