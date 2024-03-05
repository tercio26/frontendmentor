import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set, child, get  } from "firebase/database";


import constants from "@/constants.js";

const database = {
    tables: {
        creditCards: 'credit_cards'
    },

    app: null,
    analytics: null,
    config: {},

    authUser: null,

    construct() {
        this.config = constants.firebaseConfig
        this.app = initializeApp(this.config);
        return this;
    },

    async fetchAll(table) {
        const dbRef = ref(getDatabase(this.app));
        return get(child(dbRef, table)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                return null
            }
        }).catch((error) => {
            console.error(error);
        });
    },

    async fetchOne(table, key) {
        return await this.fetchAll(`${table}/${key}`)
    },

    writeDB(table, data, key) {
        console.table({
            table: table,
            key: key,
            ...data
        })
        set(ref(getDatabase(this.app), `${table}/${key}`), data);
    }
}

export default database