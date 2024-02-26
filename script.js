async function getCountry() {
  const countryDiv = document.querySelector(".country-area");
  const inp = document.querySelector(".countryText");

  const country = inp.value;

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const data = await response.json();
  console.log(data, "data");

  let found = data.map((country) => {
    return `<img src="${country.flags.svg}" height=${40} width=${40}/>
    <p>Official-Name = ${country.name.official}
    <p>Common-Name = ${country.name.common}
  <p><span> Capital = ${country.capital[0]} -
   Continent = ${country.continents[0]}</span></p>
    <p><span>Population = ${country.population} -
    Area = ${country.area} - Timezone = ${country.timezones[0]}</span> </p>`;
  });

  countryDiv.classList.remove("main");
  countryDiv.innerHTML = `<p>SearchedCountry = ${inp.value}</p> ${found}`;

  inp.value = "";
}
