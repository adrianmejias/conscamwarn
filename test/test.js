'use strict';

const expect = require('chai').expect;
const conscamwarn = require('../index');

const locale = (new Intl.NumberFormat()).resolvedOptions().locale;
const defaultLocale = 'en-US';
let defaultMessage = conscamwarn.message;

// console.log('locale', locale);

describe('#conscamwarn', () => {
    it(`should convert default locale string: ${defaultLocale}`, () => {
        const result = conscamwarn.getMessage();
        defaultMessage = defaultMessage.toLocaleString(defaultLocale);
        expect(result).to.equal(defaultMessage);
    });

    it(`should convert locale string: ${locale}`, () => {
        const result = conscamwarn.getMessage(locale);
        defaultMessage = defaultMessage.toLocaleString(locale);
        expect(result).to.equal(defaultMessage);
    });
});