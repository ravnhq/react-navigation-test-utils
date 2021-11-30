"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_stack_1 = require("@react-navigation/native-stack");
const FirstScreen_1 = __importDefault(require("./First/FirstScreen"));
const SecondScreen_1 = __importDefault(require("./Second/SecondScreen"));
const Stack = (0, native_stack_1.createNativeStackNavigator)();
const RootStack = () => {
    return (react_1.default.createElement(Stack.Navigator, { initialRouteName: 'FirstScreen' },
        react_1.default.createElement(Stack.Screen, { name: "FirstScreen", component: FirstScreen_1.default }),
        react_1.default.createElement(Stack.Screen, { name: "SecondScreen", component: SecondScreen_1.default })));
};
exports.default = RootStack;
