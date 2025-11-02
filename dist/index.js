"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./person_test/Person");
const GithubServiceCall_1 = require("./github_calls/GithubServiceCall");
const _ = __importStar(require("lodash"));
let newPerson = new Person_1.Person("John", "Doe", 30);
console.log(newPerson.getFullNameAndAge());
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = _.reverse(_.clone(numbers));
console.log("Reversed Numbers:", reversedNumbers);
// Object creation GithubApiServiceCall
let githubService = new GithubServiceCall_1.GithubApiServiceCall();
// non-callback version
//githubService.getUserInfo("vidhangithub");
// callback version
githubService.getUserInfo("vidhangithub", (user) => {
    console.log("GitHub User Info with Callback:", user);
});
//# sourceMappingURL=index.js.map