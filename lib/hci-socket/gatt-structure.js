//
// Gatt Structure Encapsulation
//

var GattStructure = function() {
    this._services = {};
    this._characteristics = {};
    this._descriptors = {};
    this.forceCaching = true; // Force caching even if 'service changed' present
};


GattStructure.prototype.cleanup = function() {
    // According to the Bluetooth standard for unbonded devices attributes caching 
    // is only allowed when  no 'service changed' characteristics is present.
    // If 'service changed' is present cache is remove
    // This behavior can be overridden by setting forceCaching to true - this
    // is only allowed within the standard for bonded devices and when the
    // 'service changed' indictation are processed! Use only when you know
    // what you're doing.
    if(!this.forceCaching && this.characteristics.hasOwnProperty('1801') && this.characteristics['1801'].hasOwnProperty('2a05')) {
        this.services = {};
        this.characteristics = {};
        this.descriptors = {};
    }

};

module.exports = GattStructure;