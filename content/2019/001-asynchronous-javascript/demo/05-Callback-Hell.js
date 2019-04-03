import { apiQuery } from './api';

apiQuery('/events', (error, events) => {
    if (error) {
        console.error(error);
    } else {
        apiQuery('/people', (error, people) => {
            if (error) {
                console.error(error);
            } else {
                apiQuery('/calendar', (error, calendar) => {
                    if (error) {
                        console.error(error);
                    } else {
                        apiQuery('/posts', (error, posts) => {
                            if (error) {
                                console.error(error);
                            } else {
                                apiQuery('/profile', (error, profile) => {
                                    if (error) {
                                        console.error(error);
                                    } else {
                                        apiQuery(
                                            '/whatever',
                                            (error, whatever) => {
                                                if (error) {
                                                    console.error(error);
                                                } else {
                                                    console.log(
                                                        `Now I can use all the data`,
                                                    );
                                                }
                                            },
                                        );
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
