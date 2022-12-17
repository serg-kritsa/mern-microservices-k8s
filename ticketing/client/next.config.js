module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
// // NOTE: for the latest versions of Next.js
// module.exports = {
//   webpack: (config) => {
//     config.watchOptions.poll = 300;
//     return config;
//   },
// };
// // NOTE: to update w/ new chages is needed to delete pod (kubectl delete pod <pod-name>) and restarted pod will be w/ new changes
