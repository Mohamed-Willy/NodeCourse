const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);
        reject("Couldn't read file");
      }
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        console.log(err);
        reject("Couldn't write in file");
      }
      resolve('Sucessfully wrote file');
    });
  });
};

/*----------------------------------------------------------------
readFilePromise(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breead: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePromise(`${__dirname}/dog-image.txt`, res.body.message);
  })
  .then(() => {
    console.log('Image saved!');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

const getDogImg = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breead: ${data}`);

    const response = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const images = await Promise.all([response, response2, response3]);
    const img = images.map((el) => el.body.message);
    console.log(img);

    await writeFilePromise(`${__dirname}/dog-image.txt`, img.join('\n'));
    console.log('Image saved!');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return 'DONE 🟢';
};

console.log('Starting......');
getDogImg()
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.error('Error 🔴');
  });
