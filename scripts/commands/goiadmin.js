module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100011152309303") {
    var aid = ["100011152309303"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সাইফুল বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো কেনো আমার বস সাইফুল এর তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 💦😭😭","সাইফুল বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল সাইফুল রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে বস সাইফুলের ইনবক্স এ যা","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না সাইফুল প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দেয় আমার বস সাইফুল🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
