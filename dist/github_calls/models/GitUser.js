"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitUser = void 0;
class GitUser {
    user_login;
    user_id;
    followers_of_user;
    user_follows;
    number_of_public_repos;
    constructor(userResponse) {
        this.user_login = userResponse.login || '';
        this.user_id = userResponse.id || 0;
        this.followers_of_user = userResponse.followers || 0;
        this.user_follows = userResponse.following || 0;
        this.number_of_public_repos = userResponse.public_repos || 0;
    }
}
exports.GitUser = GitUser;
//# sourceMappingURL=GitUser.js.map