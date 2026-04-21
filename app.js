const flashcards = [
  {
    category: "Simulation Basics",
    question: "What is the basic three-step strategy for estimating a probability by simulation?",
    answer: [
      "1. Sample the random variable with the appropriate random generation function.",
      "2. Evaluate whether the event happened to get a TRUE/FALSE vector.",
      "3. Use the mean of that logical vector to estimate the probability."
    ]
  },
  {
    category: "Simulation Basics",
    question: "Why does a large sample size matter in simulation?",
    answer: [
      "A larger sample makes the simulated proportion closer to the true probability.",
      "Your notes say around 10,000 simulations is usually a good balance between speed and accuracy."
    ]
  },
  {
    category: "Simulation Basics",
    question: "How would you estimate P(XY > 1) when X and Y are independent standard normal variables?",
    answer: [
      "Generate many X and Y values with `rnorm`.",
      "Compute `X * Y > 1` for each pair.",
      "Take the mean of those TRUE/FALSE results."
    ]
  },
  {
    category: "Discrete Distributions",
    question: "How do you estimate a pmf from simulation for a discrete random variable?",
    answer: [
      "Simulate many observations of the variable.",
      "Use `table` to count how often each value appears.",
      "Convert counts to proportions with `proportions(table(X))`."
    ]
  },
  {
    category: "Discrete Distributions",
    question: "For the sum of two dice, what does `proportions(table(X))` represent?",
    answer: [
      "It estimates the pmf of X, where X is the sum of the two dice.",
      "Each proportion is the estimated probability of a specific sum."
    ]
  },
  {
    category: "Discrete Distributions",
    question: "In the birthday-sharing example, what does the random variable X count?",
    answer: [
      "X is the number of people in the room who share a birthday with someone else.",
      "You detect repeated birthdays by checking which table counts are greater than 1, then summing those counts."
    ]
  },
  {
    category: "Discrete Distributions",
    question: "In the 100 coin toss example, what does X measure?",
    answer: [
      "X is the number of times, during the first 100 tosses, that the number of heads so far exceeds the number of tails so far.",
      "You compute cumulative heads and cumulative tails, then count how often heads is ahead."
    ]
  },
  {
    category: "Discrete Distributions",
    question: "What is the first return time in the random walk example?",
    answer: [
      "It is the number of steps until the walk returns to 0 for the first time.",
      "In the code, it is `min(which(cumsum(movements) == 0))`."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "Why is `table` not useful for continuous random variables?",
    answer: [
      "Continuous random variables almost never repeat exactly the same value.",
      "So instead of counting exact values, we group values into intervals with a histogram or estimate the density with a smooth curve."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What is a histogram doing when you estimate a continuous distribution?",
    answer: [
      "It divides the range of values into intervals and counts how many observations fall into each one.",
      "Those bar heights approximate the underlying density."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What does a density estimate represent?",
    answer: [
      "It is a smooth estimate of the pdf based on nearby data points.",
      "Places close to many sampled values get higher estimated density."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What distribution does 2Z have if Z ~ Norm(0,1)?",
    answer: [
      "2Z is approximately normal with mean 0 and standard deviation 2.",
      "Your notes compare the simulated density of `2Z` to `dnorm(x, 0, 2)`."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "When can density estimation be misleading?",
    answer: [
      "It can be misleading when the true pdf has jump discontinuities.",
      "The smoothing hides sharp jumps, so a histogram may be better."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "Why is a histogram better than a density plot for X ~ Unif[-1,1]?",
    answer: [
      "Because the uniform density has jump discontinuities at -1 and 1.",
      "A density estimate smooths those edges, but a histogram shows the flat shape more honestly."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What important fact is illustrated by plotting Z1 + Z2 for two independent standard normal variables?",
    answer: [
      "The sum of independent normal random variables is still normal.",
      "For two standard normals, the result matches a normal distribution with mean 0 and standard deviation sqrt(2)."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What distribution does Z^2 follow when Z is standard normal?",
    answer: [
      "Z squared follows a chi-square distribution with 1 degree of freedom.",
      "Your notes compare a histogram of `Z^2` with `dchisq(x, df = 1)`."
    ]
  },
  {
    category: "Continuous Distributions",
    question: "What happens when you add independent exponential random variables with the same rate?",
    answer: [
      "Their sum follows a gamma distribution.",
      "If the shapes are alpha1 and alpha2 with the same rate beta, the sum is gamma with shape alpha1 + alpha2 and rate beta."
    ]
  },
  {
    category: "CLT",
    question: "What does iid mean?",
    answer: [
      "Independent and identically distributed.",
      "That means the variables are mutually independent and each one has the same probability distribution."
    ]
  },
  {
    category: "CLT",
    question: "What is a sample statistic?",
    answer: [
      "A random variable built from the sample, like Y = h(X1, ..., Xn).",
      "Its probability distribution is called a sampling distribution."
    ]
  },
  {
    category: "CLT",
    question: "What does the Central Limit Theorem say in plain language?",
    answer: [
      "If you average a large number of independent samples, the distribution of that sample mean is approximately normal.",
      "This is true even when the original population is not normal, as long as conditions are reasonable."
    ]
  },
  {
    category: "CLT",
    question: "How large should n be for the CLT to work well in practice?",
    answer: [
      "If the population is symmetric with no outliers, around 15 to 20 can be enough.",
      "For moderately skewed data, about 30 to 50 may be needed.",
      "For extremely skewed data, even 1000 may still be poor."
    ]
  },
  {
    category: "CLT",
    question: "What is the main lesson of the extreme skewness example?",
    answer: [
      "The Central Limit Theorem is not magic for badly skewed data with extreme outliers.",
      "Even very large sample sizes can still give a sampling distribution that is far from normal."
    ]
  },
  {
    category: "Confidence Intervals",
    question: "What does a 100(1 - alpha)% confidence interval mean?",
    answer: [
      "It means the interval-producing procedure captures the true parameter in 100(1 - alpha)% of repeated samples.",
      "It does not mean that a single computed interval has a literal long-run probability attached after the data are already observed."
    ]
  },
  {
    category: "Confidence Intervals",
    question: "What assumptions are listed for producing a confidence interval for the mean?",
    answer: [
      "The population is normal, or the sample size is large enough for the CLT to apply reasonably.",
      "The sample values are independent."
    ]
  },
  {
    category: "Confidence Intervals",
    question: "How can you check the normality assumption for a confidence interval?",
    answer: [
      "Look at histograms, boxplots, or qq plots.",
      "You may also assess skewness or use simulation to judge whether the CLT is enough."
    ]
  },
  {
    category: "Confidence Intervals",
    question: "Why is independence often harder to verify than normality?",
    answer: [
      "Dependence can come from time ordering, repeated measurements, or changes in the experimental setup.",
      "Those issues are not always obvious from a simple plot."
    ]
  },
  {
    category: "Hypothesis Testing",
    question: "What are the null and alternative hypotheses in a test of a population mean?",
    answer: [
      "The null hypothesis H0 is the default claim about the population mean.",
      "The alternative hypothesis Ha says the null is false, often in a specific direction or two-sided form."
    ]
  },
  {
    category: "Hypothesis Testing",
    question: "What are the two possible decisions in a hypothesis test?",
    answer: [
      "Reject the null hypothesis.",
      "Fail to reject the null hypothesis."
    ]
  },
  {
    category: "Hypothesis Testing",
    question: "What does the alpha level of a test represent?",
    answer: [
      "Alpha is the probability of falling in the rejection region when the null hypothesis is true.",
      "So it is the Type I error rate of the testing procedure."
    ]
  },
  {
    category: "Hypothesis Testing",
    question: "What does it mean if results are statistically significant?",
    answer: [
      "It means the p-value is less than alpha.",
      "In many settings, if alpha is not stated, people often mean alpha = 0.05."
    ]
  },
  {
    category: "Hypothesis Testing",
    question: "What is a p-value?",
    answer: [
      "It is the probability, assuming H0 is true, of getting data at least as extreme as what was observed.",
      "A small p-value means the observed result would be very unusual if the null were true."
    ]
  }
];

const categories = ["All", ...new Set(flashcards.map((card) => card.category))];

let activeCategory = "All";
let deck = [...flashcards];
let currentIndex = 0;
let isFlipped = false;

const flashcardEl = document.getElementById("flashcard");
const cardQuestionEl = document.getElementById("cardQuestion");
const cardAnswerEl = document.getElementById("cardAnswer");
const cardCategoryEl = document.getElementById("cardCategory");
const cardTopicEl = document.getElementById("cardTopic");
const deckCountEl = document.getElementById("deckCount");
const cardPositionEl = document.getElementById("cardPosition");
const filtersEl = document.getElementById("categoryFilters");
const cardListEl = document.getElementById("cardList");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderFilters() {
  filtersEl.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      deck = category === "All"
        ? [...flashcards]
        : flashcards.filter((card) => card.category === category);
      currentIndex = 0;
      isFlipped = false;
      renderFilters();
      renderCard();
      renderCardList();
    });
    filtersEl.appendChild(button);
  });
}

function renderCard() {
  const card = deck[currentIndex];

  if (!card) {
    cardQuestionEl.textContent = "No cards match this filter yet.";
    cardAnswerEl.innerHTML = "<p>Choose another topic to keep studying.</p>";
    cardCategoryEl.textContent = "Empty";
    cardTopicEl.textContent = "-";
    deckCountEl.textContent = "0";
    cardPositionEl.textContent = "0 / 0";
    flashcardEl.classList.remove("is-flipped");
    return;
  }

  cardQuestionEl.textContent = card.question;
  cardAnswerEl.innerHTML = card.answer
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
  cardCategoryEl.textContent = card.category;
  cardTopicEl.textContent = card.category;
  deckCountEl.textContent = String(deck.length);
  cardPositionEl.textContent = `${currentIndex + 1} / ${deck.length}`;
  flashcardEl.classList.toggle("is-flipped", isFlipped);
}

function renderCardList() {
  cardListEl.innerHTML = "";

  deck.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `list-card${index === currentIndex ? " active" : ""}`;
    button.innerHTML = `
      <span>${escapeHtml(card.category)}</span>
      <strong>${escapeHtml(card.question)}</strong>
    `;
    button.addEventListener("click", () => {
      currentIndex = index;
      isFlipped = false;
      renderCard();
      renderCardList();
    });
    cardListEl.appendChild(button);
  });
}

function flipCard() {
  if (!deck.length) {
    return;
  }

  isFlipped = !isFlipped;
  renderCard();
}

function goToCard(direction) {
  if (!deck.length) {
    return;
  }

  currentIndex = (currentIndex + direction + deck.length) % deck.length;
  isFlipped = false;
  renderCard();
  renderCardList();
}

document.getElementById("flipBtn").addEventListener("click", flipCard);
flashcardEl.addEventListener("click", flipCard);
flashcardEl.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    flipCard();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => goToCard(-1));
document.getElementById("nextBtn").addEventListener("click", () => goToCard(1));
document.getElementById("shuffleBtn").addEventListener("click", () => {
  deck = shuffle(deck);
  currentIndex = 0;
  isFlipped = false;
  renderCard();
  renderCardList();
});

window.addEventListener("keydown", (event) => {
  if (event.target.tagName === "BUTTON") {
    return;
  }

  if (event.code === "ArrowRight") {
    goToCard(1);
  }

  if (event.code === "ArrowLeft") {
    goToCard(-1);
  }

  if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  }
});

renderFilters();
renderCard();
renderCardList();
