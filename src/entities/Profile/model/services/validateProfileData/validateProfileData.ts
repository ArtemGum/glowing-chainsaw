import { Profile, ValidateProfilError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfilError.NO_DATA];
    }

    const {
        first, lastname, age, country,
    } = profile;
    const errors: ValidateProfilError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfilError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfilError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfilError.INCORRECT_COUNTRY);
    }

    return errors;
};
