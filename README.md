# minblog
a **minimal designed blog platform**, and a *complete beginners guide* on how to set it up and host it in github pages, so you can have a personal blog with little effort.
the live demo:
https://alt-romes.github.io/minblog

## 1 - Getting started

1. Cloning / downloading the repository (on the command line)
```
git clone https://github.com/alt-romes/minblog.git minblog-master
```

2. Installing all dependencies. (First change to the right directory) (on the command line)
```
cd minblog-master
npm install
```

## 2 - Github

1. Login / SignUp at https://github.com.

2. Create a new repository called: **username.github.io**
![new repo](https://i.imgur.com/fKuoOOm.png)

### 4 - Configuring

1. In the project folder, open *vue.config.js*, and change the *outputDir* to the username of you github account followed by **.github.io**, or, if you don't have an account, the name you are going to use to sign up, which you should check if is available first. You are going to use this name **example-blog.github.io** ahead for the github configuration.
![outputdir](https://i.imgur.com/iUxwIg5.png)

2. (Optional) For further web title costumization, you can open inside **public** folder, the file **index.html**, and change the text between the **<title></title>** tags, and open, in the same folder, the file **manifest.json** and change,  both the name and the short_name, to whatever.

3. (Optional) For further costumization, you might want to research the *vue app file structure*, and do whatever you want for yourself.

4. Let's now build the project, by going back to the main directory (on the command line) (the one you cloned), and running the command
```
npm run build
```

### 5 - Publishing

1. Login to [Github](https://github.com/login), and, 

2. Copy the repository's https link
![copy link](https://i.imgur.com/HoYznQA.png)

3. Go to the directory on the command line again and run the commands.
```
cd <name you used on the outputDir>
git init
git add .
git commit -m "blog ready"
git push -f <link you copied> master
```

**Example**
```
cd example-blog.github.io
git push -f https://github.com/alt-romes/example-blog.github.io.git master
```

4. It should be done! In about 10 minutes it should be working if you navigate to the website with the name you used in the output dir, for example *https://example-blog.github.io*

### You're done!
