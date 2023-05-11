let jobOffer = {
  title: "Looking for devops guru",
  description: "Our growing startup of 27400 emplo...",
};

const getKeys = function (obj) {
  return Object.keys(obj);
};

const deleteKey = function (obj, keyToDelete) {
  return Object.keys(obj).reduce((acc, element) => {
    if (element !== keyToDelete) {
      acc[element] = obj[element];
    }

    return acc;
  }, {});
};

const deleteKeys = function (obj, keysToDelete) {
  return Object.keys(obj).reduce((acc, element) => {
    if (keysToDelete.indexOf(element) === -1) {
      acc[element] = obj[element];
    }

    return acc;
  }, {});
};

const getTypeStats = (obj) => {
  const finalObj = {};

  for (let prop in obj) {
    let type = "";

    if (Array.isArray(obj[prop])) {
      type = "arrays";
    } else {
      type = typeof obj[prop] + "s";
    }

    if (Object.keys(finalObj).includes(type)) {
      finalObj[type]++;
    } else {
      finalObj[type] = 1;
    }
  }

  return finalObj;
};

const parseUrl = (url) => {
  let finalObj = {};
  let count = 8;

  finalObj["protocol"] = url.substring(0, 5);

  let host = "";
  for (let i = count; ; i++) {
    if (url.charAt(i) === "/") {
      finalObj["host"] = host;
      count = i;
      break;
    } else {
      host += url.charAt(i);
    }
  }

  let path = "";
  for (let i = count; ; i++) {
    if (url.charAt(i) === "?") {
      finalObj["path"] = path;
      count = i;
      break;
    } else {
      path += url.charAt(i);
    }
  }

  const query = {};
  const querySplit = url.split("");
  let querySplice = querySplit.splice(count + 1, url.length - 1);

  let startingPoint = 0;
  while (true) {
    let equal = querySplice.indexOf("=", startingPoint);
    let amper = querySplice.indexOf("&", startingPoint);

    if (equal > -1) {
      if (amper > -1) {
        let key = querySplice.slice(startingPoint, equal).join("");
        let value = querySplice.slice(equal + 1, amper).join("");

        query[key] = value;
        startingPoint = amper + 1;
      } else {
        let key = querySplice.slice(startingPoint, equal).join("");
        let value = querySplice.slice(equal + 1, querySplit.length).join("");

        query[key] = value;
        break;
      }
    }
  }

  finalObj.query = query;

  return finalObj;
};

let parsed1 = parseUrl('https://learn.telerikacademy.com/course/view.php?id=36');
console.log(parsed1);
// {
//   protocol: 'https',
//   host: 'learn.telerikacademy.com',
//   path: '/course/view.php',
//   query: {
//      id: '36'
//   }
// }

let parsed2 = parseUrl("https://google.com/search?q=cats&region=eu");
console.log(parsed2);
// {
//   protocol: 'https',
//   host: 'google.com',
//   path: '/search',
//   query: {
//      q: 'cats',
//      region: 'eu'
//   }
//
