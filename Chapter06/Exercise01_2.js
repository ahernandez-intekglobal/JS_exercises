'use strict'
// Create a set of object types that describe a series of related objects that may share behavior and/or attributes. Code the example and another set of classes different from the example. Add properties/methods as needed. 
// 	 Example:
// 	   Shape { pEdges, fnDisplay }
//     Quadrilateral is Shape { fnArea, fnPerimeter} 
//     Square is Quadrilateral { }
//     Triangle is Shape {fnArea, fnPerimeter}

// Decied to second part in another file since first implementation was extensive

class OnlinePlayer {
    constructor(username, platform) {
        this.username = username;
        this.platform = platform;
        this.level = 1;
        this.friendsList = [];
    }

    playGame() {
        console.log(`${this.username} is playing a game on ${this.platform}.`);
    }

    addFriend(player) {
        this.friendsList.push(player);
        console.log(`${this.username} added ${player.username} as a friend.`);
    }
}

class CasualPlayer extends OnlinePlayer {
    constructor(username, platform) {
        super(username, platform);
    }

    socialize() {
        console.log(`${this.username} is chatting with friends in the game lobby.`);
    }
}

class CompetitivePlayer extends OnlinePlayer {
    constructor(username, platform) {
        super(username, platform);
        this.rank = "Bronze";
    }

    compete() {
        console.log(`${this.username} is competing in a ${this.rank}-ranked match.`);
    }

    levelUp() {
        this.level++;
        console.log(`${this.username} leveled up to level ${this.level}!`);
    }
}

class Streamer extends OnlinePlayer {
    constructor(username, platform, streamingService) {
        super(username, platform);
        this.streamingService = streamingService;
        this.viewers = 0;
    }

    startStreaming() {
        console.log(`${this.username} started a live stream on ${this.streamingService}.`);
    }

    gainViewers(newViewers) {
        this.viewers += newViewers;
        console.log(`${this.username} gained ${newViewers} viewers.`);
    }
}

// Create instances of Online Players
let casualPlayer = new CasualPlayer("CasualGamer123", "PC");
let competitivePlayer = new CompetitivePlayer("ProPlayer99", "Xbox");
let streamer = new Streamer("StreamMaster", "Twitch");

// Play games
casualPlayer.playGame();
competitivePlayer.playGame();
streamer.playGame();

// Add friends
casualPlayer.addFriend(competitivePlayer);
casualPlayer.addFriend(streamer);

// Socialize (specific to Casual Player)
casualPlayer.socialize();

// Compete (specific to Competitive Player)
competitivePlayer.compete();
competitivePlayer.levelUp();

// Start streaming (specific to Streamer)
streamer.startStreaming();
streamer.gainViewers(100);
