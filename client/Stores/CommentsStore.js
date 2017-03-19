/**
 * Created by sergey-raichman on 18/03/2017.
 */
import { observable, action } from 'mobx'
import { GET, POST } from '../Utils/communication'

let comments = [];

class CommentsStore {

    @observable shownComments = comments;

    getComments() {
        GET('/comments').then((data) => {
            comments = data.comments;
            this.shownComments = comments;
        });
    }

    @action addComment(newComment) {
        POST('/save-comment', newComment).then(response => {
            if(response.success) {
                this.getComments();
            }
        });
    }

    @action filterComments(term) {
        this.shownComments = term !== "" ? comments.filter(comment => {
            return comment.email.indexOf(term) > -1 || comment.commentText.indexOf(term) > -1;
        }) : comments;
    }
}

export default new CommentsStore();