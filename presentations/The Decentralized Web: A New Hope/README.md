# The Decentralized Web: A New Hope

The internet is a big part of our lives, from keeping us entertained to helping us work and stay connected. But let's be real, there are some downsides. Have you ever felt like your privacy is being invaded or like there's always a sketchy middleman in every online transaction?

Enter the Decentralized Web, also known as Web 3.0. It's like a breath of fresh air for the internet! The aim of Web 3.0. is to create a more democratic and secure internet by using decentralized technologies.

So let's buckle up and dive into the fascinating world of Web 3.0!

## Brief History of the Web

<img align="right" width="300" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjA5Y2Q4OGM0YjU3YWYzMDljOTA3YWNiM2Y0ODk3ODY1ZDU1MDRiNCZjdD1n/SZUnyVdIDAEQU/giphy.gif">

Once upon a time, in a land far, far away (called it the 80s), the internet was born. The first version of the web, known as Web 1.0, was a simple, read-only, static web that only allowed users to view information.

Fast forward to the early 2000s, and the internet got a major upgrade. Enter Web 2.0, a dynamic web that enabled user-generated content, and brought us social media and online collaboration.

But here's the catch! It is controlled by a few powerful companies, the gatekeepers of the internet — like Amazon, Microsoft, Facebook, you name it! This means that your data, your privacy and your freedom of speech are all at risk of being controlled by them.

Enter the hero we all deserve: Web 3.0! Also known as the decentralized web, it's like Web 2.0 on steroids. Using cool stuff like blockchain, peer-to-peer networking, and distributed computing, Web 3.0 is all about you owning and controlling your own data, and interacting directly with others without any intermediaries.

So, let's take a closer look at what decentralization means and why it's so important for the future of the web.

## What is Decentralization?

Decentralization is the process of distributing power and authority away from a central authority. Cool, but what does that really mean?

Think of a group of friends planning a picnic. In a centralized system, there's one person who makes the decision of what the group is going to eat and everyone else follows. But in a decentralized system everyone contributes and the responsibility is spread out among the group. No one person has all the power or control, and the result is a diverse and inclusive meal that everyone can enjoy.

<img align="left" width="250" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2RjZmE0NjNkYTA3OTdmMWFiMWQzZjgwMzA5ZDk1ZGYxYTczMDI2NSZjdD1n/FkkSI8MGqfjT9dmnQ9/giphy.gif">

In the context of the web, decentralization means digital content is hosted on a distributed network of computers, instead of being locked up in one giant server farm guarded by a few all-powerful overlords. This makes it more difficult for any one entity to control or censor content, promoting freedom of speech and protecting users' privacy.

This is great news for anyone who wants to express themselves freely online without fear of being censored or tracked. Plus, you get to keep control of your data and online identity, rather than handing them over to some faceless corporation.

But that's not all! Decentralization also means that digital content can remain available forever, instead of being deleted and never be seen again — which is great for preserving our [digital history](https://chnm.gmu.edu/digitalhistory/preserving/). 

## Implementations of Decentralization

### Blockchain (Ethereum)

Imagine a state machine that keeps track of every transaction ever made. When someone wants to make a new transaction, they submit it to the state machine, which checks if they have the funds to complete the transaction. If they do, the state machine updates its ledger to show the new transaction.

But here's the catch: this state machine is distributed across many computers, and each computer has its own copy of the ledger. Whenever a new transaction is added to the ledger, it's broadcast to all the other computers in the network, and they all update their own copies of the ledger to match.

This way, everyone can see the complete history of every transaction ever made on the network, and no one can tamper with the ledger without everyone else noticing. That's essentially what a blockchain is: a distributed, tamper-evident ledger that keeps track of every transaction on a network.

<img align="right" width="200" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2YzYzZhMWFlMDUzOGNmNTJlOTBhZjljYTZhMmJlMGQxODAxMmE1ZiZjdD1n/Xtg9ygGsjvouF7vZ1w/giphy.gif">

Sounds hard, and it kind of is, that’s the point. The good news is you really don’t need to understand all of it to create your own applications. For example, in Ethereum, you can create decentralized applications — also known as dApps among the cool kids — in Solidity, Ethereum’s smart contract language. Smart contracts are very similar to JavaScript classes were you will have global variables that will be store in the blockchain and methods to interact with those variables. Easy-Peasy!

