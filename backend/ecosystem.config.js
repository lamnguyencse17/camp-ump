module.exports = {
    apps : [{
      script: './server.js',
      watch: '.',
      instances  : 12,
        exec_mode  : "cluster"
    }],
  };