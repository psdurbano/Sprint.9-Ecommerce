const SHIPPING_RATES = {
  spain: { label: "Spain", amount: 7.5 },
  europe: { label: "Europe", amount: 15 },
  row: { label: "Rest of World", amount: 24 },
};

// Simplified list.
const EUROPE_COUNTRIES = [
  "Austria",
  "Belgium",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Norway",
  "Switzerland",
  "United Kingdom",
];

export function inferShippingZone(countryRaw = "") {
  const country = (countryRaw || "").trim().toLowerCase();

  if (!country) return "row";

  if (country.includes("spain") || country.includes("españa")) {
    return "spain";
  }

  const isEurope = EUROPE_COUNTRIES.some((c) => c.toLowerCase() === country);

  return isEurope ? "europe" : "row";
}

export function getShippingRate(zone) {
  return SHIPPING_RATES[zone]?.amount ?? 0;
}

export function getShippingLabel(zone) {
  return SHIPPING_RATES[zone]?.label ?? "Rest of World";
}

export function calculateShippingFromCountry(countryRaw) {
  const zone = inferShippingZone(countryRaw);
  const amount = getShippingRate(zone);
  const label = getShippingLabel(zone);
  return { zone, amount, label };
}
