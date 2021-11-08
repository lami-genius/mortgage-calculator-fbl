import { Injectable } from '@angular/core';
import { IQuote } from '../model/iquote';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote(): IQuote {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }
}


export const QUOTES: IQuote[] = [
  {
    quoteBy: 'Jean Chatzky',
    quoteText: "Debt certainly isn't always a bad thing.A mortgage can help you afford a home.Student loans can be a necessity in getting a good job.Both are investments worth making, and both come with fairly low interest rates.",
  },

  {
    quoteBy: 'John Paulson',
    quoteText: 'If you rent, the rent goes up every year. But if you buy a 30-year mortgage, the cost is fixed.'
  },
  {
    quoteBy: 'Joe Mays',
    quoteText: 'The universe of mortgage lending has gotten to the point where there is a place in it for everybody.'
  },
  {
    quoteBy: 'Dave Ramsey',
    quoteText: 'You don\'t want to have so much money going toward your mortgage every month that you can\'t enjoy life or take care of your other financial responsibilities.'
  },
  {
    quoteBy: "Suze Orman",
    quoteText: "Pay off your mortgage before retirement, and that's one less bill you'll have to worry about when you're on a fixed income."
  },
  {
    quoteBy: "Pamela Meyer",
    quoteText: "Deception can cost billions.Think Enron, Madoff, the mortgage crisis.Or in the case of double agents and traitors, like Robert Hanssen or Aldrich Ames, lies can betray our country.They can compromise our security.They can undermine democracy.They can cause the deaths of those that defend us."
  },
  {
    quoteBy: "Karl Rove",
    quoteText: "Remember the Tea Party movement didn't get started in September of 2008 when the bank bailout was passed. It really began on Feb. 19th, 2009 when a television commentator named Rick Santelli stood up and said what the hell are we doing bailing out people who couldn't afford a mortgage by taking money from people like me who are prudent ?"
  },
  {
    quoteBy: "Lynn Shelton",
    quoteText: "You wake up one day and you realize that all these years have gone by and I have this mortgage and I have this couch and I have this life and...is this going to be my prison ?"
  },
  {
    quoteBy: "Robert Kiyosaki",
    quoteText: "Bad debt is debt that makes you poorer.I count the mortgage on my home as bad debt, because I'm the one paying on it. Other forms of bad debt are car payments, credit card balances, or other consumer loans."
  },
  {
    quoteBy: "Robert Sapolsky",
    quoteText: "We have this amazing ability to turn on the exactly same stress response worrying about a mortgage that a zebra does when it's sprinting away from a lion."
  },
  {
    quoteBy: "Lisa Madigan",
    quoteText: "Your mortgage shouldn't have been treated as a wager - it should be a way to provide a home and financial stability for you and your family."
  },
  {
    quoteBy: "Al - Waleed bin Talal",
    quoteText: "Some countries, like Saudi Arabia, where the population growth is very high, whereby you don't have the mortgage low yet. Still the demand outstrips supply by much."
  },
  {
    quoteBy: "Suze Orman",
    quoteText: "If you pay off your mortgage before retirement, you take a huge financial load off your shoulders.You also become eligible to take out a reverse mortgage once you turn 62."
  },
  {
    quoteBy: "James McBride",
    quoteText: "You can play Mozart all you want and pretend that it gives you class, but what is class, you know? Class is a bus driver on the M103 who gets off the bus to help somebody on board even though he's tired, he's exhausted, and he's two months behind on his mortgage. That's real class."
  },
  {
    quoteBy: "Steve Martin",
    quoteText: "I'm for the Wall Street Occupiers. But will they accept me when they find out I sell packaged mortgage default instruments to children?"
  },
  {
    quoteBy: "Jean Chatzky",
    quoteText: "You can refi your car loan just like you can refi your mortgage. It's even easier and less expensive. There's no appraisal process, and fees are minimal for a new car title. A couple of caveats: Most lenders require that the car be less than five years old and have a minimum loan balance of $7,500."
  },
  {
    quoteBy: "Jeremy Renner",
    quoteText: "People find themselves in ruts all the time. You're in a complacent lifestyle where you work 9 to 5 and then you add a mortgage and kids. You feel trapped, but guess what, brother? You constructed that life. If you're OK with it, there's nothing wrong with that. But if you've got unease, then you've got to make a change."
  },
  {
    quoteBy: "Dee Dee Myers",
    quoteText: "The dirty little secret is that the pool man, who's making $30,000 a year, is subsidizing the million-dollar mortgage for the family whose pool he cleans. No wonder people want to get rid of tax breaks for corporate jets."
  },
  {
    quoteBy: "Jamie Dimon",
    quoteText: "You can design a mortgage system that is different without a Fannie and Freddie, but there are principles you have to have, to have a good system."
  },
  {
    quoteBy: "Michael Burry",
    quoteText: "Back in 2005 and 2006, I argued as forcefully as I could, in letters to clients of my investment firm, 'Scion Capital', that the mortgage market would melt down in the second half of 2007, causing substantial damage to the economy."
  },
  {
    quoteBy: "Sallie Krawcheck",
    quoteText: "First, pay off your high-interest-rate debt. If you have student loan debt - that's low interest rate; that has a tax benefit - you can leave that out. A mortgage can be an OK one. Credit card debt is poison. That needs to be paid off right away."
  },
  {
    quoteBy: "Sandra Tsing Loh",
    quoteText: "The very success of the modern American family - where kids get punctually to SAT-tutoring classes, the mortgage gets paid, the second-story remodel stays on budget - surely depends on spouses' not being in love."
  },
  {
    quoteBy: "Dave Ramsey",
    quoteText: "While I encourage people to save 100% down for a home, a mortgage is the one debt that I don't frown upon."
  },
  {
    quoteBy: "Suze Orman",
    quoteText: "While a reverse mortgage can indeed be a viable way to generate income, it is very important to understand that after you take out a reverse mortgage, you will still be responsible for paying the property tax, the insurance premium, and all the maintenance costs for your home."
  },
  {
    quoteBy: "Aron Eisenberg",
    quoteText: "I'm just a regular guy. I have two kids, I do photography, I pay my mortgage - I just happened to be on a TV show."
  },
  {
    quoteBy: "Will Carleton",
    quoteText: "Worm or beetle - drought or tempest - on a farmer's land may fall, Each is loaded full o' ruin, but a mortgage beats 'em all."
  },
  {
    quoteBy: "Mark Zandi",
    quoteText: "There is no better way to quickly buoy hard-pressed homeowners than helping them take advantage of the currently record low fixed mortgage rates and significantly reduce their monthly mortgage payments."
  },
  {
    quoteBy: "Cush Jumbo",
    quoteText: "My dad is the first to say that Mum deals with the mortgage payments, the bills, the rota, things like that, while my dad is the emotional one who keeps the home together. He's the nurturer, but together, they work perfectly."
  },
  {
    quoteBy: "Evan Davis",
    quoteText: "The two questions that anyone ever asks me are: 'Are house prices going to go down?' and 'Is it a good time to fix my mortgage rate?'"
  },
  {
    quoteBy: "John Eldredge",
    quoteText: "I'm married. I have three children. I have a mortgage to pay. The plumbing breaks and the yard needs trimming. However, what my wife and children need most from me is my passion for them."
  },
]