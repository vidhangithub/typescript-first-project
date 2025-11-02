import * as request from 'request';
import { GitUser } from './models/GitUser';

export class GithubApiServiceCall {


    //Service call without Callback
    // getUserInfo(username: string) {
    //     let options : any  = {
    //         headers: {
    //             'User-Agent': 'request'
    //         }
    //     }
    //     request.get(`https://api.github.com/users/${username}`, options, (error: any, response :any , body: any) => {
    //         if (error) {
    //             console.error('Error fetching user info:', error);
    //             return;
    //         }
    //         let gitUser = new GitUser(JSON.parse(body));
    //         console.log('User Info:', gitUser);

    //         });
    
    //     }

    //Service call with Callback
     getUserInfo(username: string, cb: (user : GitUser) => any ) {
        let options : any  = {
            headers: {
                'User-Agent': 'request'
            }
        }
        request.get(`https://api.github.com/users/${username}`, options, (error: any, response :any , body: any) => {
            if (error) {
                console.error('Error fetching user info:', error);
                return;
            }
            let gitUser = new GitUser(JSON.parse(body));
            cb(gitUser);

            });
    
        }


    }