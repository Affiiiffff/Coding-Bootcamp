const stringConverter = (checkVowel) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < stringConverter.length; i++)
    if (vowels.includes(stringConverter[i])) {
      count++;
    }
};

stringConverter("hello");
