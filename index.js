'use strict';

/**
 * Check if message has been outputted.
 *
 * @var {bool} sent
 */
let sent = false;

/**
 * Message to be outputted.
 *
 * @var {string} message
 */
const message = 'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a site feature or "hack" someone elses account, it is likely a scam and will give them access to your account.';

/**
 * Listen for dev tools open.
 *
 * @param {string} locale
 */
const listen = (locale = 'en-US') => {
    if (typeof window !== 'undefined' && typeof window.devtools !== 'undefined' && window.devtools.open) {
        window.addEventListener('devtoolschange', (e) => {
            if (e.detail.open && !sent) {
                warn(locale);
            }
        }, false);
    }
};

/**
 * Shows the message in console window.
 *
 * @param {string} locale
 *
 * @return void
 */
const warn = (locale = 'en-US') => {
    const localeMessage = getMessage(locale);
    console.warn(`%c${localeMessage}`, 'background-color:white;color:red;');
};

/**
 * Adds a custom message to console log.
 *
 * @param {string} locale
 *
 * @return {string}
 */
const getMessage = (locale = 'en-US') => {
    const localeMessage = message.toLocaleString(locale);
    return localeMessage;
};

module.exports = {
    sent,
    message,
    listen,
    warn,
    getMessage
};