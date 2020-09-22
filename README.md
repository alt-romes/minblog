# I am not mantaining this project, and it's no longer working
--------------------------------------------------------------

# minblog
an open source **minimal blogging platform**, and an easy to follow guide on how to set it up and host it with github pages, so you can have a personal blog with little effort for free and on your own platform.
the live demo:
https://alt-romes.github.io/minblogdemo

built with: built with vue, bulma and isomorphic-git (with lightning-fs). when you update a post, it will push the updated data.json to the repo.

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

1. Login / Sign Up at https://github.com.

2. Create a new repository called: **username.github.io**

![new repo](https://i.imgur.com/bTYXvou.png)

### 3 - Configuring and Building

1. In the project folder, open *vue.config.js* and change the *outputDir* to the new repository's name (i.e. *alt-romes.github.io*)

![outputdir](https://i.imgur.com/YP1O8K8.png)

2. In the project folder, in the *src* directory, open *App.vue* and scroll down to the part that says "CONFIGURATION".

i. Copy your repository's URL
  
![repoURL](https://i.imgur.com/3xJtHvt.png)

ii. Change the gitUrl's link to your repository's url
  
![gitURL](https://i.imgur.com/tpSH8Gq.png)
  
iii. Change the email to your email. It's merely informative for github, to associate to the publisher an email.

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
...
git push -f https://github.com/alt-romes/alt-romes.github.io.git master
```

3. It should be done! In up to 10 minutes it should be working. If you navigate to the website with the name you used in the output dir, for example *https://alt-romes.github.io* (in this github pages link is hosted my personal website, yours should look like the live demo)

### You're done!
