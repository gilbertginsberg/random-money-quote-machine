window.onload = () => {
  const quote = document.getElementById('quote');

  const newquote = document.getElementById('newquote');

  const tweetIntent = document.getElementById('tweet-button');

  var quotesArr = ['"Those who early retire fly higher." — Gilbert',
  '"If you\'re worried about what Market does today (see short term), it might be time to reevaluate your investing strategy. Play the long game." — Gilbert"',
  '"Remember: taking out a mortgage does not mean you "buy" a house. It means you fall into debt." — Gilbert',
  '"You ask: How do you become rich? I answer: You fear debt like you would a scary witch." — Gilbert',
  '"Stash cash and you\'ll be out of the rat race in a dash." — Gilbert',
  '"Remember to stay committed to low financial fees because that\'s how you\'ll find yourself with a lot of cheese." — Gilbert',
  '"If you see an ad for a product on cable TV, (more times than not) quality it mustn\'t be." — Gilbert',
  '"If you want your net worth to grow, remember to keep your money fees low." — Gilbert',
  '"Be pragmatic and set your (mutual fund) investments to automatic." — Gilbert',
  '"Remember the best investing aim is to play the long game." — Gilbert',
  '"If you save and avoid debt, financial independence is what you\'ll beget." — Gilbert',
  '"Remember that terms like Mortgage, Credit, and Loan are nothing more than word farts for debt to the bone." — Gilbert',
  '"If you want to early retire, limit a desire. And then another. And another. Because your savings will sooner or later climb higher." — Gilbert',
  '"Don\'t forget you never want debt." — Gilbert',
  '"If you think you need a car, your path to financial independence is very far." — Gilbert',
  '"If freedom is what you crave, you’ll realize sooner or later you can buy it and save." — Gilbert',
  '"The lower the mutual fund’s expense ratio, the faster you’ll escape financial limbo." — Gilbert',
  '"You ask: what’s a mutual fund expense ratio? I answer: It’s nothing more than a fee, yo." — Gilbert',
  '"If a man wants to manage your money, remember it’s to feed HIS tummy." — Gilbert',
  '"If you understand compound interest, your study of financial independence is finished." — Gilbert',
  '"Those who save money do not feel crummy." — Gilbert',
  '"Those who make saving a habit never look at their bank account and say dag nabbit." — Gilbert',
  '"If you give your money to an investment broker, you might find yourself wondering why you\'re broke-er." — Gilbert',
  '"Handle your money yourself because an investment broker will treat it like chips in a game of poker." — Gilbert',
  '"If WellsFargo is still your bank, that means you have yet to smell its stank." — Gilbert',
  '"If you don\'t know a financial product\'s price, it must not be nice." — Gilbert',
  '"If you put nothing away for retirement, I can tell you, to the last penny, how much you will have when you retire: nothing" — Jack Bogle'];

  newquote.onclick = () => {
    quote.innerHTML = quotesArr[Math.floor(Math.random() * quotesArr.length)];
    tweetIntent.href = `https://twitter.com/intent/tweet?&via=gilbertginsberg&hashtags=GILBERT&text=${quote.innerHTML}`;
  };
}