Just one very important thing to keep in mind: every transaction that changes the blockchain, a.k.a. every time you want to change you global variables, the user will have to pay for gas. Why?, you ask. Great question!

Since every transaction that happens on the network needs to be processed by the network's computers, these nodes need to use their computing power to verify and process each transaction, and they need to be incentivized to do so.

<img align="left" width="300" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJlM2FlOWU4Y2RkNWExNDhiMTUzMjNkOTU3ODQ4MTljOGNlMDM1NCZjdD1n/9HQRIttS5C4Za/giphy.gif">

This is where gas fees come in. Gas is the unit of measurement for the amount of computational work that needs to be done to process a transaction on the Ethereum network. The more complex your transaction is, the more gas it will require, and the higher the gas fee you will need to pay.

But, back to the good stuff, and speaking of JavaScript, there are several blockchain frameworks and libraries that you can use to build dApps using the blockchain. For example, Ethereum has its own JavaScript library called `web3.js`, which allows developers to interact with the Ethereum blockchain just by calling really simple functions.

> **Note**
> You can check an example of a simple decentralized counter app built in Ethereum [here](../../code-examples/web3-counter/README.md).

Although the blockchain is super secure, and a great choice for financial applications, sometimes it just doesn’t make sense to force your users into paying real money every time they want to interact with your application. Imagine having to pay every time you publish something online. Not cool! 👎
The good news is there are others ways to create decentralized applications without using the blockchain.

### Fediverse

I’m sure you have recently heard about Mastodon and how it is basically a better, decentralized version of Twitter. Just like Mastodon, there are a bunch of other application that work the same way, so many indeed that they have their own name: the Fediverse 🌈.

The Fediverse is a decentralized social network that uses the ActivityPub protocol to allow users to communicate with each other across different platforms.

Instead of one big platform like Facebook, the Fediverse is made up of different servers that communicate with each other. This means that you can join a Fediverse server that aligns with your interests and values, and still be able to interact with users on other servers. 

Because the Fediverse is decentralized, there's no single entity controlling what content is allowed, and users have more control over their data and privacy. And there are so many options of applications to choose from!

<p align="center">
  <img width="600" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Fediverse_branches_1.2.png">
</p>


The beauty of the Fediverse is that, as long as every server uses the same protocol, it doesn’t matter what language you use to create your app! While Mastodon's codebase is written in Ruby, you can still build Fediverse applications using JavaScript thanks to libraries like `ActivityPub.js`. 

### Peer-to-Peer

<img align="right" width="250" src="https://media.tenor.com/iEzxVHXMY6gAAAAC/have-you.gif">

And now the oldest form of decentralization on the list: Peer-to-peer (P2P). It's like the OG of decentralized networks. And for those of you who like to live on the wild side, you might already be familiar with it (no judgment here, we've all been there).

In a P2P network, each user is like a tiny server, both a consumer and a producer of content. No one's the boss here, we're all equal in the eyes of the network. That means instead of relying on a central server to host and distribute content, each user's device communicates directly with other users' devices to share and consume content.

Another cool thing about P2P is that it also allows for a more decentralized approach to archiving, meaning that the data is not controlled by a single entity or authority. This can help to prevent the loss of valuable historical information due to censorship, government intervention, or technical failures and even help in the preservation of our digital history! — did you know that the Internet Archive as a [decentralized version](https://dweb.archive.org/) of their website for that exact reason?!

And let me tell you, JavaScript is all over this P2P game. There are some amazing libraries out there that can be used to create decentralized applications. Take PeerJS for example, it's a JavaScript library that simplifies WebRTC peer-to-peer data, video, and audio calls. Or   (InterPlanetary File System), a protocol and network designed to create a permanent and decentralized method of storing and sharing files. Plus, my favourite one: `gun.js`, a decentralized graph database that allows you to build real-time collaborative applications with ease.

So don't be afraid to get in on this P2P action, the possibilities are endless!

## Conclusion

And that is it! Hopefully, I've given you a good introduction to some of the different implementations of decentralization and how they work. Remember, the decentralized web isn't just for the tech-savvy, it's for anyone who cares about online privacy, security, and freedom.

Whether you're interested in blockchain, the Fediverse, or peer-to-peer networks, there are plenty of opportunities to get involved and start building decentralized applications. So don't be afraid to dip your toes in the water and start exploring the possibilities.
