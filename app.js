let pronoun = ["the", "our"];
let adj = ["great", "big", "good", "happy", "new"];
let noun = ["jogger", "racoon", "school", "group", "company"];
let extension = [
  ".COM",
  ".NET",
  ".ORG",
  ".INFO",
  ".CA",
  ".CO",
  ".UK",
  ".CO.UK",
  ".BIZ",
  ".COM.AU",
];

for (let varPronoun of pronoun) {
  for (let varAdj of adj) {
    for (let varNoun of noun) {
      for (let varExt of extension) {
        console.log(`${varPronoun}${varAdj}${varNoun}${varExt.toLowerCase()}`);
      }
      // let varNoun_ = varNoun.slice(-2);
      // let varNoun2 = varNoun.slice(0, -2);
      console.log(`${varAdj}${varNoun.slice(0, -2)}.${varNoun.slice(-2)}`);
    }
  }
}
