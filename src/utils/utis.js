import {
    Message
} from 'view-design';

export default {
    alertInfo(code, msg) {
        if (code == 200) {
            Message.success(msg);
        } else {
            Message.error(msg);
        }
    },



}