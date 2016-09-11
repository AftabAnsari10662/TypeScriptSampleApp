

    interface IHomeModel {
        message: string;
        title: string;
    }
    export class HomeController implements IHomeModel {

        message: string;
        title: string;
        constructor() {

            this.message = "Home Page!";
            this.title = "Index Page";
        }

    }
