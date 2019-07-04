# minblog
a **minimal designed blog platform**, and a *complete beginners guide* on how to set it up and host it in github pages, so you can have a personal blog with little effort.
the live demo:
https://alt-romes.github.io/minblog

built with: built with vue, bulma and isomorphic-git

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

![new repo](https://i.imgur.com/bTYXvou.png)

### 3 - Configuring and Building

1. In the project folder, open *vue.config.js* and change the *outputDir* to the new repository's name (i.e. *alt-romes.github.io*)

![outputdir](https://i.imgur.com/YP1O8K8.png)

2. In the project folder, in the *src* directory, open *App.vue* and scroll down to the part that says "CONFIGURATION".

  2.1. Copy your repository's URL
  
  ![repoURL](https://i.imgur.com/3xJtHvt.png)

  2.2. Change the gitUrl's link to your repository's url
  
  ![gitURL](https://i.imgur.com/tpSH8Gq.png)
  
  2.3. Change the email to your email. It's merely informative for github, to associate to the publisher an email.

3. (Optional) For further web title costumization, you can open inside **public** folder, the file **index.html**, and change the text between the *<title></title>* tags, and open, in the same folder, the file **manifest.json** and change,  both the name and the short_name, to whatever.

4. (Optional) For further costumization, you might want to research the *vue app file structure*, and do whatever you want for yourself.

5. Let's now build the project, by going back to the main directory (on the command line) (the one you cloned), and running the command
```
npm run build
```

### 4 - Publishing

1. Copy the repository's https link. *don't mind the url being different on this image. Yours should coincide with what you had done before.*
![copy link](https://i.imgur.com/HoYznQA.png)

2. Go to the directory on the command line again and run the commands.
```
cd <name of your repository>
git init
git add .
git commit -m "blog ready"
git push -f <link you copied> master
```

*Example*
```
cd alt-romes.github.io
git push -f https://github.com/alt-romes/alt-romes.github.io.git master
```

3. It should be done! In up to 10 minutes it should be working. If you navigate to the website with the name you used in the output dir, for example *https://alt-romes.github.io* (in this github pages link is hosted my personal website, yours should look like the live demo)

### You're done!
