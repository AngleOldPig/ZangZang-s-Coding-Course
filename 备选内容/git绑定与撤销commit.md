## 5. 使用 Git 撤销 commit

<br/>

<br/>

随着我们在 Github 上提交的修改越来越多，难免会出现疏漏，需要我们手动撤销 commit，常见有以下三种情况：

1. push后发现细小 bug，更正过于轻微，原则上不值得一次 commit
2. 未能事先规划好 branch，导致将开发 commit 错误 push 进 master branch
3. 各种各样神奇操作导致 pull request 无法 merge

那么我们就需要使用到传说中的 git bash 来帮我们实现撤销操作。

<br/>

### 5.1 Git 安装

<br/>

**[Git 下载地址](https://git-scm.com/)** 

按照系统类型下载，一般 Windows 点击下载那个最新版就好。

运行安装程序不断下一步即可完成安装。

<br/>

### 5.2 Git 绑定 ssh

<br/>

完成 Git 安装后我们找到刚才的安装目录，可以发现这么一些文件：

<img height="300" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/Git全家福.png">

其中，

```git-bash.exe``` 是使用 Linux 命令操作 Git 的工具，

```git-cmd.exe``` 是使用 Windows 命令操作 Git 的工具。

作为老司机我推荐使用 git bash 来操作，原因有两点：

1. Linux指令相对容易且方便
2. git bash用户占比极大，未来遇到其他问题可以轻易在网上找到解答

<br/>

那么我们现在双击打开 git bash，输入指令创建一个本地ssh key。

```$ssh-keygen -t rsa -C "Github注册邮箱地址"```

这里要在引号里填上你的 Github 注册邮箱地址

比如我的注册邮箱是 ```446120447@qq.com```

那我要输入的指令就是

```$ssh-keygen -t rsa -C "446120447@qq.com"```

后面的操作我们默认回车就可以了，完成时如下图：

<img height="400" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/ssh key.png">

<br/>

我对这里的操作和信息简单讲解一下。

```Enter file in which to save the key``` 这个操作是指定存放密码的文件，我们直接回车的话就可以存放进默认地址，方便未来程序和我们自己去找到它。

```Enter passphrase``` 这是指定密码词组，推荐直接回车，默认不设置密码。进阶玩家如果要设置密码词组的话，可以在这一步进行输入，以回车结束，输入时虽然屏幕上不显示，但输入的每个按键包括空格都会被记录下来。

```Ener same passphrase``` 确认密码，将上一步输入的密码词组再输入一遍，以免之前手误设置错了。

```Your identification``` 和 ```Your public key``` 后面分别提示了私钥、公钥密码文件保存的地址。私钥和公钥的区别我们将在后面的课程里详细讲解，现在我们只需要记住，公钥在一些地方可以复制出去验证我们身份用，而私钥是千万不可以让别人知道的。

```The key fingerprint``` 和 ```The key's randomart image``` 是你的密码加密后的验证信息，并不是真正的密码，别紧张。真正的密码在密码文件中记录了。

<br/>

之后我们根据 git bash 中提示的公钥文件地址找到 ```id_rsa.pub``` 文件

<img height="160" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/id_rsa.png">

这个 ```.pub``` 并不是 Office Publisher 的后缀，而是 public key 的意思，所以我们需要用记事本来打开它，将一长串的公钥复制下来。这个公钥由 ssh-rsa 开头，由你注册邮箱的地址结尾，全部复制下来。

<br/>

然后让我们回到 Github 网页上来，右上角点击头像，并在出现的菜单中点击 Settings

<img height="400" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/GitHub Settings.png">

然后在新页面的左侧点击SSH and GPG keys，在右侧绿色按钮 new SSH key 添加新密钥

<img height="360" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/SSH and GPG keys.png">

在Title栏填写一个提示信息，可以随便写。

在Key栏粘贴刚才复制的公钥，就是那个从 ssh-rsa 开头，到你注册邮箱的地址结尾的很长的一串字符。

填写完点击 Add SSH key 绿色按钮保存信息。

<br/>

之后我们就可以回到 git bash 里来验证一下成果，看看软件是不是能通过 SSH Key 自动连接到 github。

在 git bash 里输入指令：

```$ ssh -T git@github.com```

如果之前设置过登陆密码的话需要输入密码。

<img height="140" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/git bash登陆.png">

如果你的屏幕上出现了和我类似的一段话，说明你的绑定成功了，接下来我们将着手实现撤销操作。

<br/>

### 5.3 撤销 commit

<br/>

首先，GitHub 里每次操作都需要记录用户名和邮箱，我们在首次使用 git bash 进行操作前需要设置我们在 GitHub 中要显示的信息。

分别执行以下两条指令：

```$ git config --global user.name "AngleOldPig"```

```$ git config --global user.email "446120447@qq.com"```

引号里填写的用户名和邮箱请改成你自己的。

<img height="160" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/git global user填写.png">

<br/>

设置完我们来到 Github 打开我们需要撤销的那个项目 repo，点击 commits 查看所有提交记录。

提交记录按照时间线进行了排列，每一条提交的右侧都有一个独立的编号。

找到你想要还原到的那次提交，点击那次提交编号左边的小剪贴板图标，系统就将这次提交的完整编号复制下来了。

<img height="160" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/Github commits.png">

<br/>

之后我们在本地打开需要进行撤销操作的文件夹，在空白处点击鼠标右键，选择 Git Bash Here，以当前目录打开 git bash。

<img height="360" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/Git Bash Here.png">

<br/>

    这里说句题外话，一般我们需要进行撤销操作的文件夹，本来就是进行过 commit 和 push 操作了，

    文件夹里都会有一个隐藏的 .git 文件夹，它对我们的更改进行过记录。

    如果是新项目没有上传过 GitHub 也不是从 GitHub 上克隆来的话，
    
    就需要在 git bash 里运行指令来创建它：

    $ git init

    并且要将文件添加进仓库提交上传

    $ git add .          这个点指代当前目录

    $ git commit -m "备注"      这里的备注可以自己更改

<br/>

下面我们用当前目录打开的 git bash 输入撤销指令：

```$ git reset --soft 提交编号```

这里的提交编号就是上一步我们在 GitHub 网站上复制下来的那个，将它复制进去运行指令就可以把项目代码还原到编号那次提交时的状态。

这里的参数 soft 是指只更改网站上托管的代码状态，本地硬盘文件夹里的代码不会变，以方便开发人员做适当的修改之后重新提交。

而这个参数也可以选择 hard，运行后会把网上托管的代码，连同本地文件夹里的代码文件一起恢复到之前那次提交时的状态。如果后续的更改中有重要的内容，则需要在运行指令前复制备份到其他目录中。

<br/>

撤销后我们还需要强制提交当前版本号，以撤销多出来的版本号，同步当前文件夹版本号和网上仓库里的版本号，运行指令：

```$ git push origin master --force```

这里的 force 参数必须要带，不然就提示这次 push 被拒绝了。

<br/>

至此我们的线上 repo 里的代码就完成了撤销，同时如果后续再有新的修改，还可以想往常那样提交和 push 了。

<br/>
