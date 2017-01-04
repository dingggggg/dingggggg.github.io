# 1.gitlab简介

gitlab是一个用于仓库管理系统的开源项目，使用git作为代码管理工具，并在此基础上搭建起来的web服务。

可通过Web界面进行访问公开的或者私人项目。

它拥有与Github类似的功能，能够浏览源代码，管理缺陷和注释。

可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。

团队成员可以利用内置的简单聊天程序(Wall)进行交流。

它还提供一个代码片段收集功能可以轻松实现代码复用，下载安装。

https://bitnami.com/stack/gitlab/installer

# 2.gitlab的配置与使用

### 1.创建新项目（web）

1.登录gitlab网址成功后，点击左侧导航栏的projects，选择右侧New project选项。

2.在创建工程的页面，按照要求填写项目的名称和可见性等信息。

* Project path：项目的路径

* Project name：项目名称

* Import prject from：从哪导入项目，提供Github/Bitbucket等几个选项

* Description（项目的描述）：可选项，对项目的简单描述

* Visibility Level（项目可见级别）：
1. 提供Private（私有的，只有你自己或者组内的成员能访问）
2. Internal（所有登录的用户）
3. Public(公开的，所有人都可以访问)三种选项。

## 2.添加和配置SSH公钥

##### 1.SSH的作用

SSH（Secure Shell）是一种安全协议，在你的电脑与GitLab服务器进行通信时，我们使用SSH密钥（SSH Keys）认证的方式来保证通信安全。

##### 2.创建 SSH密钥，并将密钥中的公钥添加到GitLab，以便我们通过SSH协议来访问Git仓库。

SSH 密钥的创建需要在终端（命令行）环境下进行，我们首先进入命令行环境。

通常在OS X和Linux平台下我们使用终端工具（Terminal），在Windows平台中，可以使用Git Bash工具。      

在目录下选择git-bash


    $ git config --global user.name "name" //修改你的用户名

    $ git config --global user.email "email"//修改你的邮箱

    $ ssh-keygen -t rsa -C "你的邮箱地址"



##### 3.获取SSH公钥信息：

    $ ls ~/.ssh      根目录查看是否有 ssh

    id_rsa id_rsa.pub    文件

    $ cd id_ras.pub

    $ cat ~/.ssh/id_rsa.pub

通过cat命令。在命令行中敲入cat ~/.ssh/id_rsa.pub ，回车执行后命令行界面中会显示id_rsa.pub文件里的内容，复制。

##### 4.添加SSH公钥到gitlab

1. 打开gitlab的profile Setting页面，选择SSH Keys

2. 添加SSH公钥。填写Title和Key，其中Title是Key的描述信息，Key是上面复制的SSH公钥的内容，直接粘贴到输入框中保存即可。

##### 5.导入项目:

1. 设置下git的用户名和邮箱

在提交代码前，还需要设置下git的用户名和邮箱（最好用英文，不要出现中文），这样提交记录才会在gitlab上显示带有你名字的记录。在命令行窗口输入：

    git config --global user.name"your_name"
    git config --global user.email "your_email"

2. 导新项目到gitlab上

如果项目存在，需要导入到gitlab可以通过命令行直接将项目导上去。

cd "本地存在项目的路径"   例如：cd reactStudy

    git init 初始化

    git add .  点表示当前目录下所有文件添加到暂存区，也可指定具体文件

    git commit -m 'first git demo'   把暂存区的所有内容提交到当前分支上

    git remote add origin git@gitlab.com:USERNAME/PROJECTNAME.git  （注：将USERNAME和PROJECTNAME替换成用户名和项目的名称）

    git push -u origin master   将改动提交到远程仓库

出现Are you sure you want to continue connecting (yes/no)?写yes

如果修改了文件夹的内容可使用终端命令如下

    git add .

    git  commit -m "修改的内容"

    git push
