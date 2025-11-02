export class GitUser {
    user_login: string;
    user_id: number;
    followers_of_user: number;
    user_follows: number;
    number_of_public_repos: number;

    constructor(userResponse: any) {
        this.user_login = userResponse.login || '';
        this.user_id = userResponse.id || 0;
        this.followers_of_user = userResponse.followers || 0;
        this.user_follows = userResponse.following || 0;
        this.number_of_public_repos = userResponse.public_repos || 0;
    }

   
}