const url = "https://gik2f8-labs.herokuapp.com/books";

async function getAll() {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (e) {
    return e;
  }
}

async function getOne(id) {
  try {
    const result = await fetch(`${url}/${id}`);
    return await result.json();
  } catch (e) {
    return e;
  }
}
