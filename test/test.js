'use strict';

const expect = require('chai').expect;
const { ConScamWarn } = require('../src/index');

const locale = (new Intl.NumberFormat()).resolvedOptions().locale;
const defaultLocale = 'en-US';
let defaultMessage = ConScamWarn.message;
const customMessage = 'custom message';

// console.log('locale', locale);

describe('#ConScamWarn', () => {
    it(`should convert default locale string: ${defaultLocale}`, () => {
        const result = ConScamWarn.getMessage();
        defaultMessage = defaultMessage.toLocaleString(defaultLocale);
        expect(result).to.equal(defaultMessage);
    });

    it(`should convert locale string: ${locale}`, () => {
        ConScamWarn.locale = locale;
        const result = ConScamWarn.getMessage();
        defaultMessage = defaultMessage.toLocaleString(locale);
        expect(result).to.equal(defaultMessage);
    });

    it(`should not match default locale string: ${customMessage}`, () => {
        const result = ConScamWarn.getMessage();
        defaultMessage = customMessage.toLocaleString(locale);
        expect(result).not.equal(defaultMessage);
    });
});