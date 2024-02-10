const data = [
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
    },
    {
        location: "New York",
        latitude: 40.7128,
        longitude: -74.006,
    },
    {
        location: "Tokyo",
        latitude: 35.6895,
        longitude: 139.6917,
    },
    {
        location: "London",
        latitude: 51.5074,
        longitude: -0.1278,
    },
    {
        location: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
    },
    {
        location: "Beijing",
        latitude: 39.9042,
        longitude: 116.4074,
    },
    {
        location: "Moscow",
        latitude: 55.7558,
        longitude: 37.6176,
    },
    {
        location: "Berlin",
        latitude: 52.52,
        longitude: 13.405,
    },
    {
        location: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        location: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
    },
    {
        location: "Cairo",
        latitude: 30.0444,
        longitude: 31.2357,
    },
    {
        location: "Mexico City",
        latitude: 19.4326,
        longitude: -99.1332,
    },
    {
        location: "Los Angeles",
        latitude: 34.0522,
        longitude: -118.2437,
    },
    {
        location: "Rome",
        latitude: 41.9028,
        longitude: 12.4964,
    },
    {
        location: "Toronto",
        latitude: 43.6511,
        longitude: -79.347,
    },
    {
        location: "Seoul",
        latitude: 37.5665,
        longitude: 126.978,
    },
    {
        location: "Istanbul",
        latitude: 41.0082,
        longitude: 28.9784,
    },
    {
        location: "Bangkok",
        latitude: 13.7563,
        longitude: 100.5018,
    },
    {
        location: "Dubai",
        latitude: 25.276987,
        longitude: 55.296249,
    },
    {
        location: "Mumbai",
        latitude: 19.076,
        longitude: 72.8777,
    },
    {
        location: "Pabna",
        latitude: 24.006355,
        longitude: 89.249298,
    },
];

const getLocation = () => {
    return data;
};

const getLocationByName = (location) => {
    if (!location) {
        return null;
    }
    const filteredData = data.filter(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    if (filteredData.length > 0) {
        return filteredData[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: "",
            longitude: "",
        };
        return defaultLocation;
    }
};

export { getLocation, getLocationByName };
