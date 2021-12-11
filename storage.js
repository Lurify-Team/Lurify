/**
 * Use electron-settings to store data in the user's local storage.
 * Usage:
 * const storage = require('./storage.js');
 * storage.save(key, value); // Save value in the storage
 * value = storage.load(key); // Load value from the storage
 * key_exists = storage.exist(key); // Test if a key exists in storage
 */
const settings = require('electron-settings');

/**
 * Store data under a given key.
 * @param {string} key name of the data to store
 * @param {*} data value to store
 */
function save(key, data) {
    console.debug(`Saving ${key}`);
    settings.setSync(key, data);
}

/**
 * Load data from a given key.
 * @param {string} key name of the data to retrive
 */
function load(key) {
    console.debug(`Loading ${key}`);
    return settings.getSync(key);
}

/**
 * Probe whether a given key exists in storage.
 * @param {string} key the key to probe
 * @returns true if the key exists, false otherwise.
 */
function exist(key) {
    return settings.hasSync(key);
}

module.exports = { save, load, exist };
