import { createObjectCsvStringifier } from 'csv-writer';
import { generateSampleData } from '../utils/sample-js-data.js';

const csvStringifier = createObjectCsvStringifier({
    header: [
        { id: 'fixtureId', title: 'FixtureID' },
        { id: 'date', title: 'Date' },
        { id: 'time', title: 'Time' },
        { id: 'playerA1', title: 'Player_A1' },
        { id: 'idA1', title: 'ID_A1' },
        { id: 'privacyA1', title: 'Privacy_A1' },
        { id: 'clubA1', title: 'Club_A1' },
        { id: 'regionA1', title: 'Region_A1' },
        { id: 'countryA1', title: 'Country_A1' },
        { id: 'playerCountryA1', title: 'PlayerCountry_A1' },
        { id: 'categoryA1', title: 'Category_A1' },
        { id: 'genderA1', title: 'Gender_A1' },
        { id: 'dobA1', title: 'DoB_A1' },
        { id: 'clubAddressA1', title: 'ClubAddress_A1' },
        { id: 'latA1', title: 'Lat_A1' },
        { id: 'lngA1', title: 'Lng_A1' },
        { id: 'playerA2', title: 'Player_A2' },
        { id: 'idA2', title: 'ID_A2' },
        { id: 'privacyA2', title: 'Privacy_A2' },
        { id: 'clubA2', title: 'Club_A2' },
        { id: 'regionA2', title: 'Region_A2' },
        { id: 'countryA2', title: 'Country_A2' },
        { id: 'playerCountryA2', title: 'PlayerCountry_A2' },
        { id: 'categoryA2', title: 'Category_A2' },
        { id: 'genderA2', title: 'Gender_A2' },
        { id: 'dobA2', title: 'DoB_A2' },
        { id: 'clubAddressA2', title: 'ClubAddress_A2' },
        { id: 'latA2', title: 'Lat_A2' },
        { id: 'lngA2', title: 'Lng_A2' },
        { id: 'playerB1', title: 'Player_B1' },
        { id: 'idB1', title: 'ID_B1' },
        { id: 'privacyB1', title: 'Privacy_B1' },
        { id: 'clubB1', title: 'Club_B1' },
        { id: 'regionB1', title: 'Region_B1' },
        { id: 'countryB1', title: 'Country_B1' },
        { id: 'playerCountryB1', title: 'PlayerCountry_B1' },
        { id: 'categoryB1', title: 'Category_B1' },
        { id: 'genderB1', title: 'Gender_B1' },
        { id: 'dobB1', title: 'DoB_B1' },
        { id: 'clubAddressB1', title: 'ClubAddress_B1' },
        { id: 'latB1', title: 'Lat_B1' },
        { id: 'lngB1', title: 'Lng_B1' },
        { id: 'playerB2', title: 'Player_B2' },
        { id: 'idB2', title: 'ID_B2' },
        { id: 'privacyB2', title: 'Privacy_B2' },
        { id: 'clubB2', title: 'Club_B2' },
        { id: 'regionB2', title: 'Region_B2' },
        { id: 'countryB2', title: 'Country_B2' },
        { id: 'playerCountryB2', title: 'PlayerCountry_B2' },
        { id: 'categoryB2', title: 'Category_B2' },
        { id: 'genderB2', title: 'Gender_B2' },
        { id: 'dobB2', title: 'DoB_B2' },
        { id: 'clubAddressB2', title: 'ClubAddress_B2' },
        { id: 'latB2', title: 'Lat_B2' },
        { id: 'lngB2', title: 'Lng_B2' },
        { id: 'gamesScore', title: 'Games_Score' },
        { id: 'result', title: 'Result' },
        { id: 'sport', title: 'Sport' },
        { id: 'matchType', title: 'MatchType' },
        { id: 'weight', title: 'Weight' },
        { id: 'sanctioned', title: 'Sanctioned' },
        { id: 'exclude', title: 'Exclude' }
    ]
})

export const getCSV = (req, res) => {
    try {
        const days = parseInt(req.query.days, 10) || 3;
        const data = generateSampleData(days);
        const csvContent = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(data);
        res.header('Content-Type', 'text/csv');
        res.attachment('match_results.csv');
        res.status(200).send(csvContent);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};