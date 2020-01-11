/**
 *
 * @summary sftp remote connection object
 * @author Abhishek Mane
 *
 * Created at     : 2020-01-11 23:02:46 
 * Last modified  : 2020-01-11 23:15:45
 */

let Client = require('ssh2-sftp-client');

module.exports = async (config) => {
    return await new Client(config.host)
}