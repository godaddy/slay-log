# slay-log
Attaches robust logging for GoDaddy to a slay application

# General Information
The default logging framework for slay is winston. Since winston is very configurable and supports a number of transports. Slay-log allows
passing any configuration to be used. By default, if no options are specified, the default Console transport is being used.

# Configure slay-log
Configure the logger in your preboots. The steps to follow are as simple as this:

1. Define the logger object, containing the transports for winston

2. require the ```slay-log``` module as a preboot for your application

## Example

This preboot configuration sets the http port to 8080 and specifies two tansports for your logger. The file is located in preboot/config.js

```app.config
   .overrides(options)
   .use('argv')
   .use('env')
   .use('literal', {
     http: 8080,
     logger: {
       transports: [
         new (winston.transports.Console)(),
         new (winston.transports.File)({ filename: /var/log/myapp.log})
       ]
     }
   })
   .load(callback);
```

Define your preboots in ```preboot/index.js```


```
'use strict';

/*
 * Setup the ordering for all of our prebooting in
 * the application.
 */
module.exports = function (app, options, callback) {
  /* Load the configuration file that contains the logger configuration */
  app.preboot(require('./config'));
  app.preboot(require('./stacks'));

  /* Load the logger module */
  app.preboot(require('slay-log')());

  //
  // Future preboots for your application go here.
  //
  callback();
};
```

## License
MIT
