import { Person } from "./person_test/Person";
import { GithubApiServiceCall } from "./github_calls/GithubServiceCall";
import { GitUser } from "./github_calls/models/GitUser";    

import * as _ from "lodash";

let newPerson = new Person("John", "Doe", 30);
console.log(newPerson.getFullNameAndAge());

var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = _.reverse(_.clone(numbers));
console.log("Reversed Numbers:", reversedNumbers);

// Object creation GithubApiServiceCall
let githubService = new GithubApiServiceCall();

// non-callback version
//githubService.getUserInfo("vidhangithub");

// callback version
githubService.getUserInfo("vidhangithub", (user : GitUser) => {
    console.log("GitHub User Info with Callback:", user);
});