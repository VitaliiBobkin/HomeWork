"use strict";

// created object user
const user = {
    name: "Alex",
    age: 28,
    isOnline: true,
    friends: ["Nick", "Boris", "Max"],
    settings: {
        theme: "dark",
        notifications: true
    }
};

// Individual variables
const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;

//output in console
console.log("userName:", user.name);
console.log("amount count friends:", user.friends.length);
console.log("name first friend:", firstFriendName);
console.log("theme:", user.settings.theme);
console.log("isNotification:", notificationsEnabled);

