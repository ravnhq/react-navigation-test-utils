'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const MainNavigationStack_1 = __importDefault(
  require('./src/screens/MainNavigationStack'),
);
const native_1 = require('@react-navigation/native');
function App() {
  return react_1.default.createElement(
    native_1.NavigationContainer,
    null,
    react_1.default.createElement(MainNavigationStack_1.default, null),
  );
}
exports.default = App;
