let options = {
    strings: ["Assassin", "A Developer", "A Coder", "A Programmer", "An Anime Lover", "A SoloLearner", "A Kid ;)"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity
}

let typedText = new Typed(
    ".home__container__subTitle__animatedText",
    options
);

export default typedText;