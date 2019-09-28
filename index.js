'use strict';

class conscamwarn {
    /**
     * Check if message has been outputted.
     *
     * @var {bool} sent
     */
    sent = false;

    /**
     * Message to be outputted.
     *
     * @var {string} message
     */
    message = 'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a site feature or "hack" someone elses account, it is likely a scam and will give them access to your account.';

    constructor() {
        if (typeof window !== 'undefined' && typeof window.devtools !== 'undefined' && window.devtools.open) {
            window.addEventListener('devtoolschange', (e) => {
                if (e.detail.open && !this.sent) {
                    this.warn();
                }
            }, false);
        }
    }

    /**
     * Shows the message in console window.
     *
     * @return void
     */
    warn() {
        console.warn(`%c${this.message}`, 'background-color:white;color:red;');
    }

    /**
     * Adds a custom message to console log.
     *
     * @param {string} locale
     *
     * @return {string}
     */
    getMessage(locale = 'en-US') {
        const message = this.message.toLocaleString(locale);
        return message;
    }
};

module.exports = new conscamwarn;