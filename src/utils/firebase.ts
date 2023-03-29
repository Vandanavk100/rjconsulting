import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported, logEvent, initializeAnalytics } from "firebase/analytics";
import {CustomEventName} from "@firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDO53JK--8jTkfis9FtTqqr85YIpEDqHuc",
    authDomain: "reconsulting-tech.firebaseapp.com",
    projectId: "reconsulting-tech",
    storageBucket: "reconsulting-tech.appspot.com",
    messagingSenderId: "644976008669",
    appId: "1:644976008669:web:047eee48c0ed334891ea34",
    measurementId: "G-F3BML8ZNPY"
};
const app = initializeApp(firebaseConfig)
const analytics = initializeAnalytics;

const logPageEvent = (page_title: string, page_path: string) => {
    logEvent(getAnalytics(app), "page_view", {page_path, page_title});
    console.log("URL", page_path);
};

const logClickEvent = (eventName: CustomEventName<any>, event_label: string) => {
    logEvent(getAnalytics(app), eventName, {event_label});
}

export { app, analytics, isSupported, getAnalytics, logPageEvent, logClickEvent };

