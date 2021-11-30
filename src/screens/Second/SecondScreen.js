"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const SecondScreen = ({ route, navigation }) => {
    const firstParam = route.params.firstParam;
    return (
    // eslint-disable-next-line react-native/no-inline-styles
    React.createElement(react_native_1.View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
        React.createElement(react_native_1.Text, null, "Second Screen"),
        React.createElement(react_native_1.Text, null,
            " Here is the value of param: ",
            firstParam),
        React.createElement(react_native_1.Button, { title: 'Navigate to the first', onPress: () => navigation.goBack() })));
};
exports.default = SecondScreen;
