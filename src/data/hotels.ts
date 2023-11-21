interface HotelsList {
  name : String
  distance?: String
  rooms: String[]
  address? : String
  contacts? : String[]
  mapLink : URL
}

export const hotelsList : HotelsList[] = [
    {
      name: "Hotel Minerva",
      distance: "550 m",
      rooms: [
        "Single: 800 INR (Non AC)",
        "Double: 1200 INR (Non AC)",
        "Triple: 1500 INR (Non AC)",
        "Four bed: 2000 INR (Non AC)"
      ],
      address: "Panbazar, GNB Road, Guwahati- 781001, ASSAM",
      contacts: ["0361-2732084", "86387-28123", "60016-21200"],
      mapLink: new URL("https://maps.app.goo.gl/KF1mphe9ryBTxa9S6")
    },
    {
      name: "Star Lodge",
      distance: "500 m",
      rooms: [
        "Deluxe Non AC Single: 1100 INR",
        "Deluxe Non AC Double: 1350 INR",
        "Super Deluxe Ac Single: 1500 INR",
        "Super Deluxe AC Double: 1800 INR",
        "Super Deluxe Non AC 3 Beded: 2000 INR",
        "Super Deluxe AC 3 Beded: 2300 INR",
        "Four Beded Non AC: 3000 INR",
        "Four Beded AC: 3500 INR",
        "Extra person/ Bed: 500 INR"
      ],
      address: "GNB Road, Near RBI, Don Bosco Chariali, Panbazar, Guwahati – 781001",
      contacts: ["+91 60031 95209", "+91 97065 98160"],
      mapLink: new URL("https://maps.app.goo.gl/F1tngkxtYLWepX1B8")
    },
    {
      name: "Mayflower",
      distance: "650 m",
      rooms: [
        "Irish Single: 4400 INR + Tax",
        "Irish Double: 5300 INR + Tax",
        "Irish Red Single: 4900 INR + Tax",
        "Irish Red Double: 5500 INR + Tax",
        "Irish Blue Single: 5500 INR + Tax",
        "Irish Blue Double: 6400 INR + Tax",
        "Irish Purple Single/ Double: 7200 INR + Tax"
      ],
      address: "MLN Road, Panbazar, Guwahati- 781001, Assam",
      contacts: ["069012 25101"],
      mapLink: new URL("https://maps.app.goo.gl/rdP5FNpawPUS8tuZ6")
    },
    {
      name: "Hotel Lilawati Grand",
      distance: "850 m",
      rooms: [
        "Double Non AC: 1500 INR + Tax",
        "Double Ac: 2500 INR + Tax"
      ],
      address: "MLN Road, Panbazar, Near Don Bosco School, Guwahati 781001",
      contacts: ["Lilawatigrand@gmail.com", "09707012741"],
      mapLink: new URL("https://maps.app.goo.gl/aVVceVS7NDaSPkpVA")
    },
    {
      name: "Hotel Gateway Grandeur",
      distance: "5.5 km",
      rooms: [
        "Executive Single: 4500 INR + GST",
        "Executive Double: ",
        "Hill View Single: ",
        "Hill View Double: ",
        "Bliss Single: ",
        "Bliss Double: ",
        "Club Single: 8000 INR + GST 18% (25% Discount)",
        "Club Double: 9000 INR + GST 18% (25% Discount)",
        "King Suite Single/ Double: 12000 INR + GST 18% (25% Discount)",
        "Royal Suite Single/ Double: 18999 INR + GST 18% (25% Discount)"
      ],
      address: "GS Road Christian Basti, Guwahati- 781005, Assam",
      contacts: ["info@gatewaygrandeur.com", "0361 352 0000", "096780 41003"],
      mapLink: new URL("https://maps.app.goo.gl/P3sRCAENFsji53PC8")
    },
    {
      name: "Hotel Swagatam Inn",
      distance: "500 m",
      rooms: [
        "Standard Single: 2690 INR",
        "Standard Double: 3190 INR",
        "Deluxe Single: 3390 INR",
        "Deluxe Double: 3990 INR",
        "Triple: 4290 INR",
        "Family: 4790 INR"
      ],
      address: "GNB Road, Panbazar, Guwahati- 781001",
      contacts: ["Swagatam.inn@gmail.com", "0361 3565685", "70990 62599"],
      mapLink: new URL("https://maps.app.goo.gl/xBqWvVfSnFBhRdg97")
    },
    {
      name: "Prashaanti Tourist Lodge",
      distance: "650 m",
      rooms: [
        "Deluxe Double: 2800 INR",
        "Deluxe Single: 2300 INR",
        "Semi Deluxe Double: 2300 INR",
        "Semi Deluxe Single: 1600 INR",
        "Standard Double: 1600 INR",
        "Standard Single: 1119 INR"
      ],
      address: "Station Road Near RBI Bank Kamrup PanBazar, Guwahati, Assam 781001",
      contacts: ["0361263 3654"],
      mapLink: new URL("https://maps.app.goo.gl/4gerxR8ZNbbDSNwXA")
    },
    {
      name: "Park Riviera",
      distance: "1.3 km",
      rooms: [
        "Executive Single Room: 4499 INR + Tax",
        "Executive Double Room: 4999 INR + Tax",
        "Deluxe Single Room: 3999 INR + Tax",
        "Deluxe Double Room: 4499 INR + Tax",
        "Budget Single Room: 2499 INR + Tax",
        "Budget Double Room: 2999 INR + Tax",
        "Service Apartment Single: 10999 INR + Tax",
        "Service Apartment Double: 13999 INR + Tax",
        "Park Royal Suite Single: 10999 INR + Tax",
        "Park Royal Suite Double: 13999 INR + Tax"
      ],
      address: "MC Road, UzanBazar, Barowari, Guwahati- 01, Assam, India",
      contacts: [
        "parkrivierahotel@gmail.com",
        "+91 3612733845",
        "+91 9101701960",
        "+91 9435010064"
      ],
      mapLink: new URL("https://maps.app.goo.gl/3GRNT8wWzH4rPdmU8")
    },
    {
      name: "Hotel Amrit Regency",
      distance: "4 km",
      rooms: [
        "Deluxe Double: 3200 INR",
        "Deluxe Single: 2700 INR",
        "Executive Double: 3100 INR",
        "Executive Single: 2600 INR",
        "Economy Single: 2400 INR",
        "Extra person: 650 INR"
      ],
      address: "GS Road, Ulubari, Guwahati- 781007",
      contacts: ["hotelamritregency@hotmail.com", "+91 99545 23866"],
      mapLink: new URL("https://maps.app.goo.gl/ionhFpuJDg1S6Nv36")
    },
    {
      name: "Hotel Fortune",
      distance: "3.5 km",
      rooms: [
        "Standard Non Ac: 1300 INR + GST",
        "Standard AC: 1600 INR + GST",
        "Deluxe: 2200 INR + GST",
        "Triple: 2200 INR + GST"
      ],
      address: "Opp. Apsara Cinema/ Volvo Point, GS Road, Ulubari, Guwahati 781007",
      contacts: ["Hotelfortune11@gmail.com", "+91 7002397427"],
      mapLink: new URL("https://maps.app.goo.gl/XmL2AcQswhk4ZbN38")
    },
    {
      name: "Hotel Pooja Palace",
      distance: "3.5 km",
      rooms: [
        "Deluxe AC Double: 1999 INR + GST",
        "Deluxe Non AC Single: 1499 INR + GST",
        "Super Deluxe Single: 1999 INR + GST",
        "Super Deluxe Double AC: 2500 INR + GST",
        "Extra Person: 500 INR"
      ],
      address: "Lihazan By Lane, Opp. Apsara Cinema/ Volvo Point, GS Road, Ulubari, Guwahati 781007",
      contacts: ["poojapalace@gmail.com", "94355 92611", "99543 45585"],
      mapLink: new URL("https://maps.app.goo.gl/hEgM73RP8UYM1uf67")
    },
    {
      name: "Hotel Spring Brook",
      distance: "2.5 km",
      rooms: [],
      address: "ASCU Bhawan, 2nd Floor, B. Baruah Road, Ulubari , Guwahati 781007",
      contacts: ["hotelspringbrookguwahati@gmail.com", "60014 92698"],
      mapLink: new URL("https://maps.app.goo.gl/QMJAoKerUaHj8FkJ7")
    },
    {
      name: "Hotel Rialto",
      distance: "700 m",
      rooms: [
        "Executive: 3000 INR",
        "Deluxe: 2300 INR",
        "Standard: 1800 INR",
        "Extra Bed: 700 INR",
        "Extra Person: 500 INR"
      ],
      address: "GNB Road, Panbazar, Guwahati- 7681001",
      contacts: [
        "Hotelrialto.007@gmail.com",
        "Sachinrialto.11@gmail.com",
        "94017 26686",
        "03612970140"
      ],
      mapLink: new URL("https://maps.app.goo.gl/GWr3sWuTfMGEH2BfA")
    },
    {
      name: "Hotel President",
      distance: "600 m",
      rooms: [
        "Saver: 1799 INR + Tax",
        "Classic Single: 2218 INR + Tax",
        "Classic Double: 2499 INR + Tax",
        "Suite: 2999 INR + Tax",
        "Extra Bed: 840 INR + Tax"
      ],
      address: "GNB Road, Panbazar, Guwahati- 7681001",
      contacts: [
        "Hotelpresident7@gmail.com",
        "03612544911/682",
        "2638141/142",
        "88110 82040"
      ],
      mapLink: new URL("https://maps.app.goo.gl/QcjuQVCV9SrdZd3D9")
    },
    {
      name: "Hotel Prag Continental",
      distance: "350 m",
      rooms: [],
      address: "Motilal Nehru Road, Panbazar, Guwahati, Assam- 781001",
      contacts: [
        "hotelprag@yahoo.com",
        "reservations@hotelpragcontinental.com",
        "+91 8876507135"
      ],
      mapLink: new URL("https://maps.app.goo.gl/1hsXcQN8sFLwa3Cc9")
    }
  ]
  