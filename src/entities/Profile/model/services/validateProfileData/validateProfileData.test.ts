import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfilError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'test',
    first: 'test',
    city: 'gg',
    currency: Currency.EUR,
};

describe('validateProfileData', () => {
    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfilError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfilError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfilError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfilError.INCORRECT_USER_DATA,
            ValidateProfilError.INCORRECT_AGE,
            ValidateProfilError.INCORRECT_COUNTRY,
        ]);
    });
});
