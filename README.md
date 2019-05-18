# minblog
a **minimal designed blog platform**, and a *complete beginners guide* on how to set it up and host it in github pages, so you can have a personal blog with little effort.
the live demo:
https://alt-romes.github.io/minblog
github:
https://github.com/alt-romes/minblog

## 1 - Getting started

1. Cloning / downloading the repository (on the command line)
```
git clone https://github.com/alt-romes/minblog.git
```

2. Installing all dependencies. (First change to the right directory) (on the command line)
```
cd minblog-master
npm install
```

## 2 - Configuring Firebase
Firebase will host the blog's posts, it'll need some configuring first, but it should be straightforward

1. Login with Google to [Firebase](https://console.firebase.google.com)
i trust you can figure it out.

2. Click *add project*
![add project](https://i.imgur.com/YgnYSDx.png)

3. Click *Authentication*
![authentication](https://i.imgur.com/6jm5N9d.png)

4. Click the button that says *Set up sign-in method*, followed by clicking *Email/Password* , and then click the first enable button
![enabling email](https://i.imgur.com/9nqTGPH.png)

5. Now that it's enabled, click *Users*, and *Add an user*, you are now choosing the email and password you will use to log into the blog section to publish new posts. Authentification is now done.
![adding user](https://i.imgur.com/MroqclD.png)

6. Let's create the Database. Click *Database* and then scroll down until you see *Realtime Database*, and click *Create database* on it. Start in *locked mode*
![creating database](https://i.imgur.com/IVFlWpW.png)

7. Let's now set the rules, so only you are allowed to create new posts. Select *Rules*, in front of *".write":*, delete **false** and write **"auth != null"**, and then hit *Publish*! That's all the configurating.
![changing database rules](https://i.imgur.com/0OlSp86.png)

### 3 - Linking Firebase with the blog
Now we gotta make sure the blog is linked to the project you just configured.

1. Go back to project overview, and select the *Web* component under *Get started by adding Firebase to your app*
![set project](https://i.imgur.com/vF2P8yr.png)

2. Choose a nickname for the app, and click *Register App*
![register app](https://i.imgur.com/FZtFLN6.png)

3. Copy the firebaseConfig, this is, what is in between *// Your web app's Firebase configuration* and *// Initialize Firebase*, you're done here.
![firebaseConfig](https://i.imgur.com/o1U2EdT.png)

4. Open up the folder you cloned, and open with a text editor (any is fine, really) the file inside **src** folder called **main.js**
![edit main.js](https://i.imgur.com/TV1hd9s.png)

5. Paste over the existing firebase configuration (in between *// Your web app's Firebase configuration* and *// Initialize Firebase*) the one you copied two steps ago
![paste new config](https://i.imgur.com/QYFBhqX.png)

### 4 - Configuring

1. In the project folder, open *vue.config.js*, and change the *publicPath* to the name you are going to use up ahead for the github configuration.
![publicPath](https://i.imgur.com/uXS42Vp.png)

2. (Optional) For further web title costumization, you can open inside **public** folder, the file **index.html**, and change the text between the **<title></title>** tags, and open, in the same folder, the file **manifest.json** and change,  both the name and the short_name, to whatever.

3. (Optional) For further costumization, you might want to research the *vue app file structure*, and do whatever you want for yourself.

4. Let's now build the project, by going back to the main directory (on the command line) (the one you cloned), and running the command
```
npm run build
```

### 5 - Publishing

1. Login to [Github](https://github.com/login), and, create a new repository, with the same name you used in the *vue.config.js*'s publicPath.
![new repo](https://i.imgur.com/a3nBzrI.png)

![finish creation](https://i.imgur.com/mrbNagH.png)

2. Copy the repository's https link
![copy link](https://i.imgur.com/vwfgoeJ.png)

3. Go to the directory on the command line again and run the commands.
```
git init
git add .
git commit -m "blog ready"
git push -f <link you copied> master

**Example**
```
*git push -f https://github.com/alt-romes/example-blog.git master*
```

4. Refresh the repository's page, and click Settings
![settings](https://i.imgur.com/vo0pD1X.png)

5. Scroll down and click in the GitHub Pages section, *Source*, and choose **master branch /docs folder**

### You're done!
