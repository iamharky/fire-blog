<div align="center">
  <h1>FireBlog</h1>
  <p>Personal blog app built with <b>React</b> using <b>Firebase authentication</b>, <b>Firestore</b>, and <b>Firebase Hosting</b>.</p>
  <a href="https://github.com/iamharky/fire-blog/blob/master/LICENSE" target="_blank">
    <img alt="GitHub license" src="https://img.shields.io/github/license/iamharky/fire-blog">
  </a>
  <br>
</div>

---

## 💻 Demo

The app is live on **Firebase**: <a href="https://blog-harky.web.app/" target="_blank">https://blog-harky.web.app/</a>
<br/>

## 🚀 Installation

- Clone repository <br/>
<code>git clone https://github.com/iamharky/fire-blog.git</code>

- Change directory to project folder <br/>
<code>cd fire-blog</code>

- Install dependencies with <br/>
  - Npm: <code>npm i</code> <br/>
or <br/>
  - Yarn: <code>yarn</code>
<br/>

## 🧪 Testing with Static Data

- Change all of the <code>pages</code> directories to <code>templates</code> in <code>App.jsx</code>

- Import and use <code>Create</code> and <code>Edit</code> pages as <code>CreateEdit</code>

- Go to <code>src > components > atoms > CardDate</code> and then comment out the 7th line, comment the 8th line to avoid date format error

- Now you can run & test the project without Firebase initialization

> You should initialize a Firebase web app and configure the project to use it with real data.
---

## MIT License

Copyright (c) 2020 Turgut Yavuz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
