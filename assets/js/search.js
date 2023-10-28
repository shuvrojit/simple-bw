async function getData() {
  try {
    const response = await fetch("/index.json");
    if (!response.ok) {
      return;
    }
    let data = await response.json();
    console.log(data)
    return data
  } catch(e) {
    return;
  }
}

