const listings = [
  {
    id: 401,
    title: "Favorites",
    data: [
      {
        id: 201,
        title: "Parker Pen",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/parkerpen_full.jpg" },
        ],
        price: 100,
        categoryId: 5,
        userId: 1,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
      {
        id: 3,
        title: "Dymo",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/dymo_full.jpg" },
        ],
        categoryId: 1,
        price: 1200,
        userId: 2,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ],
  },
  {
    id: 402,
    title: "Writing",
    data: [
      {
        id: 1,
        title: "Elmers",
        description:
          "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/parkerpen_full.jpg" },
          { fileName: "http://192.168.0.101:9000/assets/dymo_full.jpg" },
          { fileName: "http://192.168.0.101:9000/assets/dymo_full.jpg" },
        ],
        price: 1000,
        categoryId: 1,
        userId: 1,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
      {
        id: 2,
        title: "Mr. Sketch",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/mrsketch_full.jpg" },
        ],
        categoryId: 5,
        price: 100,
        userId: 2,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
      {
        id: 102,
        title: "Papermate",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/dymo_full.jpg" },
        ],
        price: 300,
        categoryId: 3,
        userId: 1,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ],
  },
  {
    id: 403,
    title: "Home Appliances",
    data: [
      {
        id: 101,
        title: "Krazy Glue",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/krazy_full.jpg" },
        ],
        price: 350,
        categoryId: 3,
        userId: 1,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
      {
        id: 4,
        title: "Prisma Color",
        description: "No rips no stains no odors",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/prismacolor_full.jpg" },
        ],
        categoryId: 1,
        price: 950,
        userId: 2,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ],
  },
  {
    id: 404,
    title: "Security",
    data: [
      {
        id: 6,
        title: "Reynolds",
        images: [
          { fileName: "http://192.168.0.101:9000/assets/krazy_full.jpg" },
        ],
        categoryId: 5,
        price: 50,
        userId: 2,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ],
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
