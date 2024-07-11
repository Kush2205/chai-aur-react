
    let a={}
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`).then((res) => res.json()).then(res => console.log(res.usd))
    console.log(a)
