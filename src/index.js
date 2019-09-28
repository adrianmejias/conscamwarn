'use strict';

class ConScamWarn {
    constructor() {
        this.locale = 'en-US';
        this.message = 'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a site feature or "hack" someone elses account, it is likely a scam and will give them access to your account.';
    }

    /**
     * Shows the message in console window.
     *
     * @param {string} locale
     *
     * @return void
     */
    showMessage() {
        const localeMessage = this.getMessage();
        console.warn(`%c${localeMessage}`, 'background-color:white;color:red;');
    }

    /**
     * Adds a custom message to console log.
     *
     * @param {string} locale
     *
     * @return {string}
     */
    getMessage() {
        const localeMessage = this.message.toLocaleString(this.locale);
        return localeMessage;
    }
};

module.exports = {
	ConScamWarn: (new ConScamWarn)
};